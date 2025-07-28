import React, { useRef } from 'react';
import { SparklesIcon, PaperAirplaneIcon, UserCircleIcon, CloudIcon, PaperClipIcon, XCircleIcon } from './IconComponents';
import { useLanguage } from '../context/LanguageContext';

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

interface AIAssistantProps {
  messages: ChatMessage[];
  input: string;
  isLoading: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSendMessage: (e: React.FormEvent) => Promise<void>;
  image: File | null;
  onImageChange: (file: File | null) => void;
}

export const AIAssistant: React.FC<AIAssistantProps> = ({
  messages,
  input,
  isLoading,
  onInputChange,
  onSendMessage,
  image,
  onImageChange,
}) => {
  const { t } = useLanguage();
  const chatContainerRef = React.useRef<HTMLDivElement>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onImageChange(e.target.files[0]);
    }
  };

  const handleRemoveImage = () => {
    onImageChange(null);
    if(fileInputRef.current) {
        fileInputRef.current.value = "";
    }
  };

  return (
    <section aria-labelledby="ai-assistant-title" className="bg-slate-900/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-700">
      <div className="flex items-center gap-3 mb-4">
        <SparklesIcon className="w-8 h-8 text-[var(--google-blue)]" />
        <h2 id="ai-assistant-title" className="text-2xl font-bold text-slate-100">{t('ai_assistant_title')}</h2>
      </div>
      <p className="text-slate-300 mb-6">
        {t('ai_assistant_description')}
      </p>

      <div className="bg-black/50 rounded-lg p-4 h-96 flex flex-col">
          <div ref={chatContainerRef} className="flex-1 space-y-4 overflow-y-auto pr-2">
            {messages.map((msg, index) => (
                <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                   {msg.role === 'model' && (
                     <div className="w-8 h-8 bg-blue-900/50 text-[var(--google-blue)] rounded-full flex items-center justify-center flex-shrink-0">
                        <CloudIcon className="w-5 h-5" />
                     </div>
                   )}
                   <div className={`max-w-xl p-3 rounded-lg ${msg.role === 'user' ? 'bg-[var(--google-blue)] text-white' : 'bg-slate-800 text-slate-200 shadow-sm'}`}>
                      <p className="text-sm leading-relaxed" style={{ whiteSpace: 'pre-wrap' }}>{msg.content}</p>
                   </div>
                   {msg.role === 'user' && (
                     <div className="w-8 h-8 bg-slate-700 text-slate-300 rounded-full flex items-center justify-center flex-shrink-0">
                        <UserCircleIcon className="w-5 h-5" />
                     </div>
                   )}
                </div>
            ))}
            {isLoading && messages.length > 0 && messages[messages.length-1].role === 'user' && (
                 <div className="flex items-start gap-3 justify-start">
                    <div className="w-8 h-8 bg-blue-900/50 text-[var(--google-blue)] rounded-full flex items-center justify-center flex-shrink-0">
                        <CloudIcon className="w-5 h-5" />
                     </div>
                    <div className="max-w-md p-3 rounded-lg bg-slate-800 text-slate-200 shadow-sm">
                        <div className="flex items-center justify-center gap-2 p-2">
                            <span className="h-2 w-2 bg-[var(--google-blue)] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
	                        <span className="h-2 w-2 bg-[var(--google-blue)] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
	                        <span className="h-2 w-2 bg-[var(--google-blue)] rounded-full animate-bounce"></span>
                        </div>
                    </div>
                 </div>
            )}
          </div>
          <div className="mt-2">
            {image && (
                <div className="mb-2 p-2 bg-slate-800 rounded-lg flex items-center justify-between animate-fade-in">
                    <div className="flex items-center gap-2 text-sm text-slate-300 overflow-hidden">
                        <img src={URL.createObjectURL(image)} alt="Image preview" className="w-10 h-10 rounded object-cover flex-shrink-0" />
                        <span className="truncate">{image.name}</span>
                    </div>
                    <button onClick={handleRemoveImage} className="text-slate-500 hover:text-[var(--google-red)] flex-shrink-0 ml-2">
                        <XCircleIcon className="w-6 h-6" />
                    </button>
                </div>
            )}
            <form onSubmit={onSendMessage} className="flex items-center gap-2">
              <input
                ref={fileInputRef}
                type="file"
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
                id="ai-assistant-file-upload"
              />
              <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  aria-label={t('attach_image')}
                  className="p-3 bg-slate-700 text-slate-300 rounded-lg hover:bg-slate-600 transition-colors flex-shrink-0"
              >
                  <PaperClipIcon className="w-6 h-6" />
              </button>
              <input
                type="text"
                value={input}
                onChange={onInputChange}
                placeholder={image ? t('ai_assistant_placeholder_image') : t('ai_assistant_placeholder_text')}
                aria-label={t('ai_assistant_input_aria_label')}
                className="flex-1 p-3 bg-slate-800 border border-slate-600 rounded-lg text-slate-100 focus:ring-2 focus:ring-blue-500 focus:outline-none transition disabled:bg-slate-800"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || (!input.trim() && !image)}
                aria-label={t('send_button_aria_label')}
                className="p-3 bg-[var(--google-blue)] text-white rounded-lg hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed transition-colors flex-shrink-0"
              >
                  <PaperAirplaneIcon className="w-6 h-6" />
              </button>
          </form>
          </div>
      </div>
    </section>
  );
};