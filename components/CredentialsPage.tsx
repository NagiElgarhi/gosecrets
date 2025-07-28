import React, { useMemo } from 'react';
import { AISimulator } from './AISimulator';
import { InstructionStep, StepData } from './InstructionStep';
import { 
    CloudIcon, PlusCircleIcon, BookOpenIcon, KeyIcon, CodeBracketIcon, UserCircleIcon, LockClosedIcon
} from './IconComponents';
import { useLanguage } from '../context/LanguageContext';

export const CredentialsPage: React.FC = () => {
    const { t } = useLanguage();

    const steps: StepData[] = useMemo(() => [
        {
          stepNumber: 1,
          title: t('step1_title'),
          description: t('step1_desc'),
          icon: <CloudIcon />,
          link: "https://console.cloud.google.com/",
        },
        {
          stepNumber: 2,
          title: t('step2_title'),
          description: t('step2_desc'),
          icon: <PlusCircleIcon />,
        },
        {
          stepNumber: 3,
          title: t('step3_title'),
          description: t('step3_desc'),
          icon: <BookOpenIcon />,
        },
        {
          stepNumber: 4,
          title: t('step4_title'),
          description: t('step4_desc'),
          icon: <KeyIcon />,
          subSteps: [
            {
              title: t('step4_sub1_title'),
              description: t('step4_sub1_desc'),
              icon: <CodeBracketIcon />
            },
            {
              title: t('step4_sub2_title'),
              description: t('step4_sub2_desc'),
              icon: <UserCircleIcon />
            }
          ]
        },
        {
          stepNumber: 5,
          title: t('step5_title'),
          description: t('step5_desc'),
          icon: <LockClosedIcon />,
        },
    ], [t]);

    return (
        <div className="animate-fade-in">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-black text-slate-100">{t('credentials_page_title')}</h1>
                <p className="text-lg text-slate-400 mt-4 max-w-3xl mx-auto">
                    {t('credentials_page_subtitle')}
                </p>
            </div>

            <div className="space-y-16">
                <div id="simulator">
                    <AISimulator />
                </div>
                
                <div className="mt-16">
                    <div className="relative mb-8">
                         <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-slate-700"></div>
                         </div>
                         <div className="relative flex justify-center">
                            <span className="bg-black px-4 text-lg font-semibold text-slate-400">{t('then')}</span>
                         </div>
                    </div>
                    <h2 className="text-3xl font-bold text-slate-100 mb-8 text-center">{t('step_by_step_guide_title')}</h2>
                    <div className="space-y-8">
                      {steps.map((step) => (
                        <InstructionStep key={step.stepNumber} step={step} />
                      ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
