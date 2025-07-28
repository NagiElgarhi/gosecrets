import React, { useState, useMemo } from 'react';
import { ServiceGuide } from './ServiceGuide';
import { 
    SparklesIcon, TerminalIcon, ChevronDownIcon, WorkspaceIcon, CloudIcon, ServerIcon, StorageIcon, 
    CloudFunctionIcon, RocketIcon, KubernetesIcon, DatabaseIcon, FirestoreIcon, PubSubIcon, BigQueryIcon, GmailIcon, 
    DriveIcon, CalendarIcon, SheetsIcon, FacebookIcon, TwitterIcon, InstagramIcon, TikTokIcon, WhatsAppIcon, TelegramIcon, SlackIcon,
    ChatBubbleLeftEllipsisIcon
} from './IconComponents';
import { useLanguage } from '../context/LanguageContext';
import { TranslationKey } from '../localization/translations';

interface AutomationPageProps {
  apiKey: string;
  onRequestApiKey: () => void;
}

interface Service {
    id: string;
    nameKey: TranslationKey;
    icon: React.ReactElement<{ className?: string }>;
}
interface SelectedService extends Service {
    type: string;
    name: string;
}

const googleCloudServices: Service[] = [
    { id: 'Compute Engine', nameKey: 'compute_engine', icon: <ServerIcon /> },
    { id: 'Cloud Storage', nameKey: 'cloud_storage', icon: <StorageIcon /> },
    { id: 'Cloud Functions', nameKey: 'cloud_functions', icon: <CloudFunctionIcon /> },
    { id: 'Cloud Run', nameKey: 'cloud_run', icon: <RocketIcon /> },
    { id: 'Kubernetes Engine', nameKey: 'kubernetes_engine', icon: <KubernetesIcon /> },
    { id: 'Cloud SQL', nameKey: 'cloud_sql', icon: <DatabaseIcon /> },
    { id: 'Firestore', nameKey: 'firestore', icon: <FirestoreIcon /> },
    { id: 'BigQuery', nameKey: 'bigquery', icon: <BigQueryIcon /> },
    { id: 'Vertex AI', nameKey: 'vertex_ai', icon: <SparklesIcon /> },
    { id: 'Pub/Sub', nameKey: 'pub_sub', icon: <PubSubIcon /> },
];

const workspaceServices: Service[] = [
    { id: 'Gmail', nameKey: 'gmail_api', icon: <GmailIcon /> },
    { id: 'Drive', nameKey: 'drive_api', icon: <DriveIcon /> },
    { id: 'Calendar', nameKey: 'calendar_api', icon: <CalendarIcon /> },
    { id: 'Sheets', nameKey: 'sheets_api', icon: <SheetsIcon /> },
];

const socialMediaServices: Service[] = [
    { id: 'Facebook', nameKey: 'facebook', icon: <FacebookIcon /> },
    { id: 'Twitter', nameKey: 'twitter', icon: <TwitterIcon /> },
    { id: 'Instagram', nameKey: 'instagram', icon: <InstagramIcon /> },
    { id: 'TikTok', nameKey: 'tiktok', icon: <TikTokIcon /> },
];

const communicationServices: Service[] = [
    { id: 'WhatsApp', nameKey: 'whatsapp', icon: <WhatsAppIcon /> },
    { id: 'Telegram', nameKey: 'telegram', icon: <TelegramIcon /> },
    { id: 'Slack', nameKey: 'slack', icon: <SlackIcon /> },
];

const AccordionMenu: React.FC<{ menuKey: string; title: string; icon: React.ReactElement<{ className?: string }>; services: Service[]; type: string; onSelect: (service: Service, type: string) => void; selectedService: SelectedService | null; }> = ({ menuKey, title, icon, services, type, onSelect, selectedService }) => {
    const { t, language } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const isActive = selectedService?.type === type;
    
    return (
        <div className="bg-slate-900 rounded-xl shadow-md border border-slate-700">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full flex items-center justify-between gap-4 p-4 text-lg font-semibold transition-all rounded-t-lg ${isOpen ? 'rounded-b-none' : 'rounded-b-lg'} ${ isActive ? 'bg-blue-900/50 text-[var(--google-blue)]' : 'bg-slate-900 text-slate-200 hover:bg-slate-800' }`}
            >
                <div className="flex items-center gap-4">
                   {React.cloneElement(icon, { className: 'w-6 h-6' })}
                   {title}
                </div>
                <ChevronDownIcon className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="p-2 space-y-1 max-h-60 overflow-y-auto custom-scrollbar bg-slate-800/50 rounded-b-lg">
                    {services.map((service) => (
                        <button
                            key={service.id}
                            onClick={() => onSelect(service, type)}
                            className={`w-full flex items-center gap-3 p-3 rounded-lg text-md transition-colors ${language === 'ar' ? 'text-right' : 'text-left'} ${ selectedService?.id === service.id && selectedService?.type === type ? 'bg-blue-500/30 text-blue-300 font-bold' : 'text-slate-300 hover:bg-slate-700' }`}
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

export const AutomationPage: React.FC<AutomationPageProps> = (props) => {
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
        return <ServiceGuide service={selectedService} key={selectedService.id + selectedService.type} apiKey={props.apiKey} onRequestApiKey={props.onRequestApiKey} />;
    };
    
    return (
        <div className="animate-fade-in">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-black text-slate-100">{t('automation_agent_page_title')}</h1>
                <p className="text-lg text-slate-400 mt-4 max-w-3xl mx-auto">
                    {t('automation_agent_page_subtitle')}
                </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 space-y-4">
                   <h3 className="font-bold text-xl text-slate-200">{t('choose_service_for_guide')}</h3>
                   <AccordionMenu menuKey="cloud" title={t('google_cloud')} icon={<CloudIcon />} services={googleCloudServices} type="cloud" onSelect={handleSelectService} selectedService={selectedService} />
                   <AccordionMenu menuKey="workspace" title={t('google_workspace')} icon={<WorkspaceIcon />} services={workspaceServices} type="workspace" onSelect={handleSelectService} selectedService={selectedService} />
                   <AccordionMenu menuKey="social" title={t('social_media')} icon={<SparklesIcon />} services={socialMediaServices} type="social" onSelect={handleSelectService} selectedService={selectedService} />
                   <AccordionMenu menuKey="communication" title={t('communication_platforms')} icon={<ChatBubbleLeftEllipsisIcon />} services={communicationServices} type="communication" onSelect={handleSelectService} selectedService={selectedService} />
                </div>
                <div className="lg:col-span-2">
                    {renderServiceContent()}
                </div>
            </div>
        </div>
    );
};