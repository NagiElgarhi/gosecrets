


import React, { useState, useMemo } from 'react';
import { 
    CloudIcon, PlusCircleIcon, BookOpenIcon, KeyIcon, CodeBracketIcon, UserCircleIcon, LockClosedIcon, ShieldCheckIcon, 
    SparklesIcon, TerminalIcon, ChevronDownIcon, WorkspaceIcon, AndroidIcon, AIStudioIcon, ServerIcon, StorageIcon, 
    CloudFunctionIcon, RocketIcon, KubernetesIcon, DatabaseIcon, FirestoreIcon, PubSubIcon, BigQueryIcon, GmailIcon, 
    DriveIcon, CalendarIcon, SheetsIcon, PhotosIcon, YouTubeIcon, TasksIcon, MapsIcon, TranslateIcon, Bars3Icon,
    VisionApiIcon, NaturalLanguageIcon, TextToSpeechIcon, SpeechToTextIcon, VideoIntelligenceIcon, DialogflowIcon
} from './IconComponents';
import { AIAssistant, ChatMessage } from './AIAssistant';
import { ServiceGuide } from './ServiceGuide';
import { AIScriptGenerator } from './AIScriptGenerator';
import { useLanguage } from '../context/LanguageContext';
import { TranslationKey } from '../localization/translations';

interface InstructionalGuideProps {
  messages: ChatMessage[];
  input: string;
  isLoading: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSendMessage: (e: React.FormEvent) => Promise<void>;
  image: File | null;
  onImageChange: (file: File | null) => void;
  apiKey: string;
  onRequestApiKey: () => void;
}

// Types and data for Smart Guide Generator
interface Service {
    id: string;
    nameKey: TranslationKey;
    icon: React.ReactElement<{ className?: string }>;
}
interface SelectedService extends Service {
    type: string;
    name: string; // Add the resolved name
}

const googleCloudServices: Service[] = [
    { id: 'gcloud-script-generator', nameKey: 'gcloud_command_generator_title', icon: <TerminalIcon /> },
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

const androidStudioServices: Service[] = [
    { id: 'Jetpack Compose', nameKey: 'jetpack_compose', icon: <CodeBracketIcon /> },
    { id: 'Kotlin Coroutines', nameKey: 'kotlin_coroutines', icon: <SparklesIcon /> },
    { id: 'Room Database', nameKey: 'room_database', icon: <DatabaseIcon /> },
    { id: 'Firebase Integration', nameKey: 'firebase_integration', icon: <CloudIcon /> },
];

const aiStudioServices: Service[] = [
    { id: 'Prompt Engineering', nameKey: 'prompt_engineering', icon: <TerminalIcon /> },
    { id: 'Model Tuning', nameKey: 'model_tuning', icon: <SparklesIcon /> },
    { id: 'Function Calling', nameKey: 'function_calling', icon: <CodeBracketIcon /> },
];

const otherGoogleServices: Service[] = [
    { id: 'Firebase', nameKey: 'firebase', icon: <CloudIcon /> },
    { id: 'Flutter', nameKey: 'flutter', icon: <AndroidIcon /> },
    { id: 'TensorFlow', nameKey: 'tensorflow', icon: <SparklesIcon /> },
    { id: 'Vision API', nameKey: 'vision_api', icon: <VisionApiIcon /> },
    { id: 'Natural Language API', nameKey: 'natural_language_api', icon: <NaturalLanguageIcon /> },
    { id: 'Text-to-Speech API', nameKey: 'text_to_speech_api', icon: <TextToSpeechIcon /> },
    { id: 'Speech-to-Text API', nameKey: 'speech_to_text_api', icon: <SpeechToTextIcon /> },
    { id: 'Video Intelligence API', nameKey: 'video_intelligence_api', icon: <VideoIntelligenceIcon /> },
    { id: 'Dialogflow CX', nameKey: 'dialogflow_cx', icon: <DialogflowIcon /> },
    { id: 'Google Analytics', nameKey: 'analytics_api', icon: <CodeBracketIcon /> },
    { id: 'Google Ads', nameKey: 'ads_api', icon: <CodeBracketIcon /> },
    { id: 'Photos', nameKey: 'photos_api', icon: <PhotosIcon /> },
    { id: 'YouTube', nameKey: 'youtube_data_api', icon: <YouTubeIcon /> },
    { id: 'Tasks', nameKey: 'tasks_api', icon: <TasksIcon /> },
    { id: 'Maps', nameKey: 'maps_platform_api', icon: <MapsIcon /> },
    { id: 'Translate', nameKey: 'translation_api', icon: <TranslateIcon /> },
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


export const InstructionalGuide: React.FC<InstructionalGuideProps> = (props) => {
    const { t, language } = useLanguage();
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
        if (selectedService.type === 'cloud' && selectedService.id === 'gcloud-script-generator') {
            return <AIScriptGenerator apiKey={props.apiKey} onRequestApiKey={props.onRequestApiKey} />;
        }
        return <ServiceGuide service={selectedService} key={selectedService.id + selectedService.type} apiKey={props.apiKey} onRequestApiKey={props.onRequestApiKey} />;
    };

    return (
        <div className="animate-fade-in">
            {/* Smart Guide Generator Section */}
            <div className="mb-12 text-center">
                 <h2 className="text-3xl font-bold text-slate-100">{t('try_smart_guide_generator')}</h2>
                 <p className="text-slate-400 mt-2 max-w-2xl mx-auto">{t('smart_guide_generator_desc')}</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 space-y-4">
                   <h3 className="font-bold text-xl text-slate-200">{t('choose_service_for_guide')}</h3>
                   <AccordionMenu menuKey="cloud" title={t('google_cloud')} icon={<CloudIcon />} services={googleCloudServices} type="cloud" onSelect={handleSelectService} selectedService={selectedService} />
                   <AccordionMenu menuKey="workspace" title={t('google_workspace')} icon={<WorkspaceIcon />} services={workspaceServices} type="workspace" onSelect={handleSelectService} selectedService={selectedService} />
                   <AccordionMenu menuKey="android" title={t('android_studio')} icon={<AndroidIcon />} services={androidStudioServices} type="android" onSelect={handleSelectService} selectedService={selectedService} />
                   <AccordionMenu menuKey="ai" title={t('ai_studio')} icon={<AIStudioIcon />} services={aiStudioServices} type="ai" onSelect={handleSelectService} selectedService={selectedService} />
                   <AccordionMenu menuKey="other" title={t('other_google_products')} icon={<Bars3Icon />} services={otherGoogleServices} type="other" onSelect={handleSelectService} selectedService={selectedService} />
                </div>
                <div className="lg:col-span-2">
                    {renderServiceContent()}
                </div>
            </div>

            {/* AI Assistant Section */}
            <div className="mt-16">
                 <AIAssistant
                  messages={props.messages}
                  input={props.input}
                  isLoading={props.isLoading}
                  onInputChange={props.onInputChange}
                  onSendMessage={props.onSendMessage}
                  image={props.image}
                  onImageChange={props.onImageChange}
                />
            </div>
        </div>
    );
};