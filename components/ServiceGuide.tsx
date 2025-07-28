import React, { useState, useRef } from 'react';
import { GoogleGenAI, Part } from '@google/genai';
import { SparklesIcon, TerminalIcon, CheckCircleIcon, ClipboardIcon, CloudArrowUpIcon, XCircleIcon } from './IconComponents';
import { useLanguage } from '../context/LanguageContext';
import { TranslationKey } from '../localization/translations';

interface Service {
    id: string;
    name: string;
    icon: React.ReactElement<{ className?: string }>;
}
interface SelectedService extends Service {
    type: string;
}

export const ServiceGuide: React.FC<{ service: SelectedService, apiKey: string, onRequestApiKey: () => void; }> = ({ service, apiKey, onRequestApiKey }) => {
    const { t, language } = useLanguage();
    const [isLoading, setIsLoading] = useState(false);
    const [guideContent, setGuideContent] = useState('');
    const [error, setError] = useState('');
    const [copySuccess, setCopySuccess] = useState(false);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImageFile(e.target.files[0]);
        }
    };

    const handleRemoveImage = () => {
        setImageFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };
    
    async function fileToGenerativePart(file: File) {
        const base64EncodedDataPromise = new Promise<string>((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve((reader.result as string).split(',')[1]);
            reader.readAsDataURL(file);
        });
        return {
            inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
        };
    }

    const handleGenerate = async () => {
        if (!service) return;
        if (!apiKey) {
            setError(t('error_enter_api_key'));
            onRequestApiKey();
            return;
        }

        setIsLoading(true);
        setError('');
        setGuideContent('');
        setCopySuccess(false);

        const promptContextKey: TranslationKey = `${service.type}_prompt_context` as TranslationKey;
        const exampleContextKey: TranslationKey = `${service.type}_example_context` as TranslationKey;
        const securityContextKey: TranslationKey = `${service.type}_security_context` as TranslationKey;
        
        const PROMPT = t('service_guide_prompt', {
            lang: language === 'ar' ? 'ARABIC' : 'ENGLISH',
            serviceName: service.name,
            promptContext: t(promptContextKey),
            exampleContext: t(exampleContextKey),
            securityContext: t(securityContextKey),
        });

        try {
            const ai = new GoogleGenAI({ apiKey });
            
            const textPart = { text: PROMPT };
            const parts: Part[] = [textPart];

            if (imageFile) {
                const imagePart = await fileToGenerativePart(imageFile);
                parts.push(imagePart);
            }

            const response = await ai.models.generateContent({ model: 'gemini-2.5-flash', contents: { parts } });
            setGuideContent(response.text);
        } catch (e) {
            console.error(e);
            setError(t('error_generating_guide'));
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
        const result: React.ReactNode[] = [];
        let match;

        while ((match = codeBlockRegex.exec(guideContent)) !== null) {
            const textPart = guideContent.substring(lastIndex, match.index)
                .replace(/### (.*?)\n/g, '<h3 class="text-xl font-bold text-slate-200 mt-6 mb-3">$1</h3>')
                .replace(/- \*\*(.*?):\*\* (.*?)\n/g, '<div class="flex items-start gap-3 my-2"><div class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 flex-shrink-0"></div><div><strong class="text-slate-300">$1:</strong> $2</div></div>');
            
            result.push(<div key={lastIndex} className="prose prose-slate max-w-none text-slate-300" dangerouslySetInnerHTML={{ __html: textPart }} />);

            const lang = match[1].trim();
            const codePart = match[2].trim();
            result.push(
                <div key={match.index}>
                    <div className="bg-black/70 rounded-lg font-mono text-sm text-slate-300 border border-slate-700 mt-4">
                        <div className="flex justify-between items-center px-4 py-2 bg-slate-800 rounded-t-lg">
                            <div className="flex items-center gap-2 text-yellow-400">
                                <TerminalIcon className="w-5 h-5" />
                                <span>{`example.${lang === 'bash' ? 'sh' : lang}`}</span>
                            </div>
                            <button onClick={() => handleCopy(codePart)} className="bg-slate-700 hover:bg-slate-600 text-slate-300 font-sans font-bold py-1 px-3 rounded-md flex items-center gap-2 transition-colors">
                                {copySuccess ? <CheckCircleIcon className="w-5 h-5 text-green-400"/> : <ClipboardIcon className="w-5 h-5"/>}
                                {copySuccess ? t('copied') : t('copy')}
                            </button>
                        </div>
                        <pre className="p-4 overflow-x-auto"><code className={`language-${lang}`}>{codePart}</code></pre>
                    </div>
                </div>
            );
            lastIndex = codeBlockRegex.lastIndex;
        }
        const remainingText = guideContent.substring(lastIndex)
             .replace(/### (.*?)\n/g, '<h3 class="text-xl font-bold text-slate-200 mt-6 mb-3">$1</h3>')
             .replace(/- \*\*(.*?):\*\* (.*?)\n/g, '<div class="flex items-start gap-3 my-2"><div class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 flex-shrink-0"></div><div><strong class="text-slate-300">$1:</strong> $2</div></div>');
        result.push(<div key={lastIndex + 1} className="prose prose-slate max-w-none text-slate-300" dangerouslySetInnerHTML={{ __html: remainingText }} />);
        return <div className="mt-6 animate-fade-in space-y-4">{result}</div>;
    };

    return (
        <section aria-labelledby="service-guide-title" className="bg-slate-900/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-700 animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
                {React.cloneElement(service.icon, { className: 'w-8 h-8 text-[var(--google-blue)]' })}
                <h2 id="service-guide-title" className="text-2xl font-bold text-slate-100">{t('guide_for_service', { serviceName: service.name })}</h2>
            </div>
             <p className="text-slate-300 mt-2 mb-6">
                {t('service_guide_desc')}
            </p>
            <main className="flex-1 flex flex-col min-h-[600px] border-t border-slate-700 pt-6">
                 <div>
                    <div className="bg-black/50 border border-dashed border-slate-600 rounded-lg p-4 text-center mb-6">
                        <input
                            ref={fileInputRef}
                            type="file"
                            onChange={handleFileChange}
                            accept="image/*"
                            className="hidden"
                            id="service-guide-file-upload"
                        />
                        {!imageFile ? (
                            <>
                                <CloudArrowUpIcon className="mx-auto h-10 w-10 text-slate-500" />
                                <label htmlFor="service-guide-file-upload" className="mt-2 block text-sm font-semibold text-[var(--google-blue)] hover:text-blue-500 cursor-pointer">
                                   {t('attach_image_optional')}
                                </label>
                                <p className="text-xs text-slate-500 mt-1">{t('attach_image_desc_guide')}</p>
                            </>
                        ) : (
                            <div className="flex items-center justify-between text-left rtl:text-right">
                                <div className="flex items-center gap-3 overflow-hidden">
                                     <img src={URL.createObjectURL(imageFile)} alt="Preview" className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
                                     <div className="text-sm text-slate-300">
                                         <p className="font-semibold truncate">{imageFile.name}</p>
                                         <p className="text-xs text-slate-500">{Math.round(imageFile.size / 1024)} KB</p>
                                     </div>
                                </div>
                                <button onClick={handleRemoveImage} className="text-slate-500 hover:text-[var(--google-red)] flex-shrink-0 ml-2 rtl:ml-0 rtl:mr-2">
                                    <XCircleIcon className="w-7 h-7" />
                                </button>
                            </div>
                        )}
                    </div>

                    <button
                        onClick={handleGenerate}
                        disabled={isLoading}
                        className="bg-[var(--google-blue)] w-full text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/30 mb-6"
                    >
                        <SparklesIcon className="w-5 h-5" />
                        {isLoading ? t('generating_guide_for_service', { serviceName: service.name }) : t('generate_smart_guide')}
                    </button>
                    <div className="flex-1">
                        {isLoading && (
                            <div className="flex items-center justify-center gap-2 p-4 text-slate-300">
                                <span className="h-3 w-3 bg-[var(--google-blue)] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                <span className="h-3 w-3 bg-[var(--google-blue)] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                <span className="h-3 w-3 bg-[var(--google-blue)] rounded-full animate-bounce"></span>
                                <p>{t('ai_preparing_guide')}</p>
                            </div>
                        )}
                        {error && <p className="text-center text-red-400 bg-red-900/50 p-3 rounded-lg">{error}</p>}
                        {guideContent ? renderGeneratedContent() : (
                            !isLoading && <div className="text-slate-400 bg-black/50 rounded-lg p-6 text-center">
                               <p>{t('click_generate_to_start')}</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </section>
    );
};