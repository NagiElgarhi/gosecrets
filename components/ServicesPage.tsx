import React from 'react';
import { Page } from '../App';
import { BookOpenIcon, CodeBracketIcon, SparklesIcon, ShieldCheckIcon } from './IconComponents';
import { useLanguage } from '../context/LanguageContext';

interface ServicesPageProps {
    setPage: (page: Page) => void;
}

const ServiceCard: React.FC<{
    icon: React.ReactElement<{ className?: string }>;
    title: string;
    description: string;
    actionText: string;
    onClick: () => void;
}> = ({ icon, title, description, actionText, onClick }) => (
    <div className="bg-slate-900/70 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-700 p-8 flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300">
        <div className="flex-shrink-0 w-16 h-16 bg-slate-800 text-[var(--google-blue)] rounded-xl flex items-center justify-center mb-6">
            {React.cloneElement(icon, { className: 'w-9 h-9' })}
        </div>
        <h3 className="text-2xl font-bold text-slate-100 mb-3">{title}</h3>
        <p className="text-slate-300 leading-relaxed flex-grow mb-6">{description}</p>
        <button 
            onClick={onClick}
            className="mt-auto bg-blue-900/50 text-blue-300 font-bold py-3 px-6 rounded-lg hover:bg-blue-900/80 transition-colors w-full"
        >
            {actionText}
        </button>
    </div>
);

export const ServicesPage: React.FC<ServicesPageProps> = ({ setPage }) => {
    const { t } = useLanguage();
    
    return (
        <div className="animate-fade-in">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-black text-slate-100">{t('services_title')}</h1>
                <p className="text-lg text-slate-400 mt-4 max-w-3xl mx-auto">{t('services_subtitle')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ServiceCard
                    icon={<BookOpenIcon className="text-[var(--google-blue)]"/>}
                    title={t('service_card_1_title')}
                    description={t('service_card_1_desc')}
                    actionText={t('go_to_interactive_guide')}
                    onClick={() => setPage('guide')}
                />
                <ServiceCard
                    icon={<CodeBracketIcon className="text-[var(--google-red)]"/>}
                    title={t('service_card_2_title')}
                    description={t('service_card_2_desc')}
                    actionText={t('explore_automation_tools')}
                    onClick={() => setPage('automation')}
                />
                 <ServiceCard
                    icon={<ShieldCheckIcon className="text-[var(--google-yellow)]"/>}
                    title={t('service_card_3_title')}
                    description={t('service_card_3_desc')}
                    actionText={t('read_more_about_us')}
                    onClick={() => setPage('about')}
                />
            </div>
        </div>
    );
};