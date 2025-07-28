
import React from 'react';
import { Page } from '../App';
import { BookOpenIcon, SparklesIcon, TerminalIcon, ShieldCheckIcon } from './IconComponents';
import { useLanguage } from '../context/LanguageContext';

interface HomePageProps {
    setPage: (page: Page) => void;
}

const FeatureCard: React.FC<{icon: React.ReactElement<{ className?: string }>, title: string, description: string}> = ({icon, title, description}) => (
    <div className="bg-slate-900/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-700 hover:shadow-blue-500/20 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center gap-4 mb-3">
            <div 
                className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-[var(--google-blue)]"
                style={{ clipPath: 'url(#squircleClip)' }}
            >
                {React.cloneElement(icon, { className: 'w-7 h-7' })}
            </div>
            <h3 className="text-xl font-bold text-slate-100">{title}</h3>
        </div>
        <p className="text-slate-300 leading-relaxed text-sm">{description}</p>
    </div>
);

const GoogleColoredText: React.FC<{ text: string }> = ({ text }) => {
    const googleColors = [
        'var(--google-blue)',   // G
        'var(--google-red)',    // o
        'var(--google-yellow)', // o
        'var(--google-blue)',   // g
        'var(--google-green)',  // l
        'var(--google-red)',    // e
    ];

    const parts = text.split(/(google)/i);

    return (
        <span>
            {parts.map((part, index) => {
                if (part.toLowerCase() === 'google') {
                    return (
                        <span key={index}>
                            {part.split('').map((char, charIndex) => (
                                <span key={charIndex} style={{ color: googleColors[charIndex] }}>
                                    {char}
                                </span>
                            ))}
                        </span>
                    );
                }
                // The original color for this part of the title was yellow.
                // We'll color the remaining fragments (like '.' or "'s") with yellow.
                return <span key={index} style={{ color: 'var(--google-yellow)' }}>{part}</span>;
            })}
        </span>
    );
};


export const HomePage: React.FC<HomePageProps> = ({ setPage }) => {
    const { t, language } = useLanguage();

    return (
        <div className="animate-fade-in text-center">
            {/* Hero Section */}
            <section className="py-20 md:py-32 relative overflow-hidden rounded-3xl hero-bg">
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-black text-slate-50 mb-4 leading-tight">
                        <div>
                            <span style={{ color: 'var(--google-blue)' }}>{t('home_title_1')}</span>{' '}
                            <span style={{ color: '#FFFFFF' }}>{t('home_title_2')}</span>{' '}
                            <GoogleColoredText text={t('home_title_3')} />
                        </div>
                        <div className="mt-[25px]">
                            <span style={{ color: 'var(--google-green)' }}>{t('home_title_4')}</span>{' '}
                            <span style={{ color: 'var(--google-red)' }}>{t('home_title_5')}</span>{' '}
                            <span style={{ color: 'var(--google-yellow)' }}>{t('home_title_6')}</span>
                        </div>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10">
                        {t('home_subtitle')}
                    </p>
                    <button
                        onClick={() => setPage('automation')}
                        className="bg-[#6B8E23] text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-[#556B2F] transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-lime-600/50"
                    >
                        {t('explore_automation_tools')}
                    </button>
                    <div className="mt-[60px]">
                        <a href="https://nagiz.net" target="_blank" rel="noopener noreferrer" style={{ fontSize: '36px', fontWeight: 'bold' }}>
                            <span style={{ color: 'white' }}>Nagiz</span>
                            <span style={{ color: 'var(--google-green)' }}>.</span>
                            <span style={{ color: 'var(--google-yellow)' }}>net</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-slate-100 mb-4">{t('features_title')}</h2>
                    <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
                        {t('features_subtitle')}
                    </p>
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                        <FeatureCard
                            icon={<BookOpenIcon className="text-[var(--google-blue)]" />}
                            title={t('feature_1_title')}
                            description={t('feature_1_desc')}
                        />
                         <FeatureCard
                            icon={<SparklesIcon className="text-[var(--google-green)]" />}
                            title={t('feature_2_title')}
                            description={t('feature_2_desc')}
                        />
                        <FeatureCard
                            icon={<ShieldCheckIcon className="text-[var(--google-yellow)]" />}
                            title={t('feature_3_title')}
                            description={t('feature_3_desc')}
                        />
                        <FeatureCard
                            icon={<TerminalIcon className="text-[var(--google-red)]" />}
                            title={t('feature_4_title')}
                            description={t('feature_4_desc')}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};