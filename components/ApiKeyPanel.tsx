import React, { useState, useEffect } from 'react';
import { KeyIcon, XMarkIcon, SparklesIcon } from './IconComponents';
import { useLanguage } from '../context/LanguageContext';

interface ApiKeyPanelProps {
  onSave: (key: string) => void;
  onClose: () => void;
  currentApiKey: string;
}

export const ApiKeyPanel: React.FC<ApiKeyPanelProps> = ({ onSave, onClose, currentApiKey }) => {
    const { t } = useLanguage();
    const [inputValue, setInputValue] = useState(currentApiKey || '');

    useEffect(() => {
        setInputValue(currentApiKey || '');
    }, [currentApiKey]);

    const handleSave = () => {
        if(inputValue.trim()){
            onSave(inputValue.trim());
        }
    };
    
    // Prevent clicks inside the panel from closing it
    const handlePanelClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-end justify-center animate-fade-in"
            onClick={onClose}
        >
            <div 
                className="bg-slate-900 border-t border-slate-700 w-full max-w-2xl rounded-t-2xl shadow-2xl p-6 transform animate-slide-up"
                onClick={handlePanelClick}
            >
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-3">
                         <KeyIcon className="w-8 h-8 text-[var(--google-yellow)]" />
                         <h2 className="text-2xl font-bold text-slate-100">{t('manage_api_key')}</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-slate-800 transition-colors"
                        aria-label={t('close_button')}
                    >
                        <XMarkIcon className="w-7 h-7 text-slate-400" />
                    </button>
                </div>
                <p className="text-slate-300 mb-2">
                    {t('api_panel_description')}
                </p>
                 <a 
                    href="https://aistudio.google.com/app/apikey" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold text-[var(--google-blue)] hover:underline mb-6"
                >
                    <SparklesIcon className="w-5 h-5"/>
                    <span>{t('api_panel_get_key_link')}</span>
                 </a>

                <div className="space-y-4">
                    <div>
                        <label htmlFor="api-key-input" className="block text-sm font-bold text-slate-200 mb-1">{t('api_panel_input_label')}</label>
                        <input
                            id="api-key-input"
                            type="password"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder={t('api_panel_input_placeholder')}
                            className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-slate-100 focus:ring-2 focus:ring-[var(--google-blue)] focus:outline-none transition"
                        />
                    </div>
                     <button
                        onClick={handleSave}
                        className="w-full bg-[var(--google-green)] text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors shadow-lg disabled:bg-slate-600 disabled:cursor-not-allowed"
                        disabled={!inputValue.trim()}
                    >
                        {t('api_panel_save_button')}
                    </button>
                </div>
            </div>
        </div>
    );
};