

import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { SparklesIcon, TerminalIcon, ClipboardIcon, CheckCircleIcon, CloudIcon } from './IconComponents';

interface GoogleCloudGuideProps {
    serviceName: string;
}

export const GoogleCloudGuide: React.FC<GoogleCloudGuideProps> = ({ serviceName }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [guideContent, setGuideContent] = useState('');
    const [error, setError] = useState('');
    const [copySuccess, setCopySuccess] = useState(false);

    const handleGenerate = async () => {
        if (!serviceName) return;
        setIsLoading(true);
        setError('');
        setGuideContent('');
        setCopySuccess(false);

        const PROMPT = `You are a world-class expert on Google Cloud Platform and development. Your goal is to provide a comprehensive and highly detailed professional guide for developers in ARABIC.

The user has selected the "${serviceName}".

Generate a guide with the following structure:

### 1. وصف شامل ومفصل للخدمة (In-Depth Service Description)
A very detailed and comprehensive overview of what the ${serviceName} service does. Go beyond the basics and cover its core architecture, advanced features, pricing model, limitations, and key concepts.

### 2. حالات استخدام مفصلة (Detailed Use Cases)
List at least 5 to 10 comprehensive use cases. For each use case, provide a title, a detailed paragraph explaining the use case, its benefits, and what other GCP services it might integrate with.
Example for Cloud Storage:
- **أرشفة وتحليل سجلات التطبيقات (Log Archiving and Analysis):** إعداد نظام يقوم بتصدير سجلات التطبيقات من Compute Engine أو GKE إلى دلو في Cloud Storage تلقائيًا. بعد ذلك، يمكن استخدام BigQuery لتحليل هذه السجلات مباشرةً أو إعداد وظائف Cloud Functions لتشغيل تحليلات عند تحميل ملفات سجلات جديدة.

### 3. مثال برمجي متقدم (gcloud CLI or a relevant SDK)
Provide a practical, non-trivial code snippet that demonstrates a powerful feature of the service using gcloud CLI or a relevant SDK like Node.js. The code must be well-commented in Arabic to explain every step of the logic.
- Enclose the entire code snippet in a single markdown block, specifying the language (e.g., bash or javascript).
\`\`\`bash
# Your advanced code here
\`\`\`

### 4. أفضل الممارسات والأمان (Best Practices & Security)
Provide a section with critical advice on security (e.g., IAM roles, principle of least privilege), cost optimization, performance tuning, and error handling for the ${serviceName}.

IMPORTANT:
- The entire response MUST be in ARABIC.
- Strictly follow the requested format and headings.
- Be as detailed and expansive as possible.
- Do not add any introductory or concluding text outside of the specified sections.`;

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: PROMPT,
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
    
    const renderGeneratedContent = () => {
        if (!guideContent) return null;

        const codeBlockRegex = /```(\w+)\n([\s\S]*?)\n```/g;
        let lastIndex = 0;
        const result = [];
        let match;

        while ((match = codeBlockRegex.exec(guideContent)) !== null) {
            // Add text before the code block
            const textPart = guideContent.substring(lastIndex, match.index)
                .replace(/### (.*?)\n/g, '<h3 class="text-xl font-bold text-slate-700 mt-6 mb-3">$1</h3>')
                .replace(/- \*\*(.*?):\*\* (.*?)\n/g, '<div class="flex items-start gap-3 my-2"><div class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 flex-shrink-0"></div><div><strong class="text-slate-600">$1:</strong> $2</div></div>');
            
            result.push(<div key={lastIndex} className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: textPart }} />);

            // Add the code block
            const lang = match[1].trim();
            const codePart = match[2].trim();
            result.push(
                <div key={match.index}>
                    <div className="bg-slate-900 rounded-lg font-mono text-sm text-slate-300 border border-slate-700">
                        <div className="flex justify-between items-center px-4 py-2 bg-slate-800 rounded-t-lg">
                            <div className="flex items-center gap-2 text-yellow-400">
                                <TerminalIcon className="w-5 h-5" />
                                <span>{`example.${lang === 'bash' ? 'sh' : 'js'}`}</span>
                            </div>
                            <button onClick={() => handleCopy(codePart)} className="bg-slate-700 hover:bg-slate-600 text-slate-300 font-sans font-bold py-1 px-3 rounded-md flex items-center gap-2 transition-colors">
                                {copySuccess ? <CheckCircleIcon className="w-5 h-5 text-green-400"/> : <ClipboardIcon className="w-5 h-5"/>}
                                {copySuccess ? 'تم النسخ!' : 'نسخ'}
                            </button>
                        </div>
                        <pre className="p-4 overflow-x-auto"><code className={`language-${lang}`}>{codePart}</code></pre>
                    </div>
                </div>
            );
            lastIndex = codeBlockRegex.lastIndex;
        }

        // Add any remaining text after the last code block
        const remainingText = guideContent.substring(lastIndex)
             .replace(/### (.*?)\n/g, '<h3 class="text-xl font-bold text-slate-700 mt-6 mb-3">$1</h3>')
             .replace(/- \*\*(.*?):\*\* (.*?)\n/g, '<div class="flex items-start gap-3 my-2"><div class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 flex-shrink-0"></div><div><strong class="text-slate-600">$1:</strong> $2</div></div>');

        result.push(<div key={lastIndex + 1} className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: remainingText }} />);

        return <div className="mt-6 animate-fade-in space-y-4">{result}</div>;
    };

    return (
        <section aria-labelledby="gc-guide-title" className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
                <CloudIcon className="w-8 h-8 text-blue-600" />
                <h2 id="gc-guide-title" className="text-2xl font-bold text-slate-800">دليل Google Cloud لخدمة: <span className="text-blue-700">{serviceName}</span></h2>
            </div>
             <p className="text-slate-600 mt-2 mb-6">
                احصل على دليل مخصص من الذكاء الاصطناعي حول إمكانيات الخدمة وحالات الاستخدام وأفضل الممارسات.
            </p>
            
            <main className="flex-1 flex flex-col min-h-[600px] border-t border-slate-200 pt-6">
                 <div>
                    <button
                        onClick={handleGenerate}
                        disabled={isLoading}
                        className="bg-blue-600 w-full text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/30 mb-6"
                    >
                        <SparklesIcon className="w-5 h-5" />
                        {isLoading ? `جاري إعداد دليل ${serviceName}...` : 'أنشئ الدليل الذكي'}
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
            </main>
        </section>
    );
};