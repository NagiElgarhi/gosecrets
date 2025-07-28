
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TranslationKey } from '../localization/translations';
import { ServiceGuide } from './ServiceGuide';
import { AIScriptGenerator } from './AIScriptGenerator';
import { 
    SparklesIcon, ChevronDownIcon
} from './IconComponents';

// Types
export interface Service {
    id: string;
    nameKey: TranslationKey;
    icon: React.ReactElement<{ className?: string }>;
}
export interface SelectedService extends Service {
    type: string;
    name: string;
}

export interface AccordionProps {
    menuKey: string;
    titleKey: TranslationKey;
    icon: React.ReactElement<{ className?: string }>;
    services: Service[];
    type: string;
}

// Accordion Component
const AccordionMenu: React.FC<{
    accordion: AccordionProps;
    onSelect: (service: Service, type: string) => void;
    selectedService: SelectedService | null;
}> = ({ accordion, onSelect, selectedService }) => {
    const { t, language } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const isActive = selectedService?.type === accordion.type;
    
    return (
        <div className="bg-slate-900 rounded-xl shadow-md border border-slate-700">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full flex items-center justify-between gap-4 p-4 text-lg font-semibold transition-all rounded-t-lg ${isOpen ? 'rounded-b-none' : 'rounded-b-lg'} ${ isActive ? 'bg-blue-900/50 text-[var(--google-blue)]' : 'bg-slate-900 text-slate-200 hover:bg-slate-800' }`}
            >
                <div className="flex items-center gap-4">
                   {React.cloneElement(accordion.icon, { className: 'w-6 h-6' })}
                   {t(accordion.titleKey)}
                </div>
                <ChevronDownIcon className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="p-2 space-y-1 max-h-60 overflow-y-auto custom-scrollbar bg-slate-800/50 rounded-b-lg">
                    {accordion.services.map((service) => (
                        <button
                            key={service.id}
                            onClick={() => onSelect(service, accordion.type)}
                            className={`w-full flex items-center gap-3 p-3 rounded-lg text-md transition-colors ${language === 'ar' ? 'text-right' : 'text-left'} ${ selectedService?.id === service.id && selectedService?.type === accordion.type ? 'bg-blue-500/30 text-blue-300 font-bold' : 'text-slate-300 hover:bg-slate-700' }`}
                        >
                            {React.cloneElement(service.icon, { className: 'w-5 h-5' })}
                            <span>{t(service.nameKey)}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};


// Main Page Component
interface GuideGeneratorPageProps {
    titleKey: TranslationKey;
    subtitleKey: TranslationKey;
    accordions: AccordionProps[];
    apiKey: string;
    onRequestApiKey: () => void;
}

export const GuideGeneratorPage: React.FC<GuideGeneratorPageProps> = ({ titleKey, subtitleKey, accordions, apiKey, onRequestApiKey }) => {
    const { t } = useLanguage();
    const [selectedService, setSelectedService] = useState<SelectedService | null>(null);

    const handleSelectService = (service: Service, type: string) => {
        setSelectedService({ ...service, type, name: t(service.nameKey) });
    };

    const renderServiceContent = () => {
        if (!selectedService) {
            return (
                <div className="bg-slate-900/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-700 h-full flex flex-col justify-center items-center text-center">
                    <SparklesIcon className="w-16 h-16 text-slate-600 mb-4" />
                    <h3 className="text-xl font-bold text-slate-200">{t('smart_guide_generator')}</h3>
                    <p className="text-slate-400 mt-2">{t('select_service_to_start')}</p>
                </div>
            );
        }
        // Special case for the script generator
        if (selectedService.type === 'cloud' && selectedService.id === 'gcloud-script-generator') {
            return <AIScriptGenerator apiKey={apiKey} onRequestApiKey={onRequestApiKey} />;
        }
        return <ServiceGuide service={selectedService} key={selectedService.id + selectedService.type} apiKey={apiKey} onRequestApiKey={onRequestApiKey} />;
    };

    return (
        <div className="animate-fade-in">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-black text-slate-100">{t(titleKey)}</h1>
                <p className="text-lg text-slate-400 mt-4 max-w-3xl mx-auto">
                    {t(subtitleKey)}
                </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 space-y-4">
                   <h3 className="font-bold text-xl text-slate-200">{t('choose_service_for_guide')}</h3>
                   {accordions.map(acc => (
                       <AccordionMenu
                          key={acc.menuKey}
                          accordion={acc}
                          onSelect={handleSelectService}
                          selectedService={selectedService}
                       />
                   ))}
                </div>
                <div className="lg:col-span-2">
                    {renderServiceContent()}
                </div>
            </div>
        </div>
    );
};
