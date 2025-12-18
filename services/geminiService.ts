import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export interface Source {
  title: string;
  uri: string;
}

export interface AssistantResponse {
  text: string;
  sources: Source[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  sources?: Source[];
}

// Product context to make the bot helpful regarding the website's purpose
const LEXCORA_PRODUCT_CONTEXT = `
ABOUT LEXCORA:
LEXCORA is a premium, UAE-focused Law Firm ERP (Enterprise Resource Planning) system designed for high-net-worth law firms and boutique legal consultancies.
Key Features to Highlight when relevant:
1. Productivity: Automated Judicial Deadline timers (appeals/objections), Smart Case Files with cross-referencing.
2. Client Experience: dedicated Client Portal for secure file viewing and invoicing.
3. Security: "Confidential Vault" for sensitive family/criminal cases, detailed Audit Logs.
4. Localized: Fully bilingual (Arabic/English) interface, compliant with UAE data sovereignty laws.
5. Pricing: Starter (199 AED/user), Professional (349 AED/user), Enterprise (Custom).
`;

const OFFICIAL_SOURCES_LIST = `
1. UAE Legislation (uaelegislation.gov.ae)
2. Ministry of Justice (moj.gov.ae)
3. Abu Dhabi Judicial Department (adjd.gov.ae)
4. Dubai Courts (dc.gov.ae)
5. DIFC Courts (difccourts.ae) for common law context.
`;

const getSystemPrompt = (lang: 'en' | 'ar') => {
  const isEn = lang === 'en';

  const roleDefinition = isEn 
    ? "You are a Senior Legal Technology Consultant for LEXCORA. You are speaking to high-net-worth lawyers and legal professionals in the UAE."
    : "أنت مستشار أول في التكنولوجيا القانونية لدى ليكسكورا. أنت تتحدث مع محامين ومستشارين قانونيين بارزين في الإمارات.";

  const tone = isEn
    ? "Your tone is professional, authoritative, concise, and helpful. Use legal terminology appropriately but remain accessible."
    : "أسلوبك مهني، موثوق، موجز، ومفيد. استخدم المصطلحات القانونية بشكل مناسب مع الحفاظ على الوضوح.";

  const objectives = isEn
    ? `
      OBJECTIVES:
      1. Answer queries about UAE Law using ONLY official sources.
      2. Answer queries about LEXCORA's features using the provided product context.
      3. If a user discusses a pain point (e.g., "I missed a deadline"), empathetically mention how LEXCORA's features (e.g., Automated Deadline Timers) can solve it.
      4. If the query is not related to Law, Legal Practice, or LEXCORA, politely decline to answer.
    `
    : `
      الأهداف:
      1. الإجابة على استفسارات القانون الإماراتي باستخدام المصادر الرسمية فقط.
      2. الإجابة على الأسئلة المتعلقة بميزات ليكسكورا.
      3. إذا ذكر المستخدم مشكلة (مثل "فوت موعداً نهائياً")، اذكر كيف يمكن لميزات ليكسكورا (مثل مؤقتات المواعيد الآلية) حلها.
      4. إذا كان الاستفسار غير متعلق بالقانون أو المحاماة أو ليكسكورا، اعتذر بلطف عن الإجابة.
    `;

  const disclaimers = isEn
    ? "Mandatory Disclaimer to end every message: 'Disclaimer: Information provided is for educational purposes only and does not constitute legal advice.'"
    : "إخلاء المسؤولية الإلزامي في نهاية كل رسالة: 'تنويه: المعلومات المقدمة للأغراض التعليمية فقط ولا تشكل مشورة قانونية.'";

  return `
    ${roleDefinition}
    ${tone}

    ${LEXCORA_PRODUCT_CONTEXT}

    OFFICIAL SOURCES TO PRIORITIZE:
    ${OFFICIAL_SOURCES_LIST}

    ${objectives}

    INSTRUCTIONS:
    - Structure answers clearly (use bullet points if listing laws or features).
    - Keep responses under 150 words unless asked for a detailed explanation.
    - Always cite the specific law or article number if found.
    - ${disclaimers}
  `;
};

function extractSources(response: GenerateContentResponse): Source[] {
  // @ts-ignore - groundingMetadata types access
  const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
  return chunks
    // @ts-ignore
    .map((chunk) => chunk.web)
    // @ts-ignore
    .filter((web) => web && web.uri && web.title)
    // @ts-ignore
    .map((web) => ({ title: web.title, uri: web.uri }));
}

export const getLegalAssistantResponse = async (query: string, lang: 'en' | 'ar'): Promise<AssistantResponse> => {
  if (!apiKey) {
    return {
      text: lang === 'en' 
        ? "Demo Mode: API Key not configured. (Simulated Response) According to UAE Labour Law..." 
        : "وضع تجريبي: مفتاح API غير مكون. (رد محاكى) وفقاً لقانون العمل الإماراتي...",
      sources: []
    };
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: query,
      config: {
        systemInstruction: getSystemPrompt(lang),
        tools: [{ googleSearch: {} }],
      },
    });

    return {
      text: response.text || (lang === 'en' ? "No response generated." : "لم يتم إنشاء استجابة."),
      sources: extractSources(response)
    };
  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      text: lang === 'en' 
        ? "Service temporarily unavailable. Please try again later."
        : "الخدمة غير متوفرة حالياً. يرجى المحاولة مرة أخرى لاحقاً.",
      sources: []
    };
  }
};

export class LexCoraChatSession {
  private chat: Chat | null = null;
  private lang: 'en' | 'ar';

  constructor(lang: 'en' | 'ar', history: ChatMessage[] = []) {
    this.lang = lang;
    if (apiKey) {
      // Convert internal ChatMessage format to Gemini SDK history format
      const chatHistory = history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }));

      this.chat = ai.chats.create({
        model: 'gemini-3-pro-preview',
        config: { 
          systemInstruction: getSystemPrompt(lang),
          tools: [{ googleSearch: {} }] 
        },
        history: chatHistory
      });
    }
  }

  async sendMessage(message: string): Promise<AssistantResponse> {
    if (!apiKey || !this.chat) {
      return {
        text: this.lang === 'en'
          ? "Demo Mode: API Key not configured. I cannot process real-time requests without an API key."
          : "الوضع التجريبي: مفتاح API غير مكون. لا يمكنني معالجة الطلبات في الوقت الفعلي بدون مفتاح.",
        sources: []
      };
    }

    try {
      const response = await this.chat.sendMessage({ message });
      return {
        text: response.text || "",
        sources: extractSources(response)
      };
    } catch (error) {
      console.error("Gemini Chat Error:", error);
      return {
        text: this.lang === 'en' 
          ? "I apologize, but I am encountering technical difficulties at the moment. Please try again or contact our support."
          : "أعتذر، ولكنني أواجه صعوبات فنية في الوقت الحالي. يرجى المحاولة مرة أخرى أو الاتصال بالدعم.",
        sources: []
      };
    }
  }
}