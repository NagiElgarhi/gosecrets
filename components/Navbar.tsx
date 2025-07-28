

import React, { useState, useEffect } from 'react';
import { Page } from '../App';
import { Bars3Icon, XMarkIcon, TempleIcon, KeyIcon } from './IconComponents';
import { useLanguage } from '../context/LanguageContext';
import { TranslationKey } from '../localization/translations';

interface NavbarProps {
    page: Page;
    setPage: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ page, setPage }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { t, changeLanguage, language } = useLanguage();

    const navLinks: { id: Page; titleKey: TranslationKey }[] = [
        { id: 'home', titleKey: 'nav_home' },
        { id: 'services', titleKey: 'nav_services' },
        { id: 'automation', titleKey: 'nav_automation' },
        { id: 'credentials', titleKey: 'nav_credentials' },
        { id: 'about', titleKey: 'nav_about' },
        { id: 'contact', titleKey: 'nav_contact' },
        { id: 'guide', titleKey: 'nav_interactive_guide' },
    ];

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    const handleLinkClick = (p: Page) => {
        setPage(p);
        setIsOpen(false);
    };

    const appNameText = t('google_secrets');
    const colors = ['var(--google-blue)', 'var(--google-yellow)', 'var(--google-red)', '#FFFFFF', 'var(--google-green)'];
    
    const ColoredAppName = () => (
        <span style={{ fontSize: '28px', fontWeight: '900' }}>
            {appNameText.split('').map((char, index) => (
                <span key={index} style={{ color: colors[index % colors.length], fontFamily: 'Cairo, sans-serif' }}>
                    {char}
                </span>
            ))}
        </span>
    );
    

    return (
        <header className="bg-black/50 backdrop-blur-lg sticky top-0 z-40 shadow-lg border-b border-slate-800">
            <nav className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                     {/* Left Side Group */}
                    <div className="flex items-center">
                        <div 
                            className="flex items-center gap-2 cursor-pointer flex-shrink-0"
                            onClick={() => handleLinkClick('home')}
                        >
                            <TempleIcon className="w-8 h-8" />
                            <ColoredAppName />
                        </div>
                    </div>
                    
                    {/* Right Side: Nav Links & Mobile Button */}
                    <div className="flex items-center">
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map(link => (
                                <button
                                    key={link.id}
                                    onClick={() => handleLinkClick(link.id)}
                                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                                        page === link.id
                                            ? 'bg-[var(--google-blue)] text-white'
                                            : 'text-slate-300 hover:bg-slate-800 hover:text-slate-50'
                                    }`}
                                >
                                    {t(link.titleKey)}
                                </button>
                            ))}
                            <button
                                onClick={() => changeLanguage(language === 'ar' ? 'en' : 'ar')}
                                aria-label="Change language"
                                className="font-bold text-sm bg-slate-800 text-slate-300 w-10 h-10 rounded-full hover:bg-slate-700 transition-colors mx-2"
                            >
                                {language === 'ar' ? 'EN' : 'AR'}
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md text-slate-300 hover:bg-slate-800">
                                {isOpen ? <XMarkIcon className="w-7 h-7" /> : <Bars3Icon className="w-7 h-7" />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 bg-black z-50 animate-fade-in-down">
                    <div className="flex justify-between items-center p-4 border-b border-slate-800">
                         <div className="flex items-center gap-2">
                            <TempleIcon className="w-8 h-8" />
                            <ColoredAppName />
                        </div>
                        <button onClick={() => setIsOpen(false)} className="p-2">
                            <XMarkIcon className="w-7 h-7 text-slate-300" />
                        </button>
                    </div>
                    <div className="flex flex-col items-center justify-center h-[calc(100vh-81px)] gap-4">
                        
                        {navLinks.map(link => (
                             <button
                                key={link.id}
                                onClick={() => handleLinkClick(link.id)}
                                className={`text-2xl font-bold py-3 px-6 rounded-lg transition-colors w-4/5 ${
                                    page === link.id
                                        ? 'bg-[var(--google-blue)] text-white'
                                        : 'text-slate-200 hover:bg-slate-800'
                                }`}
                            >
                                {t(link.titleKey)}
                            </button>
                        ))}
                         <button
                            onClick={() => changeLanguage(language === 'ar' ? 'en' : 'ar')}
                            aria-label="Change language"
                            className="text-xl font-bold py-3 px-6 rounded-lg bg-slate-800 text-slate-200 w-4/5 mt-4"
                        >
                            {language === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'}
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};