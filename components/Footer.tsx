import React from 'react';
import { KeyIcon } from './IconComponents';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onToggleApiPanel: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onToggleApiPanel }) => {
  const { t } = useLanguage();
  return (
    <footer className="bg-black/50 border-t border-slate-800 text-center py-6 text-slate-400">
        <p>{t('footer_safe_practices')}</p>
        <div className="my-2">
            <button
                onClick={onToggleApiPanel}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--google-blue)] hover:bg-blue-900/50 py-1 px-3 rounded-md transition-colors"
            >
                <KeyIcon className="w-4 h-4" />
                {t('manage_api_key')}
            </button>
        </div>
        <p>&copy; {new Date().getFullYear()} Nagiz Smart Solutions - NSS</p>
    </footer>
  );
};