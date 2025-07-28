

import React, { useState, useEffect, useCallback } from 'react';
import { GoogleGenAI } from '@google/genai';
import { SparklesIcon, GmailIcon, DriveIcon, CalendarIcon, SheetsIcon, TerminalIcon, ClipboardIcon, CheckCircleIcon, WorkspaceIcon, PhotosIcon, YouTubeIcon, TasksIcon, MapsIcon, TranslateIcon, BigQueryIcon, Bars3Icon, XMarkIcon } from './IconComponents';

type WorkspaceService = 'Gmail' | 'Drive' | 'Calendar' | 'Sheets' | 'Photos' | 'YouTube' | 'Tasks' | 'Maps' | 'Translate' | 'BigQuery';

interface ServiceInfo {
    id: WorkspaceService;
    name: string;
    description: string;
    icon: React.ReactElement< { className?: string }>;
}

const services: ServiceInfo[] = [
    { id: 'Gmail', name: 'Gmail API', description: 'أتمتة البريد الإلكتروني', icon: <GmailIcon /> },
    { id: 'Drive', name: 'Google Drive API', description: 'إدارة الملفات والمجلدات', icon: <DriveIcon /> },
    { id: 'Calendar', name: 'Google Calendar API', description: 'تنظيم الأحداث والجداول', icon: <CalendarIcon /> },
    { id: 'Sheets', name: 'Google Sheets API', description: 'التعامل مع جداول البيانات', icon: <SheetsIcon /> },
    { id: 'Photos', name: 'Google Photos API', description: 'إدارة الصور والألبومات', icon: <PhotosIcon /> },
    { id: 'YouTube', name: 'YouTube Data API', description: 'التفاعل مع بيانات يوتيوب', icon: <YouTubeIcon /> },
    { id: 'Tasks', name: 'Google Tasks API', description: 'إنشاء وإدارة المهام', icon: <TasksIcon /> },
    { id: 'Maps', name: 'Google Maps Platform', description: 'تضمين الخرائط والبيانات', icon: <MapsIcon /> },
    { id: 'Translate', name: 'Translation API', description: 'ترجمة النصوص بين اللغات', icon: <TranslateIcon /> },
    { id: 'BigQuery', name: 'BigQuery API', description: 'تحليل البيانات الضخمة', icon: <BigQueryIcon /> },
];

export const WorkspaceGuide: React.FC = () => {
    const [selectedService, setSelectedService] = useState<WorkspaceService | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [guideContent, setGuideContent] = useState('');
    const [error, setError] = useState('');
    const [copySuccess, setCopySuccess] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const selectedServiceInfo = services.find(s => s.id === selectedService);
    
    const closeSidebar = useCallback(() => {
        setIsSidebarOpen(false);
    }, []);

    const handleSelectService = (serviceId: WorkspaceService) => {
        setSelectedService(serviceId);
        setGuideContent('');
        setError('');
        setCopySuccess(false);
        closeSidebar();
    };

    const handleGenerate = async () => {
        if (!selectedService) return;
        setIsLoading(true);
        setError('');
        setGuideContent('');
        setCopySuccess(false);

        const PROMPT = `You are a world-class expert on Google Workspace APIs and development. Your goal is to provide a comprehensive and highly detailed professional guide of up to 15,000 words for developers in ARABIC.

The user has selected the "${selectedService} API".

Generate a guide with the following structure:

### 1. وصف شامل ومفصل للـ API (In-Depth API Description)
A very detailed and comprehensive overview of what the ${selectedService} API allows developers to do. Go beyond the basics and cover advanced features, limitations, and key concepts.

### 2. حالات استخدام مفصلة (Detailed Use Cases)
List at least 5 to 10 comprehensive use cases. For each use case, provide a title, a detailed paragraph explaining the use case, its benefits, and what API endpoints would be involved.
Example:
- **أرشفة إيصالات البريد الإلكتروني تلقائيًا إلى Drive وSheets:** إنشاء نظام مؤتمت بالكامل يقوم بالبحث في رسائل Gmail عن الإيصالات والفواتير، واستخراج المعلومات الرئيسية (مثل المبلغ، التاجر، التاريخ)، ثم حفظ نسخة PDF من البريد الإلكتروني في مجلد معين في Google Drive وتدوين تفاصيل المعاملة في جدول بيانات Google Sheets لتتبع النفقات بسهولة.

### 3. مثال برمجي متقدم (JavaScript)
Provide a practical, non-trivial JavaScript code snippet that demonstrates a powerful feature of the API. This could involve creating, updating, or combining data. The code must be well-commented in Arabic to explain every step of the logic.
- DO NOT include the HTML script tags for loading the library.
- DO NOT include the authentication part ('gapi.auth2.init', etc.). Assume 'gapi.client' is initialized and ready.
- Enclose the entire code snippet in a single markdown block:
\`\`\`javascript
// Your advanced code here
\`\`\`

### 4. أفضل الممارسات والأمان (Best Practices & Security)
Provide a section with critical advice on security, efficiency, error handling, and respecting user privacy when using the ${selectedService} API.

IMPORTANT:
- The entire response MUST be in ARABIC.
- Strictly follow the requested format and headings.
- Be as detailed and expansive as possible to reach a high word count.
- Do not add any introductory or concluding text outside of the specified sections.`;

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: PROMPT,
                config: {
                    maxOutputTokens: 16000,
                    thinkingConfig: { thinkingBudget: 1000 },
                }
            });
            setGuideContent(response.text);
        } catch (e) {
            console.error(e);
            setError('عذرًا، حدث خطأ أثناء إنشاء الدليل. يرجى المحاولة مرة أخرى.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2000);
        });
    };
    
    useEffect(() => {
        if (isSidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isSidebarOpen]);

    const renderGeneratedContent = () => {
        if (!guideContent) return null;

        const codeBlockRegex = /```javascript\n([\s\S]*?)\n```/;
        const match = guideContent.match(codeBlockRegex);
        
        const textPart = guideContent
            .replace(codeBlockRegex, '')
            .replace(/### (.*?)\n/g, '<h3 class="text-xl font-bold text-slate-700 mt-6 mb-3">$1</h3>')
            .replace(/- \*\*(.*?):\*\* (.*?)\n/g, '<div class="flex items-start gap-3 my-2"><div class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 flex-shrink-0"></div><div><strong class="text-slate-600">$1:</strong> $2</div></div>')
            .trim();
            
        const codePart = match ? match[1].trim() : '';

        return (
            <div className="mt-6 animate-fade-in space-y-4">
                <div className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: textPart }}></div>
                {codePart && (
                    <div>
                         <h3 className="text-xl font-bold text-slate-700 mt-6 mb-3">3. مثال على الشيفرة (JavaScript)</h3>
                        <div className="bg-slate-900 rounded-lg font-mono text-sm text-slate-300 border border-slate-700">
                            <div className="flex justify-between items-center px-4 py-2 bg-slate-800 rounded-t-lg">
                                <div className="flex items-center gap-2 text-yellow-400">
                                    <TerminalIcon className="w-5 h-5" />
                                    <span>example.js</span>
                                </div>
                                <button onClick={() => handleCopy(codePart)} className="bg-slate-700 hover:bg-slate-600 text-slate-300 font-sans font-bold py-1 px-3 rounded-md flex items-center gap-2 transition-colors">
                                    {copySuccess ? <CheckCircleIcon className="w-5 h-5 text-green-400"/> : <ClipboardIcon className="w-5 h-5"/>}
                                    {copySuccess ? 'تم النسخ!' : 'نسخ'}
                                </button>
                            </div>
                            <pre className="p-4 overflow-x-auto"><code className="language-javascript">{codePart}</code></pre>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    return (
        <section aria-labelledby="ws-guide-title" className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
             <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                    <div className="flex items-center gap-3">
                        <SparklesIcon className="w-8 h-8 text-blue-600" />
                        <h2 id="ws-guide-title" className="text-2xl font-bold text-slate-800">الدليل الشامل لأتمتة خدمات Google</h2>
                    </div>
                     <p className="text-slate-600 mt-2">
                        اختر خدمة واحصل على دليل مخصص من الذكاء الاصطناعي حول إمكانيات الـ API وحالات الاستخدام وأمثلة برمجية.
                    </p>
                </div>
                <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="flex items-center gap-2 p-2 rounded-lg font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
                    aria-label="فتح قائمة الخدمات"
                >
                    <Bars3Icon className="w-6 h-6" />
                    <span className="hidden md:inline">عرض الخدمات</span>
                </button>
            </div>
            
            {/* Sidebar Panel */}
            <div
                className={`fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="sidebar-title"
            >
                <div className="p-4 flex justify-between items-center border-b border-slate-200">
                    <h3 id="sidebar-title" className="text-lg font-bold text-slate-800">خدمات Google</h3>
                    <button
                        onClick={closeSidebar}
                        className="p-1 rounded-full hover:bg-slate-100"
                        aria-label="إغلاق القائمة"
                        title="إغلاق"
                    >
                        <XMarkIcon className="w-6 h-6 text-slate-600" />
                    </button>
                </div>
                <div className="p-2 space-y-1 overflow-y-auto" style={{height: 'calc(100vh - 65px)'}}>
                    {services.map((service) => (
                        <button
                            key={service.id}
                            onClick={() => handleSelectService(service.id)}
                            className="w-full flex items-center gap-3 p-3 rounded-lg text-right transition-colors duration-200 hover:bg-slate-100 focus:bg-blue-50 focus:outline-none"
                        >
                            {React.cloneElement(service.icon, { className: 'w-6 h-6 text-slate-700 flex-shrink-0' })}
                            <div className="flex-1">
                                <p className="font-bold text-sm text-slate-800">{service.name}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Backdrop Overlay */}
            {isSidebarOpen && (
                <div
                    onClick={closeSidebar}
                    className="fixed inset-0 bg-black/60 z-40 transition-opacity duration-300"
                    aria-hidden="true"
                ></div>
            )}
            
            <main className="flex-1 flex flex-col min-h-[600px] border-t border-slate-200 pt-6">
                 {!selectedService ? (
                    <div className="flex-1 flex flex-col items-center justify-center h-full text-center text-slate-500 bg-slate-50 rounded-lg p-8">
                        <WorkspaceIcon className="w-16 h-16 text-slate-400 mb-4" />
                        <h3 className="text-xl font-bold text-slate-700">دليل Google الشامل للأتمتة</h3>
                        <p className="mt-2 max-w-sm">انقر على زر 'عرض الخدمات' أعلاه لاختيار أداة من Google والبدء في رحلة الأتمتة.</p>
                    </div>
                ) : (
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                             <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100">
                                {selectedServiceInfo && React.cloneElement(selectedServiceInfo.icon, { className: 'w-7 h-7 text-blue-600' })}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-800">{selectedServiceInfo?.name}</h3>
                                <p className="text-slate-500">دليل تم إنشاؤه بواسطة الذكاء الاصطناعي</p>
                            </div>
                        </div>

                        <button
                            onClick={handleGenerate}
                            disabled={isLoading}
                            className="bg-blue-600 w-full text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/30 mb-6"
                        >
                            <SparklesIcon className="w-5 h-5" />
                            {isLoading ? 'جاري إعداد دليلك...' : 'أنشئ الدليل الذكي'}
                        </button>
                        
                        <div className="flex-1">
                            {isLoading && (
                                <div className="flex items-center justify-center gap-2 p-4 text-slate-600">
                                    <span className="h-3 w-3 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                    <span className="h-3 w-3 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                    <span className="h-3 w-3 bg-blue-600 rounded-full animate-bounce"></span>
                                    <p>الذكاء الاصطناعي يقوم بإعداد دليلك...</p>
                                </div>
                            )}
                            
                            {error && <p className="text-center text-red-600 bg-red-100 p-3 rounded-lg">{error}</p>}

                            {guideContent ? renderGeneratedContent() : (
                                !isLoading && <div className="text-slate-500 bg-slate-50 rounded-lg p-6 text-center">
                                   <p>انقر على زر "أنشئ الدليل الذكي" لبدء العملية.</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </main>
        </section>
    );
};