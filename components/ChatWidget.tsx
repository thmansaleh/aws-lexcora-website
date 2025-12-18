import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Minimize2, Sparkles, ExternalLink, Trash2, Download, Copy, Check, Plus, RefreshCw } from 'lucide-react';
import { LexCoraChatSession, Source, ChatMessage } from '../services/geminiService';
import { Language } from '../types';
import { CONTENT } from '../constants';

interface ChatWidgetProps {
  lang: Language;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  
  const chatSessionRef = useRef<LexCoraChatSession | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const STORAGE_KEY = 'lexcora_chat_history';
  
  const t = CONTENT[lang].chatbot;

  // Initialize chat and load history
  useEffect(() => {
    const savedHistory = localStorage.getItem(STORAGE_KEY);
    let initialMessages: ChatMessage[] = [];

    if (savedHistory) {
      try {
        initialMessages = JSON.parse(savedHistory);
      } catch (e) {
        console.error("Failed to parse chat history", e);
      }
    }

    // If no history or empty, add welcome message
    if (initialMessages.length === 0) {
      initialMessages = [{ role: 'model', text: t.welcome }];
    }

    setMessages(initialMessages);
    chatSessionRef.current = new LexCoraChatSession(lang, initialMessages);
  }, [lang]); // Re-init if language changes (though ideally we might want to clear history on lang change or keep separate)

  // Persist history whenever messages change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    if (chatSessionRef.current) {
      const response = await chatSessionRef.current.sendMessage(userMessage);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: response.text,
        sources: response.sources
      }]);
    } else {
      // Fallback if ref is somehow null
      chatSessionRef.current = new LexCoraChatSession(lang, messages);
      const response = await chatSessionRef.current.sendMessage(userMessage);
       setMessages(prev => [...prev, { 
        role: 'model', 
        text: response.text,
        sources: response.sources
      }]);
    }
    
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleNewChat = () => {
    const welcomeMsg: ChatMessage[] = [{ role: 'model', text: t.welcome }];
    setMessages(welcomeMsg);
    localStorage.removeItem(STORAGE_KEY);
    chatSessionRef.current = new LexCoraChatSession(lang, []); // Reset session
  };

  const handleExport = () => {
    const exportText = messages.map(m => `[${m.role.toUpperCase()}]\n${m.text}\n${m.sources ? `Sources: ${m.sources.map(s => s.uri).join(', ')}` : ''}`).join('\n\n-------------------\n\n');
    const blob = new Blob([exportText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `lexcora-chat-export-${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(idx);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 ${lang === 'ar' ? 'left-6' : 'right-6'} z-50 w-14 h-14 rounded-full bg-lexcora-gold text-lexcora-blue shadow-xl flex items-center justify-center hover:bg-yellow-400 hover:scale-110 transition-all duration-300 border-2 border-white/20`}
        aria-label={isOpen ? "Close Chat" : "Open Chat"}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-24 ${lang === 'ar' ? 'left-6' : 'right-6'} z-50 w-full max-w-[360px] md:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transition-all duration-300 origin-bottom ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4 pointer-events-none'}`}
        role="dialog"
        aria-label="Chat Support Window"
      >
        {/* Header */}
        <div className="bg-lexcora-blue p-4 flex justify-between items-center text-white">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-lexcora-gold/20 flex items-center justify-center text-lexcora-gold">
               <Sparkles size={16} />
            </div>
            <div>
              <h3 className="font-bold text-sm tracking-wide">{t.title}</h3>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                <span className="text-[10px] text-slate-400">Online | Gemini 3 Pro</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
             <button 
              onClick={handleExport} 
              className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded transition-colors" 
              title={lang === 'en' ? "Export Chat" : "تصدير المحادثة"}
            >
              <Download size={16} />
            </button>
            <button 
              onClick={handleNewChat} 
              className="p-1.5 text-slate-400 hover:text-lexcora-gold hover:bg-white/10 rounded transition-colors" 
              title={lang === 'en' ? "New Chat" : "محادثة جديدة"}
            >
              <Plus size={16} />
            </button>
            <button 
              onClick={() => setIsOpen(false)} 
              className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded transition-colors ml-1" 
              aria-label="Minimize Chat"
            >
              <Minimize2 size={16} />
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="h-96 bg-slate-50 overflow-y-auto p-4 flex flex-col gap-4" aria-live="polite">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} group`}
            >
              <div 
                className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm flex flex-col gap-2 relative ${
                  msg.role === 'user' 
                    ? 'bg-lexcora-blue text-white rounded-br-none' 
                    : 'bg-white text-slate-700 border border-slate-200 rounded-bl-none'
                }`}
              >
                <span>{msg.text}</span>
                
                {/* Sources Display for Model Messages */}
                {msg.role === 'model' && msg.sources && msg.sources.length > 0 && (
                  <div className="mt-2 pt-2 border-t border-slate-100">
                    <p className="text-[10px] text-slate-400 font-bold mb-1 uppercase tracking-wider">
                      {lang === 'en' ? 'Sources:' : 'المصادر:'}
                    </p>
                    <ul className="space-y-1">
                      {msg.sources.map((src, i) => (
                        <li key={i}>
                          <a 
                            href={src.uri}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-[10px] text-lexcora-gold hover:underline truncate max-w-[200px]"
                          >
                            <ExternalLink size={10} /> {src.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Copy Button (Model Only) */}
                {msg.role === 'model' && (
                  <button 
                    onClick={() => handleCopy(msg.text, idx)}
                    className={`absolute top-2 ${lang === 'ar' ? 'left-2' : 'right-2'} p-1 rounded bg-white/50 hover:bg-slate-100 text-slate-400 hover:text-lexcora-blue opacity-0 group-hover:opacity-100 transition-opacity`}
                    title="Copy text"
                  >
                    {copiedId === idx ? <Check size={12} className="text-green-500" /> : <Copy size={12} />}
                  </button>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
               <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-slate-200 shadow-sm flex items-center gap-2">
                 <Loader2 size={16} className="animate-spin text-lexcora-gold" />
                 <span className="text-xs text-slate-400">{lang === 'en' ? 'Thinking...' : 'جارٍ التفكير...'}</span>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-slate-100">
          <div className="relative flex items-center gap-2">
            <input 
              type="text" 
              className="w-full bg-slate-100 border border-slate-200 rounded-full py-3 px-4 text-sm focus:outline-none focus:border-lexcora-gold focus:ring-1 focus:ring-lexcora-gold/20 transition-all placeholder:text-slate-400"
              placeholder={t.placeholder}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              disabled={isLoading}
              aria-label="Chat message"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-3 bg-lexcora-gold text-lexcora-blue rounded-full hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </div>
          <p className="text-[10px] text-center text-slate-400 mt-2 px-2">
            {t.disclaimer}
          </p>
        </div>
      </div>
    </>
  );
};