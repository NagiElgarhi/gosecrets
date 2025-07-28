import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { translations, TranslationKey } from '../localization/translations';

type Language = 'ar' | 'en';

interface LanguageContextType {
    language: Language;
    changeLanguage: (lang: Language) => void;
    t: (key: TranslationKey, options?: { [key: string]: string | number | undefined }) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Attempt to get language from localStorage, defaulting to 'ar'
    const storedLang = localStorage.getItem('language') as Language;
    const initialLang = ['ar', 'en'].includes(storedLang) ? storedLang : 'ar';
    const [language, setLanguage] = useState<Language>(initialLang);

    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
        // Save language choice to localStorage
        localStorage.setItem('language', language);
    }, [language]);

    const changeLanguage = (lang: Language) => {
        setLanguage(lang);
    };

    const t = useCallback((key: TranslationKey, options?: { [key: string]: string | number | undefined }) => {
        let text = translations[language]?.[key] || translations['en']?.[key] || String(key);
        if (options) {
            Object.keys(options).forEach((k) => {
                const value = options[k];
                if (value !== undefined) {
                  text = text.replace(new RegExp(`{{${k}}}`, 'g'), String(value));
                }
            });
        }
        return text;
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};