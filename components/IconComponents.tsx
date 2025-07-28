

import React from 'react';

interface IconProps {
  className?: string;
}

export const TempleIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className={className}>
        <defs>
            <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F4B400" />
                <stop offset="100%" stopColor="#B8860B" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="0.7" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <g filter="url(#glow)">
            <path d="M12 2L3 9V10H5V20H9V15H15V20H19V10H21L12 2Z" fill="url(#gold-gradient)" stroke="#8A6500" strokeWidth="0.5" />
            <path d="M3 21H21" stroke="url(#gold-gradient)" strokeWidth="1" />
            <path d="M9.5 15V20M14.5 15V20" stroke="#8A6500" strokeWidth="1" />
            <path d="M6 10C8.5 12.5 15.5 12.5 18 10" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="0.75" fill="none" />
        </g>
    </svg>
);


export const ShieldCheckIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M12.832 2.523L12 2.092l-.832.431C6.963 4.88 4.09 8.243 4.09 12c0 3.757 2.873 7.12 7.12 9.407a1.5 1.5 0 001.58 0c4.247-2.287 7.12-5.65 7.12-9.407 0-3.757-2.873-7.12-7.168-9.477zM11.25 12l-2.25 2.25a.75.75 0 001.06 1.06L12 13.06l1.94 1.94a.75.75 0 101.06-1.06L13.06 12l1.94-1.94a.75.75 0 10-1.06-1.06L12 10.94l-1.94-1.94a.75.75 0 00-1.06 1.06L11.25 12z" clipRule="evenodd" />
  </svg>
);


export const CloudIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M5.25 14.25a3.75 3.75 0 01-3.75-3.75 3.75 3.75 0 013.75-3.75h.51a5.253 5.253 0 019.48 0h.51a3.75 3.75 0 013.75 3.75 3.75 3.75 0 01-3.75 3.75H5.25z" />
  </svg>
);

export const KeyIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M15.75 1.5a6.75 6.75 0 00-6.653 7.906c-1.034.252-2.01.68-2.897 1.293a.75.75 0 00-.28 1.034L8.25 15.75a.75.75 0 001.034.28L12 14.252V18a.75.75 0 00.75.75h3.75a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-2.25v-1.503a6.75 6.75 0 006-6.247A6.75 6.75 0 0015.75 1.5zM15.75 3a5.25 5.25 0 015.243 5.195c.007.054.007.11.007.165a5.25 5.25 0 01-10.5 0c0-.055 0-.11.007-.165A5.25 5.25 0 0115.75 3z" clipRule="evenodd" />
  </svg>
);

export const LockClosedIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
  </svg>
);

export const PlusCircleIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
  </svg>
);

export const BookOpenIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M.75 4.5A2.25 2.25 0 013 2.25h11.25a.75.75 0 010 1.5H3a.75.75 0 00-.75.75v12.75A.75.75 0 003 21h11.25a.75.75 0 010 1.5H3A2.25 2.25 0 01.75 20.25V4.5z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M23.25 4.5A2.25 2.25 0 0021 2.25H9.75a.75.75 0 000 1.5H21a.75.75 0 01.75.75v12.75a.75.75 0 01-.75.75H9.75a.75.75 0 000 1.5H21A2.25 2.25 0 0023.25 20.25V4.5z" clipRule="evenodd" />
    <path d="M12 4.125a.75.75 0 01.75.75v14.25a.75.75 0 01-1.5 0V4.875a.75.75 0 01.75-.75z" />
  </svg>
);


export const UserCircleIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 017.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
    </svg>
);

export const CodeBracketIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" d="M9.622 3.11a.75.75 0 01.815.658l1.5 11.25a.75.75 0 01-1.474.196l-1.5-11.25a.75.75 0 01.659-.854zM4.5 6a.75.75 0 01.75.75v10.5a.75.75 0 01-1.5 0V6.75A.75.75 0 014.5 6zm15 0a.75.75 0 01.75.75v10.5a.75.75 0 01-1.5 0V6.75a.75.75 0 01.75-.75zm-6.655 1.155a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 01-1.06-1.06l4.5-4.5a.75.75 0 011.06 0zm-4.5 8.485a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-4.5-4.5a.75.75 0 010-1.06z" clipRule="evenodd" />
    </svg>
);

export const SparklesIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75c0-5.056 2.383-9.555 6.084-12.436A6.75 6.75 0 019.315 7.584zM15 3a.75.75 0 01.75.75c0 2.682-1.06 5.166-2.828 6.934a.75.75 0 11-1.06-1.06C13.298 8.24 14.25 5.922 14.25 3.75A.75.75 0 0115 3z" clipRule="evenodd" />
    </svg>
);


export const PaperAirplaneIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
    </svg>
);


export const TerminalIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M4.5 3A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3h-15zm3.25 5.69a.75.75 0 011.06 0l2.5 2.5a.75.75 0 010 1.06l-2.5 2.5a.75.75 0 11-1.06-1.06l1.97-1.97-1.97-1.97a.75.75 0 010-1.06zm5.5 4.06a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
  </svg>
);

export const CheckCircleIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.06-1.06L10.5 12.94l-1.72-1.72a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.06 0l4.5-4.5z" clipRule="evenodd" />
    </svg>
);

export const ClipboardIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M10.5 3A2.25 2.25 0 008.25 5.25v.54l.02.023a2.25 2.25 0 012.23-2.263h3a2.25 2.25 0 012.25 2.25v13.5a2.25 2.25 0 01-2.25 2.25h-3a2.25 2.25 0 01-2.25-2.25v-1.128c0-.497.19-1.09.702-1.528.32-.274.69-.448 1.048-.448h.001c.36 0 .728.174 1.048.448.512.438.702 1.03.702 1.528v.128a.75.75 0 001.5 0v-.128c0-1.254-.6-2.328-1.555-3.052a3.75 3.75 0 00-4.64 0c-.955.724-1.555 1.798-1.555 3.052v1.128A2.25 2.25 0 0010.5 21h3a2.25 2.25 0 002.25-2.25V5.25A2.25 2.25 0 0013.5 3h-3z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M9 7.5A.75.75 0 019.75 6.75h.008a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 019 7.5z" clipRule="evenodd" />
    </svg>
);

export const WorkspaceIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M4.5 3.75A1.5 1.5 0 016 2.25h12A1.5 1.5 0 0119.5 3.75v16.5A1.5 1.5 0 0118 21.75H6A1.5 1.5 0 014.5 20.25V3.75zM8.25 4.5A.75.75 0 019 5.25v3A.75.75 0 018.25 9v-3.75A.75.75 0 018.25 4.5zM9 10.5A.75.75 0 008.25 11.25v3a.75.75 0 001.5 0v-3A.75.75 0 009 10.5zM12.75 4.5a.75.75 0 01.75.75v10.5a.75.75 0 01-1.5 0V5.25a.75.75 0 01.75-.75z" clipRule="evenodd" />
    </svg>
);

export const GmailIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
    </svg>
);

export const DriveIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M2.206 14.342L5.86 8.25h6.28l3.654 6.092-3.14 5.408H5.346l-3.14-5.408z" />
        <path d="M15.75 8.25l-3.655-6.093h6.28L21.794 8.25h-6.044z" />
        <path d="M12.095 2.158L8.44 8.25H2.158l3.14-5.408a2.25 2.25 0 013.882-2.258L12.095 2.158z" />
        <path d="M12.095 21.843l-3.654-6.093h12.568l-3.14 5.408a2.25 2.25 0 01-3.882 2.258L12.095 21.843z" />
    </svg>
);

export const CalendarIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3-3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zM5.25 6A1.5 1.5 0 003.75 7.5v11.25c0 .828.672 1.5 1.5 1.5h13.5a1.5 1.5 0 001.5-1.5V7.5A1.5 1.5 0 0018.75 6H5.25z" clipRule="evenodd" />
        <path d="M10.5 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-1.5 0V12zm-3 0a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-1.5 0V12zm6 0a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-1.5 0V12z" />
    </svg>
);

export const SheetsIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M2.25 3A1.5 1.5 0 013.75 1.5h16.5A1.5 1.5 0 0121.75 3v18a1.5 1.5 0 01-1.5 1.5H3.75A1.5 1.5 0 012.25 21V3zm4.5 3.75a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-3zm0 6a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-3zm6.75-6a.75.75 0 00-.75.75v3a.75.75 0 00.75.75h3a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-3zm-1.5 6.75a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-3z" clipRule="evenodd" />
    </svg>
);

export const PhotosIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 1.5a10.5 10.5 0 100 21 10.5 10.5 0 000-21zM20.66 12.31c.32-1.07.32-2.22 0-3.29l1.9-1.39a.5.5 0 00.1-.64l-1.73-3a.5.5 0 00-.59-.22l-2.31.85c-.69-.55-1.47-.99-2.31-1.29L15 2a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5l-.57 2.43c-.84.3-1.62.74-2.31 1.29l-2.31-.85a.5.5 0 00-.59.22l-1.73 3a.5.5 0 00.1.64l1.9 1.39c-.32 1.07-.32 2.22 0 3.29l-1.9 1.39a.5.5 0 00-.1.64l1.73 3a.5.5 0 00.59.22l2.31-.85c.69.55 1.47.99 2.31 1.29L9 22a.5.5 0 00.5.5h5a.5.5 0 00.5-.5l.57-2.43c.84-.3 1.62-.74-2.31-1.29l2.31.85a.5.5 0 00.59.22l1.73-3a.5.5 0 00-.1-.64l-1.9-1.39zM12 15.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" />
    </svg>
);

export const YouTubeIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M19.802 5.378a3.24 3.24 0 012.33 2.33C22.5 9.24 22.5 12 22.5 12s0 2.76-.368 4.292a3.24 3.24 0 01-2.33 2.33C18.27 18.99 12 18.99 12 18.99s-6.27 0-7.802-.378a3.24 3.24 0 01-2.33-2.33C1.5 14.76 1.5 12 1.5 12s0-2.76.368-4.292a3.24 3.24 0 012.33-2.33C5.73 5.01 12 5.01 12 5.01s6.27 0 7.802.368zM9.75 14.49V9.51l4.5 2.49-4.5 2.49z" clipRule="evenodd" />
    </svg>
);

export const TasksIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM15.42 16.58a.75.75 0 10-1.06-1.06L12 13.19l-1.36-1.36a.75.75 0 00-1.06 1.06l1.89 1.89a.75.75 0 001.06 0l3.95-3.95zm-6.23-6.6a.75.75 0 010 1.06L7.47 12.75H16.5a.75.75 0 010 1.5H7.47l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z" clipRule="evenodd" />
    </svg>
);

export const MapsIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 005.16-4.252l-2.09-1.205a14.975 14.975 0 01-3.13 2.544l-.29.158-.29-.158a14.975 14.975 0 01-3.13-2.544l-2.09 1.205A16.975 16.975 0 0011.54 22.351zM12 2.45a5.25 5.25 0 00-5.228 5.495c0 1.454.49 2.825 1.343 4.02l4.004 5.34a.75.75 0 001.164 0l4.005-5.34c.852-1.195 1.342-2.566 1.342-4.02A5.25 5.25 0 0012 2.45z" clipRule="evenodd" />
    </svg>
);

export const TranslateIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.23 15.22l-1.89-1.89h5.41v-1.5H8.5l2.12-2.12-1.06-1.06L6.34 12l3.22 3.22 1.06-1.06.61.61zM14.25 3.75h-8.5A2.75 2.75 0 003 6.5v11A2.75 2.75 0 005.75 20.25h12.5A2.75 2.75 0 0021 17.5v-7.5h-1.5v7.5a1.25 1.25 0 01-1.25 1.25h-12.5a1.25 1.25 0 01-1.25-1.25v-11a1.25 1.25 0 011.25-1.25h8.5v1.5H16.5v-1.5a2.75 2.75 0 00-2.25-2.75zm3.94 3.56l-1.06 1.06L18.88 10h-3.63v1.5h3.63l-1.75 1.75 1.06 1.06L22.44 12l-3.22-3.22z" />
    </svg>
);

export const BigQueryIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 3a9 9 0 00-9 9c0 4.34 3.06 7.97 7.12 8.81l.46-1.52A7.5 7.5 0 014.5 12a7.5 7.5 0 017.5-7.5c2.09 0 4.01.87 5.4 2.29l-1.84 1.84A.75.75 0 0015.75 10h5.25a.75.75 0 00.75-.75V3.75a.75.75 0 00-1.28-.53l-1.81 1.81C16.63 3.91 14.42 3 12 3zm4.5 12.75a.75.75 0 00-.75-.75h-3a.75.75 0 000 1.5h3a.75.75 0 00.75-.75z" />
    </svg>
);

export const Bars3Icon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

export const XMarkIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const HomeIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
    </svg>
);

export const ServerIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M3.75 4.5a.75.75 0 01.75-.75h15a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-15a.75.75 0 01-.75-.75V4.5zM3.75 9.75a.75.75 0 01.75-.75h15a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-15a.75.75 0 01-.75-.75V9.75zM3.75 15a.75.75 0 01.75-.75h15a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-15a.75.75 0 01-.75-.75V15z" clipRule="evenodd" />
      <path d="M8.25 6a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V6zM8.25 11.25a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75v-.01zM8.25 16.5a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75v-.01z" />
    </svg>
);

export const StorageIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12 18a6 6 0 100-12 6 6 0 000 12zM15 12a3 3 0 11-6 0 3 3 0 016 0z" clipRule="evenodd" />
    </svg>
);

export const CloudFunctionIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M11.25 4.533A9.75 9.75 0 006.14 8.25H4.5a.75.75 0 000 1.5h1.64A9.75 9.75 0 0011.25 13.5v1.253a.75.75 0 01-1.5 0v-1.127a8.25 8.25 0 01-4.04-2.122.75.75 0 011.06-1.06 6.75 6.75 0 009.46 0 .75.75 0 111.06 1.06 8.25 8.25 0 01-4.04 2.122V14.75a.75.75 0 01-1.5 0V13.5A9.75 9.75 0 0017.86 9.75h1.64a.75.75 0 000-1.5h-1.64A9.75 9.75 0 0012.75 4.533V3.75a.75.75 0 011.5 0v.783A8.25 8.25 0 0118 8.654a.75.75 0 11-1.5.092 6.75 6.75 0 00-9 0 .75.75 0 01-1.5-.092A8.25 8.25 0 0111.25 4.533V3.75a.75.75 0 01-1.5 0v.783z" />
        <path fillRule="evenodd" d="M12.75 16.5a.75.75 0 00-1.5 0v3.375l-1.03-1.03a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.06 0l2.25-2.25a.75.75 0 10-1.06-1.06l-1.03 1.03V16.5z" clipRule="evenodd" />
    </svg>
);

export const RocketIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071 1.052A6.75 6.75 0 0015.75 12a.75.75 0 011.5 0 8.25 8.25 0 01-3.32 6.664.75.75 0 10.866 1.198A9.75 9.75 0 0021 12a.75.75 0 00-.75-.75h-2.553a.75.75 0 01-.585-.279l-1.423-2.134A6.75 6.75 0 0012.963 2.286z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M8.25 12a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V12a.75.75 0 01.75-.75z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M9 12.75a.75.75 0 001.071 1.052 6.75 6.75 0 004.512-1.91.75.75 0 10-.866-1.198 8.25 8.25 0 01-5.54 2.29.75.75 0 01-.197-1.48z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M10.5 10.5a.75.75 0 01.75-.75h2.553a.75.75 0 01.585.279l1.423 2.134a6.75 6.75 0 00-4.512 1.91.75.75 0 11-1.071-1.052A8.25 8.25 0 0110.5 3.75a.75.75 0 010 1.5 6.75 6.75 0 00-2.48 1.332.75.75 0 10.866 1.198 8.25 8.25 0 013.32-6.664.75.75 0 10-.866-1.198A9.75 9.75 0 003 12a.75.75 0 00.75.75h2.553a.75.75 0 01.585.279l1.423 2.134a6.75 6.75 0 004.512 1.91.75.75 0 10.866-1.198A8.25 8.25 0 018.25 12a.75.75 0 01-.75-.75h-1.5a.75.75 0 000 1.5h1.5A6.75 6.75 0 009 18.248a.75.75 0 101.198.866A8.25 8.25 0 013 12.75a.75.75 0 010-1.5h1.5a.75.75 0 00.75-.75V10.5z" clipRule="evenodd" />
    </svg>
);

export const KubernetesIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.001 2.25a.75.75 0 01.75.75v3.438l4.91 2.835a.75.75 0 010 1.299l-4.91 2.835v3.438a.75.75 0 01-1.5 0v-3.438l-4.91-2.835a.75.75 0 010-1.299l4.91-2.835V3a.75.75 0 01.75-.75z" />
      <path d="M12.001 12.163l4.91 2.835a.75.75 0 01.375.65v3.437a.75.75 0 01-1.5 0v-2.89l-4.16-2.401-4.16 2.402v2.889a.75.75 0 01-1.5 0v-3.437a.75.75 0 01.375-.65l4.91-2.835a.75.75 0 01.75 0z" />
    </svg>
);

export const DatabaseIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M11.25 3a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5z" />
      <path fillRule="evenodd" d="M11.25 6a.75.75 0 00-.75.75v10.5a.75.75 0 001.5 0V6.75a.75.75 0 00-.75-.75zM5.25 6.75c0-1.518 1.232-2.75 2.75-2.75h8.5A2.75 2.75 0 0119.25 6.75v10.5A2.75 2.75 0 0116.5 20h-8.5A2.75 2.75 0 015.25 17.25V6.75zM8 6.75a1.25 1.25 0 00-1.25 1.25v8.5a1.25 1.25 0 001.25 1.25h8a1.25 1.25 0 001.25-1.25v-8.5a1.25 1.25 0 00-1.25-1.25h-8z" clipRule="evenodd" />
    </svg>
);

export const FirestoreIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4.5 2.25a.75.75 0 000 1.5v16.5a.75.75 0 000 1.5h15a.75.75 0 000-1.5V3.75a.75.75 0 000-1.5h-15z" />
      <path d="M12 7.039a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V7.04zM12 11.289a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75v-.01zM12 15.539a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75v-.01zM7.5 7.039a.75.75 0 00-.75.75v.01a.75.75 0 00.75.75h.01a.75.75 0 00.75-.75V7.04a.75.75 0 00-.75-.75h-.01zM7.5 11.289a.75.75 0 00-.75.75v.01a.75.75 0 00.75.75h.01a.75.75 0 00.75-.75v-.01a.75.75 0 00-.75-.75h-.01zM7.5 15.539a.75.75 0 00-.75.75v.01a.75.75 0 00.75.75h.01a.75.75 0 00.75-.75v-.01a.75.75 0 00-.75-.75h-.01z" />
    </svg>
);

export const PubSubIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M3 8.25a.75.75 0 01.75-.75h6a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75h-6a.75.75 0 01-.75-.75v-1.5zm13.5 0a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-1.5z" clipRule="evenodd" />
      <path d="M3.75 12.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" />
      <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v18a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM4.125 15a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V15a.75.75 0 01.75-.75zM17.625 15a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V15a.75.75 0 01.75-.75z" clipRule="evenodd" />
    </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
    </svg>
);

export const AIStudioIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12.75 3.75a.75.75 0 00-1.5 0V8.5H3.75a.75.75 0 000 1.5h7.5v7.5a.75.75 0 001.5 0v-7.5h7.5a.75.75 0 000-1.5H12.75V3.75z" />
        <path fillRule="evenodd" d="M3.484 2.261a.75.75 0 00-1.06 1.06l4.25 4.25a.75.75 0 101.06-1.06L3.484 2.26zM15.485 2.26a.75.75 0 10-1.061 1.06l4.25 4.25a.75.75 0 101.06-1.06l-4.25-4.25zM2.424 16.545a.75.75 0 10-1.06 1.06l4.25 4.25a.75.75 0 101.06-1.06l-4.25-4.25zM16.545 21.856a.75.75 0 101.06-1.06l-4.25-4.25a.75.75 0 10-1.06 1.06l4.25 4.25z" clipRule="evenodd" />
    </svg>
);

export const AndroidIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.75 12.75h-1.5v-3h1.5a.75.75 0 000-1.5h-12a.75.75 0 000 1.5h1.5v3h-1.5a.75.75 0 000 1.5h12a.75.75 0 000-1.5z" />
      <path fillRule="evenodd" d="M4.5 3A1.5 1.5 0 003 4.5v11.25a3.75 3.75 0 003.75 3.75h9.5a3.75 3.75 0 003.75-3.75V4.5A1.5 1.5 0 0019.5 3h-15zm6.75 2.25a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75V5.25zm-3.75 0a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H8.25a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
    </svg>
);

export const PaperClipIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M18.97 3.659a2.25 2.25 0 00-3.182 0l-10.12 10.12a2.25 2.25 0 000 3.182 2.25 2.25 0 003.182 0l7.768-7.768a.75.75 0 011.06 1.06l-7.768 7.768a3.75 3.75 0 11-5.304-5.304l10.12-10.12a3.75 3.75 0 115.304 5.304L9.43 19.31a.75.75 0 11-1.06-1.06l10.6-10.6a.75.75 0 00-1.06-1.06l-10.6 10.6a2.25 2.25 0 000 3.182 2.25 2.25 0 003.182 0l9.53-9.53a.75.75 0 10-1.06-1.06l-9.53 9.53c-.97.97-2.56.97-3.53 0s-.97-2.56 0-3.53l10.12-10.12a.75.75 0 011.06 0z" clipRule="evenodd" />
    </svg>
);

export const XCircleIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 00-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
    </svg>
);

export const CloudArrowUpIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3.75-3.75M12 9.75l3.75 3.75m0-3.75V16.5m-7.5-3.75h15M12 21a9 9 0 110-18 9 9 0 010 18z" />
    </svg>
);

// New AI/ML Service Icons
export const VisionApiIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
      <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113C21.186 17.024 16.97 20.25 12.001 20.25c-4.97 0-9.185-3.223-10.675-7.69a.75.75 0 010-1.113zM12.001 18a5.996 5.996 0 01-4.723-2.316C8.687 13.92 10.21 12.75 12 12.75s3.312 1.17 4.723 2.934A5.996 5.996 0 0112.001 18z" clipRule="evenodd" />
    </svg>
);

export const NaturalLanguageIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M15.28 3.22a.75.75 0 01.22.53v16.5a.75.75 0 01-1.5 0V4.223l-3.52 3.52a.75.75 0 01-1.06-1.06l5-5a.75.75 0 01.84 0z" clipRule="evenodd" />
      <path d="M8.25 6.75a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zM4.5 11.25a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H5.25a.75.75 0 01-.75-.75zM4.5 15a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5H5.25a.75.75 0 01-.75-.75z" />
    </svg>
);

export const TextToSpeechIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.348 2.595.341 1.24 1.518 1.905 2.66 1.905H6.44l4.5 4.5c.944.945 2.56.276 2.56-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
      <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
    </svg>
);

export const SpeechToTextIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
      <path d="M6 10.5a.75.75 0 01.75.75v.75a4.5 4.5 0 009 0v-.75a.75.75 0 011.5 0v.75a6 6 0 11-12 0v-.75a.75.75 0 01.75-.75z" />
    </svg>
);

export const VideoIntelligenceIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.746 1.295 2.54 0 3.286L7.279 20.99c-1.25.72-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
    </svg>
);

export const DialogflowIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.75.75 0 00-.676.92l.245.98A4.5 4.5 0 0115.05 21H9.95a4.5 4.5 0 01-3.03-1.22l.244-.979a.75.75 0 00-.676-.92 49.049 49.049 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.74c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clipRule="evenodd" />
    </svg>
);

// Icons for Contact Page
export const UserIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
    </svg>
);

export const EnvelopeIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
    </svg>
);

export const ChatBubbleLeftEllipsisIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M12.9 2.25c-5.183 0-9.449 3.034-11.234 7.284a.75.75 0 00.166 1.012l.166.166c.247.247.61.365.967.332A7.504 7.504 0 017.5 15.25a7.5 7.5 0 01-3.083-1.152.75.75 0 00-.967-.332l-.166-.166a.75.75 0 00-1.012-.166C.304 14.551 0 16.248 0 18c0 2.42.983 4.603 2.593 6.136C4.402 25.923 6.892 27 9.75 27c5.183 0 9.449-3.034 11.234-7.284a.75.75 0 00-.166-1.012l-.166-.166a.75.75 0 00-.967-.332 7.504 7.504 0 01-4.417-2.917A7.5 7.5 0 0116.5 8.75c1.459 0 2.823.416 4.043 1.152.357.247.72.115.967-.116l.166-.166a.75.75 0 00.166-1.012C22.349 5.284 18.083 2.25 12.9 2.25zM15 11.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-4.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-3-1.5a.75.75 0 00-1.5 0v3a.75.75 0 001.5 0v-3z" clipRule="evenodd" />
    </svg>
);

// Automation Page Icons
export const FacebookIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
);

export const TwitterIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

export const InstagramIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M12 2.25c-2.817 0-3.153.012-4.252.062-1.096.05-1.86.216-2.53.491a3.8 3.8 0 00-1.42 1.42c-.275.67-.44 1.434-.491 2.53C2.262 8.847 2.25 9.183 2.25 12s.012 3.153.062 4.252c.05 1.096.216 1.86.491 2.53a3.8 3.8 0 001.42 1.42c.67.275 1.434.44 2.53.491 1.099.05 1.435.062 4.252.062s3.153-.012 4.252-.062c1.096-.05 1.86-.216 2.53-.491a3.8 3.8 0 001.42-1.42c.275-.67.44-1.434.491-2.53.05-1.099.062-1.435.062-4.252s-.012-3.153-.062-4.252c-.05-1.096-.216-1.86-.491-2.53a3.8 3.8 0 00-1.42-1.42c-.67-.275-1.434-.44-2.53-.491C15.153 2.262 14.817 2.25 12 2.25zm0 1.5c2.756 0 3.06.011 4.125.06 1.01.046 1.58.204 1.95.36 1.02.43 1.51 1.15 1.8 2.12.16.37.314.94.36 1.95.05 1.065.06 1.369.06 4.125s-.01 3.06-.06 4.125c-.046 1.01-.204 1.58-.36 1.95-.29.97-.78 1.69-1.8 2.12-.37.16-.94.314-1.95.36-1.065.05-1.369.06-4.125.06s-3.06-.01-4.125-.06c-1.01-.046-1.58-.204-1.95-.36-.92-.38-1.55-1.05-1.8-2.12-.16-.37-.314-.94-.36-1.95-.05-1.065-.06-1.369-.06-4.125s.01-3.06.06-4.125c.046-1.01.204-1.58.36-1.95.29-.97.78-1.69 1.8-2.12.37-.16.94-.314 1.95-.36 1.065-.05 1.369-.06 4.125-.06z" clipRule="evenodd" />
        <path d="M12 7.125a4.875 4.875 0 100 9.75 4.875 4.875 0 000-9.75zM12 15.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" />
        <path d="M16.875 6.375a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z" />
    </svg>
);

export const TikTokIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.86-.95-6.43-2.8-1.58-1.85-2.03-4.35-1.16-6.66.9-2.34 3.14-4.14 5.6-4.48.09-.01 4.31-.02 4.31-.02V8.71c-1.52.01-3.04.01-4.57.02-.01-1.56.01-3.12 0-4.68 1.46-.01 2.93-.01 4.39-.01z" />
    </svg>
);

export const WhatsAppIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM12.04 20.15c-1.49 0-2.93-.4-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.25 8.25 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24s8.24 3.7 8.24 8.24-3.7 8.24-8.24 8.24zm4.52-6.13c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97s-.29.18-.53.06c-.25-.12-1.04-.38-1.98-1.22s-1.43-1.93-1.6-2.25-.05-.29.08-.41c.11-.11.25-.29.37-.44s.17-.25.25-.41.04-.3-.02-.43c-.06-.12-.56-1.34-.76-1.84s-.4-.42-.55-.43h-.48c-.17 0-.44.06-.67.31s-.86.84-.86 2.05.88 2.37 1 2.53 1.75 2.67 4.24 3.76 1.69.83 2.27.67c.75-.2 1.25-.83 1.42-1.58.17-.75.17-1.39.12-1.58-.05-.16-.2-.25-.44-.37z" />
    </svg>
);

export const TelegramIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M21.84 3.42a2.03 2.03 0 00-2.24-1.33L1.5 8.65c-1.54.58-1.52 2.56.03 3.06l4.63 1.45 1.46 4.63c.5 1.55 2.48 1.56 3.06.03l6.57-18.1zM7.25 12.06l10.15-6.3-8.02 7.63-2.13-1.33zm5.43 6.96l1.33-2.13 7.63-8.02-6.3 10.15z" />
    </svg>
);

export const SlackIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M5.042 15.16a2.52 2.52 0 01-2.52-2.52V9.12a2.52 2.52 0 012.52-2.52h3.36a2.52 2.52 0 012.52 2.52v2.52a2.52 2.52 0 01-2.52 2.52H5.042zm3.36 1.68h2.52a2.52 2.52 0 012.52 2.52v3.36a2.52 2.52 0 01-2.52 2.52h-2.52a2.52 2.52 0 01-2.52-2.52v-3.36a2.52 2.52 0 012.52-2.52zM8.882 5.04a2.52 2.52 0 012.52-2.52h3.36a2.52 2.52 0 012.52 2.52v3.36a2.52 2.52 0 01-2.52 2.52h-2.52a2.52 2.52 0 01-2.52-2.52V5.04zm1.68 3.36v2.52a2.52 2.52 0 012.52 2.52h3.36a2.52 2.52 0 012.52-2.52v-2.52a2.52 2.52 0 01-2.52-2.52h-3.36a2.52 2.52 0 01-2.52 2.52z" />
    </svg>
);
