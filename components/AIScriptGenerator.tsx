import React, { useState, useRef } from 'react';
import { GoogleGenAI, Part } from '@google/genai';
import { SparklesIcon, TerminalIcon, ShieldCheckIcon, ClipboardIcon, CheckCircleIcon, PaperClipIcon, XCircleIcon, CloudArrowUpIcon } from './IconComponents';
import { useLanguage } from '../context/LanguageContext';

export const AIScriptGenerator: React.FC<{ apiKey: string; onRequestApiKey: () => void; }> = ({ apiKey, onRequestApiKey }) => {
    const { t, language } = useLanguage();
    const [isLoading, setIsLoading] = useState(false);
    const [scriptContent, setScriptContent] = useState('');
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

    const generateScript = async () => {
        if (!apiKey) {
            setError(t('error_enter_api_key'));
            onRequestApiKey();
            return;
        }

        setIsLoading(true);
        setError('');
        setScriptContent('');
        setCopySuccess(false);

        const PROMPT = t('ai_script_generator_prompt', { lang: language === 'ar' ? 'Arabic' : 'English' });

        try {
            const ai = new GoogleGenAI({ apiKey });
            
            const parts: Part[] = [{ text: PROMPT }];

            if (imageFile) {
                const imagePart = await fileToGenerativePart(imageFile);
                parts.push(imagePart);
            }

            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: { parts },
            });

            const rawText = response.text;
            const match = rawText.match(/```bash\n([\s\S]*?)\n```/);
            if (match && match[1]) {
                setScriptContent(match[1]);
            } else {
                setScriptContent(rawText.replace(/```bash\n|```/g, '').trim());
            }

        } catch (e) {
            console.error(e);
            setError(t('error_generating_script'));
        } finally {
            setIsLoading(false);
        }
    };

    const handleCopy = () => {
        if(scriptContent) {
            navigator.clipboard.writeText(scriptContent).then(() => {
                setCopySuccess(true);
                setTimeout(() => setCopySuccess(false), 2000);
            });
        }
    };

    return (
        <section aria-labelledby="ai-script-generator-title" className="bg-slate-900/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-700">
            <div className="flex items-center gap-3 mb-4">
                <TerminalIcon className="w-8 h-8 text-[var(--google-blue)]" />
                <h2 id="ai-script-generator-title" className="text-2xl font-bold text-slate-100">{t('gcloud_command_generator_title')}</h2>
            </div>
            <p className="text-slate-300 mb-6">
                {t('gcloud_command_generator_desc')}
            </p>

            <div className={`bg-yellow-900/50 ${language === 'ar' ? 'border-r-4' : 'border-l-4'} border-[var(--google-yellow)] text-yellow-200 p-4 rounded-lg mb-6 flex items-start gap-4`}>
                 <div className="flex-shrink-0">
                    <ShieldCheckIcon className="w-8 h-8 text-[var(--google-yellow)]" />
                </div>
                <div>
                    <h3 className="font-bold text-lg">{t('important_requirements')}</h3>
                    <ul className={`list-disc mt-2 space-y-1 ${language === 'ar' ? 'pr-5' : 'pl-5'}`}>
                        <li>{t('requirement_1_part_1')} <a href="https://cloud.google.com/sdk/docs/install" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-yellow-100">{t('requirement_1_part_2')}</a> {t('requirement_1_part_3')}</li>
                        <li>{t('requirement_2')}</li>
                        <li>{t('requirement_3')}</li>
                    </ul>
                </div>
            </div>
            
            <div className="bg-black/50 border border-dashed border-slate-600 rounded-lg p-4 text-center my-6">
                <input
                    ref={fileInputRef}
                    type="file"
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                    id="script-gen-file-upload"
                />
                {!imageFile ? (
                    <>
                        <CloudArrowUpIcon className="mx-auto h-10 w-10 text-slate-500" />
                        <label htmlFor="script-gen-file-upload" className="mt-2 block text-sm font-semibold text-[var(--google-blue)] hover:text-blue-400 cursor-pointer">
                           {t('attach_image_optional')}
                        </label>
                        <p className="text-xs text-slate-400 mt-1">{t('attach_image_desc')}</p>
                    </>
                ) : (
                    <div className="flex items-center justify-between text-left">
                        <div className="flex items-center gap-3 overflow-hidden">
                             <img src={URL.createObjectURL(imageFile)} alt="Preview" className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
                             <div className="text-sm text-slate-300">
                                 <p className="font-semibold truncate">{imageFile.name}</p>
                                 <p className="text-xs text-slate-500">{Math.round(imageFile.size / 1024)} KB</p>
                             </div>
                        </div>
                        <button onClick={handleRemoveImage} className="text-slate-500 hover:text-[var(--google-red)] flex-shrink-0 ml-2">
                            <XCircleIcon className="w-7 h-7" />
                        </button>
                    </div>
                )}
            </div>

            <div className="flex justify-center mb-6">
                <button
                    onClick={generateScript}
                    disabled={isLoading}
                    className="bg-[var(--google-blue)] text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-wait transition-all flex items-center gap-2 shadow-lg hover:shadow-blue-500/30"
                >
                    <SparklesIcon className="w-5 h-5" />
                    {isLoading ? t('generating') : t('generate_automation_script')}
                </button>
            </div>
            
            {isLoading && (
                 <div className="flex items-center justify-center gap-2 p-4 text-slate-300">
                    <span className="h-3 w-3 bg-[var(--google-blue)] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="h-3 w-3 bg-[var(--google-blue)] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="h-3 w-3 bg-[var(--google-blue)] rounded-full animate-bounce"></span>
                    <p>{t('ai_agent_writing_script')}</p>
                </div>
            )}
            
            {error && <p className="text-center text-red-400 bg-red-900/50 p-3 rounded-lg">{error}</p>}

            {scriptContent && (
                <div className="mt-4 animate-fade-in">
                    <div className="bg-black/70 rounded-lg font-mono text-sm text-slate-300 border border-slate-700">
                        <div className="flex justify-between items-center px-4 py-2 bg-slate-800 rounded-t-lg">
                            <div className="flex items-center gap-2 text-[var(--google-green)]">
                                <TerminalIcon className="w-5 h-5" />
                                <span>automation-script.sh</span>
                            </div>
                             <button onClick={handleCopy} className="bg-slate-700 hover:bg-slate-600 text-slate-300 font-sans font-bold py-1 px-3 rounded-md flex items-center gap-2 transition-colors">
                                {copySuccess ? <CheckCircleIcon className="w-5 h-5 text-green-400"/> : <ClipboardIcon className="w-5 h-5"/>}
                                {copySuccess ? t('copied') : t('copy')}
                             </button>
                        </div>
                        <pre className="p-4 overflow-x-auto">
                            <code className="language-bash">
                                {scriptContent}
                            </code>
                        </pre>
                    </div>
                </div>
            )}
        </section>
    );
};