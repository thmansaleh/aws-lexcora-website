export interface Source {
  title: string;
  id?: string;
  url?: string;
  page?: string;
  chunk?: string;
  snippet?: string;
  type?: string;
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

const API_BASE_URL = import.meta.env.VITE_BACKEND_API_URL || 'http://localhost:8080/api';

export class BackendChatSession {
  private lang: 'en' | 'ar';
  private history: ChatMessage[];

  constructor(lang: 'en' | 'ar', history: ChatMessage[] = []) {
    this.lang = lang;
    this.history = history;
  }

  async sendMessage(message: string): Promise<AssistantResponse> {
    try {
      // Convert history to backend format (array of objects with role and parts)
      const formattedHistory = this.history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }));

      const response = await fetch(`${API_BASE_URL}/legal-assistant/public`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          history: formattedHistory,
        }),
      });

      if (!response.ok) {
        throw new Error(`Backend error: ${response.status}`);
      }

      const data = await response.json();

      // Backend returns { success: true, answer: "...", sources: [...] }
      let answer = '';
      let sources: Source[] = [];

      if (data.success && data.answer) {
        answer = data.answer;
        sources = data.sources || [];
      } else if (data.answer) {
        answer = data.answer;
        sources = data.sources || [];
      } else {
        answer = data.message || 'No response received';
      }

      return {
        text: answer,
        sources: sources,
      };
    } catch (error) {
      console.error('Backend Chat Error:', error);
      return {
        text: this.lang === 'en'
          ? 'I apologize, but I am encountering technical difficulties at the moment. Please try again or contact our support.'
          : 'أعتذر، ولكنني أواجه صعوبات فنية في الوقت الحالي. يرجى المحاولة مرة أخرى أو الاتصال بالدعم.',
        sources: [],
      };
    }
  }

  // Update local history after sending a message
  updateHistory(userMessage: string, assistantResponse: AssistantResponse) {
    this.history.push({ role: 'user', text: userMessage });
    this.history.push({ 
      role: 'model', 
      text: assistantResponse.text,
      sources: assistantResponse.sources 
    });
  }
}
