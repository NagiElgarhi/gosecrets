import React, { useState, useEffect, useCallback } from 'react';
import { GoogleGenAI, Chat, Part } from '@google/genai';

import { ChatMessage } from './components/AIAssistant';
import { InstructionalGuide } from './components/InstructionalGuide';
import { HomePage } from './components/HomePage';
import { Navbar } from './components/Navbar';
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { AutomationPage } from './components/AutomationPage';
import { ContactPage } from './components/ContactPage';
import { CredentialsPage } from './components/CredentialsPage';
import { Footer } from './components/Footer';
import { ApiKeyPanel } from './components/ApiKeyPanel';
import { useLanguage } from './context/LanguageContext';

export type Page = 'home' | 'guide' | 'services' | 'automation' | 'about' | 'contact' | 'credentials';

const App: React.FC = () => {
  const { t, language } = useLanguage();
  const [page, setPage] = useState<Page>('home');
  const [apiKey, setApiKey] = useState<string>('');
  const [isApiPanelOpen, setIsApiPanelOpen] = useState(false);
  
  // State for AI Assistant (used in InstructionalGuide)
  const [chat, setChat] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [aiAssistantImage, setAiAssistantImage] = useState<File | null>(null);

  useEffect(() => {
    const storedKey = localStorage.getItem('user_api_key');
    const key = storedKey || process.env.API_KEY || '';
    setApiKey(key);
    // We no longer open the panel on load, only on user interaction.
    // if (!key) {
    //     setIsApiPanelOpen(true);
    // }
  }, []);

  useEffect(() => {
    // Always set a welcome message initially
    setMessages([{
        role: 'model',
        content: t('ai_assistant_welcome')
    }]);

    if (!apiKey) {
        setChat(null);
        return;
    }
    try {
        const ai = new GoogleGenAI({ apiKey });
        const chatInstance = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: t('ai_assistant_system_prompt', { lang: language === 'ar' ? 'Arabic' : 'English' }),
          },
        });
        setChat(chatInstance);
    } catch(e) {
        console.error(e);
        setMessages([{
            role: 'model',
            content: t('error_init_assistant')
        }]);
    }
  }, [apiKey, t, language]);

  const requestApiKey = () => setIsApiPanelOpen(true);
  
  async function fileToGenerativePart(file: File) {
    const base64EncodedDataPromise = new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve((reader.result as string).split(',')[1]);
        reader.readAsDataURL(file);
    });
    return {
        inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
    };
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!apiKey) {
        setMessages(prev => [...prev, { role: 'model', content: t('error_enter_api_key_to_start') }]);
        requestApiKey();
        return;
    }

    if ((!input.trim() && !aiAssistantImage) || isLoading || !chat) return;

    setIsLoading(true);
    const userMessageContent = input + (aiAssistantImage ? `\n(${t('image_attached')}: ${aiAssistantImage.name})` : '');
    const userMessage: ChatMessage = { role: 'user', content: userMessageContent };
    setMessages(prev => [...prev, userMessage]);

    const currentInput = input;
    const currentImage = aiAssistantImage;

    setInput('');
    setAiAssistantImage(null);

    try {
        const parts: Part[] = [];
        if (currentInput.trim()) {
            parts.push({ text: currentInput });
        }
        if (currentImage) {
            const imagePart = await fileToGenerativePart(currentImage);
            parts.push(imagePart);
        }

        const response = await chat.sendMessage({ message: parts });
        const modelMessage: ChatMessage = { role: 'model', content: response.text };
        setMessages(prev => [...prev, modelMessage]);
    } catch (error) {
        console.error("Error sending message:", error);
        const errorMessage: ChatMessage = { role: 'model', content: t('error_send_message') };
        setMessages(prev => [...prev, errorMessage]);
    } finally {
        setIsLoading(false);
    }
  };

  const handleSaveApiKey = (newKey: string) => {
    localStorage.setItem('user_api_key', newKey);
    setApiKey(newKey);
    setIsApiPanelOpen(false);
  };


  const renderPage = () => {
    switch (page) {
      case 'guide':
        return (
          <InstructionalGuide
            messages={messages}
            input={input}
            isLoading={isLoading}
            onInputChange={(e) => setInput(e.target.value)}
            onSendMessage={handleSendMessage}
            image={aiAssistantImage}
            onImageChange={setAiAssistantImage}
            apiKey={apiKey}
            onRequestApiKey={requestApiKey}
          />
        );
      case 'services':
        return <ServicesPage setPage={setPage} />;
      case 'automation':
        return <AutomationPage apiKey={apiKey} onRequestApiKey={requestApiKey} />;
      case 'credentials':
        return <CredentialsPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div className="bg-transparent text-slate-200 min-h-screen flex flex-col relative z-10">
      <Navbar page={page} setPage={setPage} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {renderPage()}
      </main>
      <Footer onToggleApiPanel={() => setIsApiPanelOpen(true)} />
      {isApiPanelOpen && (
          <ApiKeyPanel
            currentApiKey={apiKey}
            onSave={handleSaveApiKey}
            onClose={() => setIsApiPanelOpen(false)}
          />
      )}
    </div>
  );
};

export default App;