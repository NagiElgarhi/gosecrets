import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface SubStepData {
  title: string;
  description: string;
  icon: React.ReactElement<{ className?: string }>;
}

export interface StepData {
  stepNumber: number;
  title: string;
  description: string;
  icon: React.ReactElement<{ className?: string }>;
  link?: string;
  subSteps?: SubStepData[];
}

interface InstructionStepProps {
  step: StepData;
}

const stepColorClasses = [
    { bg: 'bg-blue-900/50', text: 'text-blue-300' },
    { bg: 'bg-green-900/50', text: 'text-green-300' },
    { bg: 'bg-yellow-900/50', text: 'text-yellow-300' },
    { bg: 'bg-red-900/50', text: 'text-red-300' },
];

export const InstructionStep: React.FC<InstructionStepProps> = ({ step }) => {
  const { t } = useLanguage();
  const { bg, text } = stepColorClasses[(step.stepNumber - 1) % stepColorClasses.length];

  return (
    <div className="bg-slate-900/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-700 transition-shadow hover:shadow-xl hover:shadow-blue-500/10">
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0 flex flex-col items-center">
          <div className={`w-16 h-16 ${bg} ${text} rounded-full flex items-center justify-center`}>
            {React.cloneElement(step.icon, { className: 'w-8 h-8' })}
          </div>
          <span className="mt-2 text-sm font-bold text-slate-400">{t('step')} {step.stepNumber}</span>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-slate-100 mb-2">{step.title}</h3>
          <p className="text-slate-300 leading-relaxed">{step.description}</p>
          {step.link && (
            <a
              href={step.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 bg-[var(--google-blue)] text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t('go_to_link')}
            </a>
          )}
        </div>
      </div>
      {step.subSteps && (
        <div className="mt-6 sm:mr-8 sm:pr-8 sm:border-r-2 sm:border-l-0 rtl:sm:border-l-2 rtl:sm:border-r-0 border-blue-800 space-y-6">
          {step.subSteps.map((subStep, index) => (
            <div key={index} className="flex items-start gap-4">
               <div className="flex-shrink-0 w-10 h-10 bg-slate-800 text-slate-300 rounded-full flex items-center justify-center">
                 {React.cloneElement(subStep.icon, { className: 'w-6 h-6' })}
               </div>
               <div>
                  <h4 className="font-bold text-lg text-slate-200">{subStep.title}</h4>
                  <p className="text-slate-400">{subStep.description}</p>
               </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};