
import React from 'react';
import { 
    CloudIcon, WorkspaceIcon, AndroidIcon, AIStudioIcon, TerminalIcon, ServerIcon, StorageIcon, 
    CloudFunctionIcon, RocketIcon, KubernetesIcon, DatabaseIcon, FirestoreIcon, PubSubIcon, BigQueryIcon, GmailIcon, 
    DriveIcon, CalendarIcon, SheetsIcon, PhotosIcon, YouTubeIcon, TasksIcon, MapsIcon, TranslateIcon, Bars3Icon,
    VisionApiIcon, NaturalLanguageIcon, TextToSpeechIcon, SpeechToTextIcon, VideoIntelligenceIcon, DialogflowIcon,
    SparklesIcon, CodeBracketIcon
} from './IconComponents';
import { AIAssistant, ChatMessage } from './AIAssistant';
import { GuideGeneratorPage, AccordionProps, Service } from './GuideGeneratorPage';

interface InstructionalGuideProps {
  messages: ChatMessage[];
  input: string;
  isLoading: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSendMessage: (e: React.FormEvent) => Promise<void>;
  image: File | null;
  onImageChange: (file: File | null) => void;
  apiKey: string;
  onRequestApiKey: () => void;
}

const googleCloudServices: Service[] = [
    { id: 'gcloud-script-generator', nameKey: 'gcloud_command_generator_title', icon: <TerminalIcon /> },
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

const androidStudioServices: Service[] = [
    { id: 'Jetpack Compose', nameKey: 'jetpack_compose', icon: <CodeBracketIcon /> },
    { id: 'Kotlin Coroutines', nameKey: 'kotlin_coroutines', icon: <SparklesIcon /> },
    { id: 'Room Database', nameKey: 'room_database', icon: <DatabaseIcon /> },
    { id: 'Firebase Integration', nameKey: 'firebase_integration', icon: <CloudIcon /> },
];

const aiStudioServices: Service[] = [
    { id: 'Prompt Engineering', nameKey: 'prompt_engineering', icon: <TerminalIcon /> },
    { id: 'Model Tuning', nameKey: 'model_tuning', icon: <SparklesIcon /> },
    { id: 'Function Calling', nameKey: 'function_calling', icon: <CodeBracketIcon /> },
];

const otherGoogleServices: Service[] = [
    { id: 'Firebase', nameKey: 'firebase', icon: <CloudIcon /> },
    { id: 'Flutter', nameKey: 'flutter', icon: <AndroidIcon /> },
    { id: 'TensorFlow', nameKey: 'tensorflow', icon: <SparklesIcon /> },
    { id: 'Vision API', nameKey: 'vision_api', icon: <VisionApiIcon /> },
    { id: 'Natural Language API', nameKey: 'natural_language_api', icon: <NaturalLanguageIcon /> },
    { id: 'Text-to-Speech API', nameKey: 'text_to_speech_api', icon: <TextToSpeechIcon /> },
    { id: 'Speech-to-Text API', nameKey: 'speech_to_text_api', icon: <SpeechToTextIcon /> },
    { id: 'Video Intelligence API', nameKey: 'video_intelligence_api', icon: <VideoIntelligenceIcon /> },
    { id: 'Dialogflow CX', nameKey: 'dialogflow_cx', icon: <DialogflowIcon /> },
    { id: 'Google Analytics', nameKey: 'analytics_api', icon: <CodeBracketIcon /> },
    { id: 'Google Ads', nameKey: 'ads_api', icon: <CodeBracketIcon /> },
    { id: 'Photos', nameKey: 'photos_api', icon: <PhotosIcon /> },
    { id: 'YouTube', nameKey: 'youtube_data_api', icon: <YouTubeIcon /> },
    { id: 'Tasks', nameKey: 'tasks_api', icon: <TasksIcon /> },
    { id: 'Maps', nameKey: 'maps_platform_api', icon: <MapsIcon /> },
    { id: 'Translate', nameKey: 'translation_api', icon: <TranslateIcon /> },
];

const accordions: AccordionProps[] = [
    { menuKey: "cloud", titleKey: 'google_cloud', icon: <CloudIcon />, services: googleCloudServices, type: "cloud" },
    { menuKey: "workspace", titleKey: 'google_workspace', icon: <WorkspaceIcon />, services: workspaceServices, type: "workspace" },
    { menuKey: "android", titleKey: 'android_studio', icon: <AndroidIcon />, services: androidStudioServices, type: "android" },
    { menuKey: "ai", titleKey: 'ai_studio', icon: <AIStudioIcon />, services: aiStudioServices, type: "ai" },
    { menuKey: "other", titleKey: 'other_google_products', icon: <Bars3Icon />, services: otherGoogleServices, type: "other" }
];


export const InstructionalGuide: React.FC<InstructionalGuideProps> = (props) => {
    return (
        <div className="animate-fade-in">
            <GuideGeneratorPage
                titleKey='try_smart_guide_generator'
                subtitleKey='smart_guide_generator_desc'
                accordions={accordions}
                apiKey={props.apiKey}
                onRequestApiKey={props.onRequestApiKey}
            />

            {/* AI Assistant Section */}
            <div className="mt-16">
                 <AIAssistant
                  messages={props.messages}
                  input={props.input}
                  isLoading={props.isLoading}
                  onInputChange={props.onInputChange}
                  onSendMessage={props.onSendMessage}
                  image={props.image}
                  onImageChange={props.onImageChange}
                />
            </div>
        </div>
    );
};
