
import React from 'react';
import { 
    SparklesIcon, TerminalIcon, WorkspaceIcon, CloudIcon, ServerIcon, StorageIcon, 
    CloudFunctionIcon, RocketIcon, KubernetesIcon, DatabaseIcon, FirestoreIcon, PubSubIcon, BigQueryIcon, GmailIcon, 
    DriveIcon, CalendarIcon, SheetsIcon, FacebookIcon, TwitterIcon, InstagramIcon, TikTokIcon, WhatsAppIcon, TelegramIcon, SlackIcon,
    ChatBubbleLeftEllipsisIcon
} from './IconComponents';
import { GuideGeneratorPage, AccordionProps, Service } from './GuideGeneratorPage';
import { useLanguage } from '../context/LanguageContext';

interface AutomationPageProps {
  apiKey: string;
  onRequestApiKey: () => void;
}

const googleCloudServices: Service[] = [
    { id: 'Compute Engine', nameKey: 'compute_engine', icon: <ServerIcon /> },
    { id: 'Cloud Storage', nameKey: 'cloud_storage', icon: <StorageIcon /> },
    { id: 'Cloud Functions', nameKey: 'cloud_functions', icon: <CloudFunctionIcon /> },
    { id: 'Cloud Run', nameKey: 'cloud_run', icon: <RocketIcon /> },
    { id: 'Kubernetes Engine', nameKey: 'kubernetes_engine', icon: <KubernetesIcon /> },
    { id: 'Cloud SQL', nameKey: 'cloud_sql', icon: <DatabaseIcon /> },
    { id: 'Firestore', nameKey: 'firestore', icon: <FirestoreIcon /> },
    { id: 'BigQuery', nameKey: 'bigquery', icon: <BigQueryIcon /> },
    { id: 'Vertex AI', nameKey: 'vertex_ai', icon: <SparklesIcon /> },
    { id: 'Pub/Sub', nameKey: 'pub_sub', icon: <PubSubIcon /> },
];

const workspaceServices: Service[] = [
    { id: 'Gmail', nameKey: 'gmail_api', icon: <GmailIcon /> },
    { id: 'Drive', nameKey: 'drive_api', icon: <DriveIcon /> },
    { id: 'Calendar', nameKey: 'calendar_api', icon: <CalendarIcon /> },
    { id: 'Sheets', nameKey: 'sheets_api', icon: <SheetsIcon /> },
];

const socialMediaServices: Service[] = [
    { id: 'Facebook', nameKey: 'facebook', icon: <FacebookIcon /> },
    { id: 'Twitter', nameKey: 'twitter', icon: <TwitterIcon /> },
    { id: 'Instagram', nameKey: 'instagram', icon: <InstagramIcon /> },
    { id: 'TikTok', nameKey: 'tiktok', icon: <TikTokIcon /> },
];

const communicationServices: Service[] = [
    { id: 'WhatsApp', nameKey: 'whatsapp', icon: <WhatsAppIcon /> },
    { id: 'Telegram', nameKey: 'telegram', icon: <TelegramIcon /> },
    { id: 'Slack', nameKey: 'slack', icon: <SlackIcon /> },
];

const accordions: AccordionProps[] = [
    { menuKey: "cloud", titleKey: 'google_cloud', icon: <CloudIcon />, services: googleCloudServices, type: "cloud" },
    { menuKey: "workspace", titleKey: 'google_workspace', icon: <WorkspaceIcon />, services: workspaceServices, type: "workspace" },
    { menuKey: "social", titleKey: 'social_media', icon: <SparklesIcon />, services: socialMediaServices, type: "social" },
    { menuKey: "communication", titleKey: 'communication_platforms', icon: <ChatBubbleLeftEllipsisIcon />, services: communicationServices, type: "communication" },
];

export const AutomationPage: React.FC<AutomationPageProps> = (props) => {
    const { t } = useLanguage();
    
    return (
        <GuideGeneratorPage
            titleKey='automation_agent_page_title'
            subtitleKey='automation_agent_page_subtitle'
            accordions={accordions}
            apiKey={props.apiKey}
            onRequestApiKey={props.onRequestApiKey}
        />
    );
};
