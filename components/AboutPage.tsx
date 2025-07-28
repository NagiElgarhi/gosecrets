import React from 'react';
import { SparklesIcon } from './IconComponents';
import { useLanguage } from '../context/LanguageContext';

export const AboutPage: React.FC = () => {
    const { t, language } = useLanguage();
    return (
        <div className="bg-slate-900/70 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-lg border border-slate-700 animate-fade-in max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <SparklesIcon className="w-16 h-16 text-[var(--google-blue)] mx-auto mb-4" />
                <h1 className="text-4xl font-black text-slate-100">{t('about_title')}</h1>
                <p className="text-lg text-slate-400 mt-2">{t('about_subtitle')}</p>
            </div>

            <div className="space-y-10 text-lg text-slate-300 leading-relaxed">
                <div>
                    <h2 className={`text-2xl font-bold text-blue-400 mb-3 ${language === 'ar' ? 'border-r-4 border-[var(--google-blue)] pr-4' : 'border-l-4 border-[var(--google-blue)] pl-4'}`}>{t('about_mission_title')}</h2>
                    <p>
                        {t('about_mission_desc')}
                    </p>
                </div>

                <div>
                    <h2 className={`text-2xl font-bold text-green-400 mb-3 ${language === 'ar' ? 'border-r-4 border-[var(--google-green)] pr-4' : 'border-l-4 border-[var(--google-green)] pl-4'}`}>{t('about_vision_title')}</h2>
                    <p>
                        {t('about_vision_desc')}
                    </p>
                </div>

                <div>
                    <h2 className={`text-2xl font-bold text-yellow-400 mb-3 ${language === 'ar' ? 'border-r-4 border-[var(--google-yellow)] pr-4' : 'border-l-4 border-[var(--google-yellow)] pl-4'}`}>{t('about_why_title')}</h2>
                    <p>
                        {t('about_why_desc')}
                    </p>
                </div>
            </div>
        </div>
    );
};