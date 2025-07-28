import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { EnvelopeIcon, UserIcon, ChatBubbleLeftEllipsisIcon, PaperAirplaneIcon } from './IconComponents';

export const ContactPage: React.FC = () => {
    const { t, language } = useLanguage();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle the form submission, e.g., send to an API endpoint.
        // For this example, we'll just simulate a successful submission.
        console.log({ name, email, message });
        setIsSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setIsSubmitted(false), 5000); // Reset after 5 seconds
    };

    return (
        <div className="animate-fade-in max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-black text-slate-100">{t('contact_title')}</h1>
                <p className="text-lg text-slate-400 mt-4 max-w-3xl mx-auto">{t('contact_subtitle')}</p>
            </div>

            <div className="bg-slate-900/70 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-lg border border-slate-700">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info Section */}
                    <div className="flex flex-col justify-center">
                        <div>
                            <h2 className={`text-2xl font-bold text-blue-400 mb-3 ${language === 'ar' ? 'border-r-4 border-[var(--google-blue)] pr-4' : 'border-l-4 border-[var(--google-blue)] pl-4'}`}>{t('contact_info_title')}</h2>
                            <p className="text-slate-300 leading-relaxed mb-6">
                               {t('contact_info_desc')}
                            </p>
                            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                                <h3 className="text-sm font-semibold text-slate-400">{t('contact_info_email')}</h3>
                                <a href={`mailto:${t('contact_info_email_value')}`} className="text-lg font-bold text-slate-100 hover:text-[var(--google-blue)] transition-colors">
                                    {t('contact_info_email_value')}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div>
                        <h2 className="text-2xl font-bold text-slate-100 mb-6">{t('contact_form_title')}</h2>
                        {isSubmitted ? (
                             <div className="bg-green-900/50 border border-green-700 text-green-300 p-4 rounded-lg text-center h-full flex items-center justify-center">
                                <p>{t('contact_form_success_message')}</p>
                            </div>
                        ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-slate-200 mb-2">{t('contact_form_name_label')}</label>
                                <div className="relative">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <UserIcon className="h-5 w-5 text-slate-400" />
                                    </div>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder={t('contact_form_name_placeholder')}
                                        required
                                        className="w-full p-3 pl-10 bg-slate-800 border border-slate-600 rounded-lg text-slate-100 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-slate-200 mb-2">{t('contact_form_email_label')}</label>
                                <div className="relative">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <EnvelopeIcon className="h-5 w-5 text-slate-400" />
                                    </div>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder={t('contact_form_email_placeholder')}
                                        required
                                        className="w-full p-3 pl-10 bg-slate-800 border border-slate-600 rounded-lg text-slate-100 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-slate-200 mb-2">{t('contact_form_message_label')}</label>
                                <div className="relative">
                                    <div className="pointer-events-none absolute top-3.5 left-0 flex items-center pl-3">
                                         <ChatBubbleLeftEllipsisIcon className="h-5 w-5 text-slate-400" />
                                    </div>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder={t('contact_form_message_placeholder')}
                                        required
                                        className="w-full p-3 pl-10 bg-slate-800 border border-slate-600 rounded-lg text-slate-100 focus:ring-2 focus:ring-blue-500 focus:outline-none transition resize-none"
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 bg-[var(--google-blue)] text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors shadow-lg disabled:bg-slate-600 disabled:cursor-not-allowed"
                                >
                                   <PaperAirplaneIcon className="w-5 h-5"/>
                                   <span>{t('contact_form_submit_button')}</span>
                                </button>
                            </div>
                        </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
