

import React, { useState } from 'react';
import { ServiceGuide } from './ServiceGuide';
import { AISimulator } from './AISimulator';
import { AIScriptGenerator } from './AIScriptGenerator';
import { BookOpenIcon, SparklesIcon, TerminalIcon, ChevronDownIcon, WorkspaceIcon, CloudIcon, AndroidIcon, AIStudioIcon, ServerIcon, StorageIcon, CloudFunctionIcon, RocketIcon, KubernetesIcon, DatabaseIcon, FirestoreIcon, PubSubIcon, BigQueryIcon, GmailIcon, DriveIcon, CalendarIcon, SheetsIcon, CodeBracketIcon } from './IconComponents';

type Tool = 'none' | 'guide' | 'simulator' | 'script';
interface Service {
    id: string;
    name: string;
    icon: React.ReactElement<{ className?: string }>;
}
interface SelectedService extends Service {
    type: string;
}

const googleCloudServices: Service[] = [
    { id: 'Compute Engine', name: 'Compute Engine', icon: <ServerIcon /> },
    { id: 'Cloud Storage', name: 'Cloud Storage', icon: <StorageIcon /> },
    { id: 'Cloud Functions', name: 'Cloud Functions', icon: <CloudFunctionIcon /> },
    { id: 'Cloud Run', name: 'Cloud Run', icon: <RocketIcon /> },
    { id: 'Kubernetes Engine', name: 'Kubernetes Engine', icon: <KubernetesIcon /> },
    { id: 'Cloud SQL', name: 'Cloud SQL', icon: <DatabaseIcon /> },
    { id: 'Firestore', name: 'Firestore', icon: <FirestoreIcon /> },
    { id: 'BigQuery', name: 'BigQuery', icon: <BigQueryIcon /> },
    { id: 'Vertex AI', name: 'Vertex AI', icon: <SparklesIcon /> },
    { id: 'Pub/Sub', name: 'Pub/Sub', icon: <PubSubIcon /> },
];

const workspaceServices: Service[] = [
    { id: 'Gmail', name: 'Gmail API', icon: <GmailIcon /> },
    { id: 'Drive', name: 'Google Drive API', icon: <DriveIcon /> },
    { id: 'Calendar', name: 'Google Calendar API', icon: <CalendarIcon /> },
    { id: 'Sheets', name: 'Google Sheets API', icon: <SheetsIcon /> },
];

const androidStudioServices: Service[] = [
    { id: 'Jetpack Compose', name: 'Jetpack Compose', icon: <CodeBracketIcon /> },
    { id: 'Kotlin Coroutines', name: 'Kotlin Coroutines', icon: <SparklesIcon /> },
    { id: 'Room Database', name: 'Room Database', icon: <DatabaseIcon /> },
    { id: 'Firebase Integration', name: 'Firebase Integration', icon: <CloudIcon /> },
];

const aiStudioServices: Service[] = [
    { id: 'Prompt Engineering', name: 'هندسة الأوامر', icon: <TerminalIcon /> },
    { id: 'Model Tuning', name: 'ضبط النماذج', icon: <SparklesIcon /> },
    { id: 'Function Calling', name: 'استدعاء الدوال', icon: <CodeBracketIcon /> },
];

const ToolCard: React.FC<{ icon: React.ReactElement<{ className?: string }>; title: string; description: string; onClick: () => void; }> = ({ icon, title, description, onClick }) => (
    <div 
        onClick={onClick}
        className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 flex flex-col h-full cursor-pointer group hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-500/30 transform hover:-translate-y-2 transition-all duration-300"
    >
        <div className="flex-shrink-0 w-16 h-16 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-blue-700 transition-colors">
            {React.cloneElement(icon, { className: 'w-9 h-9' })}
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-white transition-colors">{title}</h3>
        <p className="text-slate-600 leading-relaxed flex-grow group-hover:text-blue-100 transition-colors">{description}</p>
    </div>
);

const AccordionMenu: React.FC<{ menuKey: string; title: string; icon: React.ReactElement<{ className?: string }>; services: Service[]; type: string; onSelect: (service: Service, type: string) => void; selectedService: SelectedService | null; }> = ({ menuKey, title, icon, services, type, onSelect, selectedService }) => {
    const [isOpen, setIsOpen] = useState(false);
    const isActive = selectedService?.type === type;
    
    return (
        <div className="bg-white rounded-xl shadow-md border border-slate-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full flex items-center justify-between gap-4 p-4 text-lg font-semibold transition-all text-right rounded-t-lg ${isOpen ? 'rounded-b-none' : 'rounded-b-lg'} ${ isActive ? 'bg-blue-100 text-blue-700' : 'bg-white text-slate-700 hover:bg-slate-50' }`}
            >
                <div className="flex items-center gap-4">
                   {React.cloneElement(icon, { className: 'w-6 h-6' })}
                   {title}
                </div>
                <ChevronDownIcon className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="p-2 space-y-1 max-h-60 overflow-y-auto custom-scrollbar bg-slate-50 rounded-b-lg">
                    {services.map((service) => (
                        <button
                            key={service.id}
                            onClick={() => onSelect(service, type)}
                            className={`w-full flex items-center gap-3 p-3 rounded-lg text-md text-right transition-colors ${ selectedService?.id === service.id && selectedService?.type === type ? 'bg-blue-200 text-blue-800 font-bold' : 'text-slate-600 hover:bg-slate-200' }`}
                        >
                            {React.cloneElement(service.icon, { className: 'w-5 h-5' })}
                            <span>{service.name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export const ProductsPage: React.FC<{ apiKey: string; onRequestApiKey: () => void; }> = ({ apiKey, onRequestApiKey }) => {
    const [tool, setTool] = useState<Tool>('none');
    const [selectedService, setSelectedService] = useState<SelectedService | null>(null);

    const handleSelectService = (service: Service, type: string) => {
        setSelectedService({ ...service, type });
    };
    
    const renderTool = () => {
        switch (tool) {
            case 'guide':
                return (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-1 space-y-4">
                           <h3 className="font-bold text-xl text-slate-700">اختر خدمة لإنشاء الدليل</h3>
                           <AccordionMenu menuKey="workspace" title="Google Workspace" icon={<WorkspaceIcon />} services={workspaceServices} type="workspace" onSelect={handleSelectService} selectedService={selectedService} />
                           <AccordionMenu menuKey="cloud" title="Google Cloud" icon={<CloudIcon />} services={googleCloudServices} type="cloud" onSelect={handleSelectService} selectedService={selectedService} />
                           <AccordionMenu menuKey="android" title="Android Studio" icon={<AndroidIcon />} services={androidStudioServices} type="android" onSelect={handleSelectService} selectedService={selectedService} />
                           <AccordionMenu menuKey="ai" title="AI Studio" icon={<AIStudioIcon />} services={aiStudioServices} type="ai" onSelect={handleSelectService} selectedService={selectedService} />
                        </div>
                        <div className="lg:col-span-2">
                            {selectedService ? (
                                <ServiceGuide service={selectedService} key={selectedService.id + selectedService.type} apiKey={apiKey} onRequestApiKey={onRequestApiKey} />
                            ) : (
                                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 h-full flex flex-col justify-center items-center text-center">
                                    <SparklesIcon className="w-16 h-16 text-slate-300 mb-4" />
                                    <h3 className="text-xl font-bold text-slate-700">منشئ الأدلة الذكى</h3>
                                    <p className="text-slate-500 mt-2">اختر خدمة من القائمة على اليمين لبدء إنشاء دليل احترافي ومفصل.</p>
                                </div>
                            )}
                        </div>
                    </div>
                );
            case 'simulator':
                return <AISimulator />;
            case 'script':
                return <AIScriptGenerator apiKey={apiKey} onRequestApiKey={onRequestApiKey} />;
            default:
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ToolCard
                            icon={<BookOpenIcon />}
                            title="منشئ الأدلة الذكى"
                            description="اختر أي خدمة من Google واحصل على دليل احترافي مفصل، مع إمكانية إرفاق صورة لإثراء المحتوى."
                            onClick={() => setTool('guide')}
                        />
                        <ToolCard
                            icon={<SparklesIcon />}
                            title="محاكي الوكيل الذكي"
                            description="شاهد كيف يقوم الوكيل الذكي بأتمتة الحصول على بيانات الاعتماد بشكل آمن في بيئة وهمية آمنة تمامًا."
                            onClick={() => setTool('simulator')}
                        />
                         <ToolCard
                            icon={<TerminalIcon />}
                            title="منشئ نصوص الأتمتة"
                            description="اطلب من الذكاء الاصطناعي كتابة شيفرة برمجية (bash script) جاهزة لأتمتة المهام، مع إمكانية تحليل صورة."
                            onClick={() => setTool('script')}
                        />
                    </div>
                );
        }
    };

    return (
        <div className="animate-fade-in">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-black text-slate-800">
                    {tool === 'none' ? 'منتجاتنا وأدواتنا التفاعلية' : 'عد إلى قائمة المنتجات'}
                </h1>
                <p className="text-lg text-slate-500 mt-4 max-w-3xl mx-auto">
                    {tool === 'none' 
                        ? 'اختر أداة من مجموعتنا لبدء رحلتك في الأتمتة والتعلم العميق.'
                        : 'يمكنك اختيار أداة أخرى من القائمة الرئيسية.'
                    }
                </p>
                {tool !== 'none' && (
                    <button 
                        onClick={() => { setTool('none'); setSelectedService(null); }}
                        className="mt-6 bg-slate-200 text-slate-800 font-bold py-2 px-6 rounded-lg hover:bg-slate-300 transition-colors"
                    >
                        العودة إلى قائمة المنتجات
                    </button>
                )}
            </div>
            <div>{renderTool()}</div>
        </div>
    );
};