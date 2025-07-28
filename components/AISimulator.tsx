import React, { useState, useRef, useEffect, useMemo } from 'react';
import { SparklesIcon, TerminalIcon, ShieldCheckIcon, CheckCircleIcon } from './IconComponents';
import { useLanguage } from '../context/LanguageContext';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const AISimulator: React.FC = () => {
    const { t, language } = useLanguage();
    
    const SIMULATION_STEPS = useMemo(() => [
        t('sim_step_1'), t('sim_step_2'), t('sim_step_3'), t('sim_step_4'),
        t('sim_step_5'), t('sim_step_6'), t('sim_step_7'), t('sim_step_8'),
        t('sim_step_9'), t('sim_step_10'), t('sim_step_11'), t('sim_step_12'),
        t('sim_step_13'), t('sim_step_14')
    ], [t]);

    const [isSimulating, setIsSimulating] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const [logs, setLogs] = useState<string[]>([]);
    const [currentStep, setCurrentStep] = useState<number>(0);
    const logsContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (logsContainerRef.current) {
            logsContainerRef.current.scrollTop = logsContainerRef.current.scrollHeight;
        }
    }, [logs]);

    const startSimulation = async () => {
        setIsSimulating(true);
        setIsComplete(false);
        setLogs([]);
        setCurrentStep(0);

        for (let i = 0; i < SIMULATION_STEPS.length; i++) {
            setCurrentStep(i + 1);
            const randomDelay = Math.random() * (1200 - 400) + 400;
            await delay(randomDelay);
            setLogs(prev => [...prev, SIMULATION_STEPS[i]]);
        }

        setIsSimulating(false);
        setIsComplete(true);
    };

    const progress = (currentStep / SIMULATION_STEPS.length) * 100;

    const renderCredentials = () => (
        <div className="mt-6 space-y-4 animate-fade-in">
            <div>
                <label className="text-sm font-bold text-slate-400">{t('api_key_simulated')}</label>
                <div className="mt-1 p-3 bg-slate-800 rounded-lg text-white font-mono text-sm break-all">
                    AIzaSyB...[{t('simulated')}]..._eZ8-qGr3VcfYmI
                </div>
            </div>
            <div>
                <label className="text-sm font-bold text-slate-400">{t('client_id_simulated')}</label>
                <div className="mt-1 p-3 bg-slate-800 rounded-lg text-white font-mono text-sm break-all">
                    1234567890-abc...[{t('simulated')}]...apps.googleusercontent.com
                </div>
            </div>
             <div>
                <label className="text-sm font-bold text-slate-400">{t('client_secret_simulated')}</label>
                <div className="mt-1 p-3 bg-slate-800 rounded-lg text-white font-mono text-sm break-all">
                    GOCSPX-...[{t('simulated')}]...-Tj8v9bL2a3c4D5e6
                </div>
            </div>
        </div>
    );

    return (
        <section aria-labelledby="ai-simulator-title" className="bg-slate-900/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-700">
            <div className="flex items-center gap-3 mb-4">
                <SparklesIcon className="w-8 h-8 text-[var(--google-blue)]" />
                <h2 id="ai-simulator-title" className="text-2xl font-bold text-slate-100">{t('ai_simulator_title')}</h2>
            </div>
             <p className="text-slate-300 mb-6">
                {t('ai_simulator_description')}
            </p>

            <div className={`bg-yellow-900/50 ${language === 'ar' ? 'border-r-4' : 'border-l-4'} border-[var(--google-yellow)] text-yellow-200 p-4 rounded-lg mb-6 flex items-start gap-4`}>
                 <div className="flex-shrink-0">
                    <ShieldCheckIcon className="w-8 h-8 text-[var(--google-yellow)]" />
                </div>
                <div>
                    <h3 className="font-bold text-lg">{t('educational_simulation_only')}</h3>
                    <p className="mt-1">
                        {t('educational_simulation_desc')}
                    </p>
                </div>
            </div>

            <div className="bg-black/70 rounded-lg p-4 font-mono text-sm text-slate-300">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                        <TerminalIcon className="w-5 h-5 text-[var(--google-green)]" />
                        <span>AGENT_LOGS</span>
                    </div>
                     <div className="flex items-center gap-2 text-xs">
                        <span>STATUS:</span>
                        <span className={`font-bold ${isSimulating ? 'text-yellow-400 animate-pulse' : isComplete ? 'text-green-400' : 'text-slate-400'}`}>
                           {isSimulating ? t('status_running') : isComplete ? t('status_complete') : t('status_idle')} 
                        </span>
                     </div>
                </div>
                
                <div ref={logsContainerRef} className="h-64 overflow-y-auto bg-black/50 p-3 rounded-md border border-slate-700">
                   {logs.map((log, index) => (
                       <p key={index} className="flex items-start">
                           <span className="text-[var(--google-green)] mx-2">✓</span>
                           <span className="flex-1">{log}</span>
                       </p>
                   ))}
                   {isSimulating && (
                       <p className="flex items-center animate-pulse">
                          <span className="text-[var(--google-yellow)] mx-2">{'>'}</span> 
                          <span>{SIMULATION_STEPS[currentStep -1]}</span>
                          <span className="ml-2 w-2 h-2 bg-[var(--google-yellow)] rounded-full inline-block"></span>
                       </p>
                   )}
                   {!isSimulating && logs.length === 0 && (
                      <p className="text-slate-500">{t('agent_waiting_for_instructions')}</p>
                   )}
                </div>
                
                <div className="mt-4">
                    <div className="w-full bg-slate-700 rounded-full h-2.5">
                        <div className="bg-[var(--google-green)] h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
                    </div>
                    <p className="text-center text-xs text-slate-400 mt-2">{t('percentage_complete', { progress: Math.round(progress) })}</p>
                </div>
            </div>
            
            {isComplete && renderCredentials()}

            <div className="mt-6 flex justify-center">
                <button
                    onClick={startSimulation}
                    disabled={isSimulating}
                    className="bg-[var(--google-blue)] text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-wait transition-all flex items-center gap-2 shadow-lg hover:shadow-blue-500/30"
                >
                    <SparklesIcon className="w-5 h-5" />
                    {isComplete || !isSimulating ? t('restart_simulation') : t('simulation_in_progress')}
                </button>
            </div>
        </section>
    );
};