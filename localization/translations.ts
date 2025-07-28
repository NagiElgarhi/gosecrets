

export type TranslationKey = 
  // Navbar
  | 'nav_home' | 'nav_services' | 'nav_automation' | 'nav_about' | 'nav_contact' | 'nav_interactive_guide' | 'nav_credentials'
  | 'google_secrets'
  // Footer
  | 'footer_safe_practices' | 'manage_api_key'
  // General
  | 'close_button' | 'go_to_link' | 'step' | 'then' | 'copied' | 'copy' | 'generating'
  // Home Page
  | 'home_title_1' | 'home_title_2' | 'home_title_3' | 'home_title_4' | 'home_title_5' | 'home_title_6' | 'home_title_7'
  | 'home_subtitle' | 'explore_automation_tools' | 'features_title' | 'features_subtitle'
  | 'feature_1_title' | 'feature_1_desc'
  | 'feature_2_title' | 'feature_2_desc'
  | 'feature_3_title' | 'feature_3_desc'
  | 'feature_4_title' | 'feature_4_desc'
  // Services Page
  | 'services_title' | 'services_subtitle'
  | 'service_card_1_title' | 'service_card_1_desc' | 'go_to_interactive_guide'
  | 'service_card_2_title' | 'service_card_2_desc'
  | 'service_card_3_title' | 'service_card_3_desc' | 'read_more_about_us'
  // Automation Page
  | 'automation_agent_page_title' | 'automation_agent_page_subtitle'
  | 'social_media' | 'communication_platforms'
  | 'facebook' | 'twitter' | 'instagram' | 'tiktok' | 'whatsapp' | 'telegram' | 'slack'
  // Credentials Page
  | 'credentials_page_title' | 'credentials_page_subtitle'
  // About Page
  | 'about_title' | 'about_subtitle' | 'about_mission_title' | 'about_mission_desc'
  | 'about_vision_title' | 'about_vision_desc' | 'about_why_title' | 'about_why_desc'
  // Contact Page
  | 'contact_title' | 'contact_subtitle' | 'contact_form_title' | 'contact_info_title'
  | 'contact_info_desc' | 'contact_info_email' | 'contact_info_email_value'
  | 'contact_form_name_label' | 'contact_form_name_placeholder' | 'contact_form_email_label'
  | 'contact_form_email_placeholder' | 'contact_form_message_label' | 'contact_form_message_placeholder'
  | 'contact_form_submit_button' | 'contact_form_success_message'
  // API Key Panel
  | 'api_panel_description' | 'api_panel_get_key_link' | 'api_panel_input_label' 
  | 'api_panel_input_placeholder' | 'api_panel_save_button'
  // Instructional Guide
  | 'important_security_notice' | 'security_notice_desc' | 'try_smart_guide_generator'
  | 'smart_guide_generator_desc' | 'choose_service_for_guide' | 'google_cloud' | 'google_workspace'
  | 'android_studio' | 'ai_studio' | 'step_by_step_guide_title'
  // Steps
  | 'step1_title' | 'step1_desc'
  | 'step2_title' | 'step2_desc'
  | 'step3_title' | 'step3_desc'
  | 'step4_title' | 'step4_desc'
  | 'step4_sub1_title' | 'step4_sub1_desc'
  | 'step4_sub2_title' | 'step4_sub2_desc'
  | 'step5_title' | 'step5_desc'
  // Smart Guide Generator
  | 'smart_guide_generator' | 'select_service_to_start'
  // Service Names
  | 'gcloud_command_generator_title' | 'compute_engine' | 'cloud_storage' | 'cloud_functions'
  | 'cloud_run' | 'kubernetes_engine' | 'cloud_sql' | 'firestore' | 'bigquery' | 'vertex_ai' | 'pub_sub'
  | 'gmail_api' | 'drive_api' | 'calendar_api' | 'sheets_api'
  | 'jetpack_compose' | 'kotlin_coroutines' | 'room_database' | 'firebase_integration'
  | 'prompt_engineering' | 'model_tuning' | 'function_calling'
  | 'other_google_products'
  | 'firebase' | 'flutter' | 'tensorflow' | 'analytics_api' | 'ads_api' | 'photos_api'
  | 'youtube_data_api' | 'tasks_api' | 'maps_platform_api' | 'translation_api'
  | 'vision_api' | 'natural_language_api' | 'text_to_speech_api' | 'speech_to_text_api' | 'video_intelligence_api' | 'dialogflow_cx'
  // AI Assistant
  | 'ai_assistant_title' | 'ai_assistant_description' | 'attach_image' 
  | 'ai_assistant_placeholder_image' | 'ai_assistant_placeholder_text' 
  | 'ai_assistant_input_aria_label' | 'send_button_aria_label' | 'image_attached'
  // AI Simulator
  | 'ai_simulator_title' | 'ai_simulator_description' | 'educational_simulation_only'
  | 'educational_simulation_desc' | 'status_running' | 'status_complete' | 'status_idle'
  | 'agent_waiting_for_instructions' | 'percentage_complete' | 'api_key_simulated' | 'client_id_simulated'
  | 'client_secret_simulated' | 'simulated' | 'restart_simulation' | 'simulation_in_progress'
  | 'sim_step_1' | 'sim_step_2' | 'sim_step_3' | 'sim_step_4' | 'sim_step_5' | 'sim_step_6'
  | 'sim_step_7' | 'sim_step_8' | 'sim_step_9' | 'sim_step_10' | 'sim_step_11' | 'sim_step_12'
  | 'sim_step_13' | 'sim_step_14'
  // AI Script Generator
  | 'gcloud_command_generator_desc' | 'important_requirements' | 'requirement_1_part_1'
  | 'requirement_1_part_2' | 'requirement_1_part_3' | 'requirement_2' | 'requirement_3'
  | 'attach_image_optional' | 'attach_image_desc' | 'generate_automation_script' | 'ai_agent_writing_script'
  // Service Guide
  | 'guide_for_service' | 'service_guide_desc' | 'attach_image_desc_guide'
  | 'generating_guide_for_service' | 'generate_smart_guide' | 'ai_preparing_guide' | 'click_generate_to_start'
  // Errors & System Prompts
  | 'error_enter_api_key_to_start' | 'ai_assistant_system_prompt' | 'ai_assistant_welcome' | 'error_init_assistant'
  | 'error_send_message' | 'error_enter_api_key' | 'ai_script_generator_prompt' | 'error_generating_script'
  | 'service_guide_prompt' | 'error_generating_guide'
  | 'cloud_prompt_context' | 'workspace_prompt_context' | 'android_prompt_context' | 'ai_prompt_context'
  | 'cloud_example_context' | 'workspace_example_context' | 'android_example_context' | 'ai_example_context'
  | 'cloud_security_context' | 'workspace_security_context' | 'android_security_context' | 'ai_security_context'
  | 'other_prompt_context' | 'other_example_context' | 'other_security_context'
  | 'social_prompt_context' | 'social_example_context' | 'social_security_context'
  | 'communication_prompt_context' | 'communication_example_context' | 'communication_security_context'
;

type Translations = {
    [lang: string]: { [key in TranslationKey]: string };
};

export const translations: Translations = {
    en: {
        // Navbar
        nav_home: 'Home',
        nav_services: 'Our Services',
        nav_automation: 'Automation',
        nav_about: 'About Us',
        nav_contact: 'Contact Us',
        nav_interactive_guide: 'Interactive Guide',
        nav_credentials: 'Credentials',
        google_secrets: 'Google Secrets',
        // Footer
        footer_safe_practices: 'This guide is designed to promote safe software development practices.',
        manage_api_key: 'Manage API Key',
        // General
        close_button: 'Close',
        go_to_link: 'Go to Link',
        step: 'Step',
        then: 'Then',
        copied: 'Copied!',
        copy: 'Copy',
        generating: 'Generating...',
        // Home Page
        home_title_1: "Discover",
        home_title_2: "Google's",
        home_title_3: "Secrets.",
        home_title_4: "Be",
        home_title_5: "the",
        home_title_6: "Pro",
        home_title_7: "",
        home_subtitle: 'Your gateway to exploring and automating Google Cloud and Workspace services. Interactive guides, smart assistants, and script generators.',
        explore_automation_tools: 'Explore Automation Tools',
        features_title: 'Everything You Need in One Place',
        features_subtitle: 'We provide a range of educational tools and resources designed to help you master Google technologies with ease and security.',
        feature_1_title: 'Comprehensive & Interactive Guides',
        feature_1_desc: 'Learn step-by-step with our instructional guide, or choose any Google service and get a professional, detailed, and customized guide from AI.',
        feature_2_title: 'Smart Developer Tools',
        feature_2_desc: 'Turn ideas into reality. Use the automation script generator to create ready-made Bash scripts, or use the guide generator to speed up documentation.',
        feature_3_title: 'Safe Simulation & Learning Environment',
        feature_3_desc: 'Experience the process of obtaining credentials in a completely safe simulation environment. Learn security best practices without any risk to your account.',
        feature_4_title: 'Expert Assistant at Your Service',
        feature_4_desc: 'Facing a problem? Ask our Gemini-powered smart assistant about any step, or ask it to analyze an image to help you gain a deeper understanding.',
        // Services Page
        services_title: 'Our Services, Designed for You',
        services_subtitle: 'We offer an integrated suite of educational and interactive services to help you master the vast world of Google.',
        service_card_1_title: 'Interactive & Smart Guides',
        service_card_1_desc: 'We offer two types of guides: a static guide that takes you step-by-step, and smart guides generated by AI to cover any Google service in depth and detail.',
        go_to_interactive_guide: 'Go to Interactive Guide',
        service_card_2_title: 'Developer Tools',
        service_card_2_desc: 'A suite of tools that accelerates your workflow. From an automation script generator that writes Bash scripts for you, to a simulator that visualizes complex processes safely.',
        service_card_3_title: 'Focus on Security',
        service_card_3_desc: 'Security is not an add-on; it is the foundation of everything we offer. All our guides and tools are designed with a focus on best security practices to protect your data and resources.',
        read_more_about_us: 'Read More About Us',
        // Automation Agent Page
        automation_agent_page_title: 'Automation Agent',
        automation_agent_page_subtitle: 'Select a service to generate custom automation guides and scripts with AI.',
        social_media: 'Social Media',
        communication_platforms: 'Communication Platforms',
        facebook: 'Facebook',
        twitter: 'Twitter (X)',
        instagram: 'Instagram',
        tiktok: 'TikTok',
        whatsapp: 'WhatsApp',
        telegram: 'Telegram',
        slack: 'Slack',
        // Credentials Page
        credentials_page_title: 'Credentials & Security',
        credentials_page_subtitle: 'Learn how to obtain and secure your credentials, both manually and through simulation.',
        // About Page
        about_title: 'About Google Secrets',
        about_subtitle: 'Our mission is to unveil the secrets of technology for everyone.',
        about_mission_title: 'Our Mission',
        about_mission_desc: 'Our mission is to demystify Google\'s advanced technologies and make them accessible to everyone, from professional developers to curious hobbyists. We believe that knowledge is power, and we strive to empower creators and innovators by providing innovative educational tools, practical explanations, and a safe environment for experimentation and learning.',
        about_vision_title: 'Our Vision',
        about_vision_desc: 'To be the first and most trusted source in the world for exploring, learning, and automating Google services. We aspire to build a community of skilled developers capable of building exceptional solutions using the most powerful tools Google offers, always focusing on security best practices and effective development.',
        about_why_title: 'Why Google Secrets?',
        about_why_desc: 'This site was born out of a passion for simplifying complex concepts. We noticed a gap in content that covers the practical and deep aspects of Google services, especially regarding automation and security best practices. "Google Secrets" is our attempt to fill this gap and provide high-quality content that combines technical accuracy with ease of understanding.',
        // Contact Page
        contact_title: "Get in Touch",
        contact_subtitle: "Have questions or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.",
        contact_form_title: "Send us a Message",
        contact_info_title: "Contact Information",
        contact_info_desc: "You can also reach us via email. We typically respond within 24 hours.",
        contact_info_email: "Our Email",
        contact_info_email_value: "contact@nagiz.net",
        contact_form_name_label: "Full Name",
        contact_form_name_placeholder: "Your Name",
        contact_form_email_label: "Email Address",
        contact_form_email_placeholder: "you@example.com",
        contact_form_message_label: "Your Message",
        contact_form_message_placeholder: "Type your message here...",
        contact_form_submit_button: "Send Message",
        contact_form_success_message: "Thank you! Your message has been sent.",
        // API Key Panel
        api_panel_description: 'To experience the app, you will need a Google API key. You can get one for free from AI Studio.',
        api_panel_get_key_link: 'Get a key from Google AI Studio',
        api_panel_input_label: 'Your API Key',
        api_panel_input_placeholder: 'Enter your API key here...',
        api_panel_save_button: 'Save and Use Key',
        // Instructional Guide
        important_security_notice: 'Important Security Notice',
        security_notice_desc: 'This application is an educational tool only. For your security, never share your Google account password with any unofficial website or application. Credentials are always created through the official Google Cloud platform.',
        try_smart_guide_generator: 'Try the Smart Guide Generator',
        smart_guide_generator_desc: 'Choose any service from the dropdown menus and get a custom guide, or use the gcloud agent to generate commands.',
        choose_service_for_guide: 'Choose a service to generate a guide',
        google_cloud: 'Google Cloud',
        google_workspace: 'Google Workspace',
        android_studio: 'Android Studio',
        ai_studio: 'AI Studio',
        step_by_step_guide_title: 'Step-by-Step Guide',
        // Steps
        step1_title: "Go to Google Cloud Console",
        step1_desc: "The first step is to visit the Google Cloud platform. This is the official portal for developers to manage Google services. You will need to log in with your Google account.",
        step2_title: "Create a New Project",
        step2_desc: "Inside the Cloud Console, create a new project. Projects are a way to organize all your Google Cloud resources, including APIs and credentials.",
        step3_title: "Enable APIs and Services",
        step3_desc: "Navigate to the 'APIs & Services' > 'Library' section. Search for the API you want to use (e.g., Gemini API or Maps API) and enable it for your project.",
        step4_title: "Create Credentials",
        step4_desc: "Now, go to 'APIs & Services' > 'Credentials'. Here you can create the credentials your application needs.",
        step4_sub1_title: "For an API Key",
        step4_sub1_desc: "Choose 'Create Credentials' then 'API key'. This key is suitable for accessing public APIs that do not require access to user data.",
        step4_sub2_title: "For an OAuth 2.0 Client ID",
        step4_sub2_desc: "Choose 'Create Credentials' then 'OAuth client ID'. This is used to allow your app to access user data on their behalf after obtaining their consent. You will need to configure the 'OAuth consent screen' first.",
        step5_title: "Secure Your Credentials",
        step5_desc: "Security is paramount. Never share your private keys. Restrict your API keys so they only work on specific web domains or IP addresses to prevent unauthorized use.",
        // Smart Guide Generator
        smart_guide_generator: 'Smart Guide Generator',
        select_service_to_start: 'Select a service from the list on the left to start generating a professional and detailed guide.',
        // Service Names
        gcloud_command_generator_title: 'gcloud Command Generator (Agent)',
        compute_engine: 'Compute Engine',
        cloud_storage: 'Cloud Storage',
        cloud_functions: 'Cloud Functions',
        cloud_run: 'Cloud Run',
        kubernetes_engine: 'Kubernetes Engine',
        cloud_sql: 'Cloud SQL',
        firestore: 'Firestore',
        bigquery: 'BigQuery',
        vertex_ai: 'Vertex AI',
        pub_sub: 'Pub/Sub',
        gmail_api: 'Gmail API',
        drive_api: 'Google Drive API',
        calendar_api: 'Google Calendar API',
        sheets_api: 'Google Sheets API',
        jetpack_compose: 'Jetpack Compose',
        kotlin_coroutines: 'Kotlin Coroutines',
        room_database: 'Room Database',
        firebase_integration: 'Firebase Integration',
        prompt_engineering: 'Prompt Engineering',
        model_tuning: 'Model Tuning',
        function_calling: 'Function Calling',
        other_google_products: 'More Products',
        firebase: 'Firebase',
        flutter: 'Flutter',
        tensorflow: 'TensorFlow',
        analytics_api: 'Google Analytics API',
        ads_api: 'Google Ads API',
        photos_api: 'Google Photos API',
        youtube_data_api: 'YouTube Data API',
        tasks_api: 'Google Tasks API',
        maps_platform_api: 'Google Maps Platform',
        translation_api: 'Translation API',
        vision_api: 'Cloud Vision API',
        natural_language_api: 'Cloud Natural Language API',
        text_to_speech_api: 'Cloud Text-to-Speech API',
        speech_to_text_api: 'Cloud Speech-to-Text API',
        video_intelligence_api: 'Cloud Video Intelligence API',
        dialogflow_cx: 'Dialogflow CX',
        // AI Assistant
        ai_assistant_title: 'Smart Assistant',
        ai_assistant_description: 'Have a question about the steps or want to analyze an image? Ask the Gemini-powered assistant.',
        attach_image: 'Attach an image',
        ai_assistant_placeholder_image: 'Describe the image or ask about it...',
        ai_assistant_placeholder_text: 'Ask about any step, e.g., What is OAuth?',
        ai_assistant_input_aria_label: 'Ask the smart assistant a question',
        send_button_aria_label: 'Send question',
        image_attached: 'Image attached',
        // AI Simulator
        ai_simulator_title: 'AI Agent Simulator',
        ai_simulator_description: 'See how an AI agent can automate the credential acquisition process in a safe, simulated environment.',
        educational_simulation_only: 'This is an educational simulation only',
        educational_simulation_desc: 'No real connection is made to your Google account. All steps and credentials shown are fictional for demonstration and educational purposes.',
        status_running: 'RUNNING',
        status_complete: 'COMPLETE',
        status_idle: 'IDLE',
        agent_waiting_for_instructions: 'Agent is waiting for instructions...',
        percentage_complete: '{{progress}}% complete',
        api_key_simulated: 'API Key (Simulated)',
        client_id_simulated: 'Client ID (Simulated)',
        client_secret_simulated: 'Client Secret (Simulated)',
        simulated: 'simulated',
        restart_simulation: 'Restart Simulation',
        simulation_in_progress: 'Simulation in progress...',
        sim_step_1: "Initializing AI agent...",
        sim_step_2: "Establishing secure connection to Google Cloud APIs...",
        sim_step_3: "Authenticating session...",
        sim_step_4: "Finding active project or creating a new one...",
        sim_step_5: "Enabling 'Gemini API'...",
        sim_step_6: "Enabling 'Identity and Access Management (IAM) API'...",
        sim_step_7: "Setting up OAuth consent screen...",
        sim_step_8: "Creating credentials: API Key...",
        sim_step_9: "Applying security restrictions to API Key...",
        sim_step_10: "Creating credentials: OAuth 2.0 Client ID...",
        sim_step_11: "Configuring redirect URIs...",
        sim_step_12: "Collecting and securing credentials...",
        sim_step_13: "Terminating session and deleting temporary data...",
        sim_step_14: "Process completed successfully!",
        // AI Script Generator
        gcloud_command_generator_desc: 'Let the AI agent create an automation script based on your request or an image you attach (like an architecture diagram).',
        important_requirements: 'Important Requirements and Guidelines',
        requirement_1_part_1: 'You must have',
        requirement_1_part_2: 'Google Cloud CLI (gcloud)',
        requirement_1_part_3: 'installed and authenticated.',
        requirement_2: 'Review the generated code carefully before running it in your terminal.',
        requirement_3: 'You are responsible for any costs incurred from using Google Cloud resources.',
        attach_image_optional: 'Attach Image (Optional)',
        attach_image_desc: 'Attach a diagram or screenshot to generate a custom script.',
        generate_automation_script: 'Generate Automation Script',
        ai_agent_writing_script: 'The AI agent is writing the code...',
        // Service Guide
        guide_for_service: 'Guide: {{serviceName}}',
        service_guide_desc: 'Get a custom guide from AI about the service\'s capabilities, or attach an image (like an architecture diagram) to enrich the content.',
        attach_image_desc_guide: 'Attach a diagram or screenshot to enrich the guide.',
        generating_guide_for_service: 'Generating guide for {{serviceName}}...',
        generate_smart_guide: 'Generate Smart Guide',
        ai_preparing_guide: 'The AI is preparing your guide...',
        click_generate_to_start: 'Click the "Generate Smart Guide" button to start the process.',
        // Errors & System Prompts
        error_enter_api_key_to_start: 'Hello! Please enter a valid Google API key to begin. You can get one from aistudio.google.com.',
        ai_assistant_system_prompt: "You are a helpful AI assistant expert in Google Cloud Platform, Google Workspace, Android Development, and general API credential management. Your purpose is to answer user questions about the process of creating and securing API keys and OAuth Client IDs, and to analyze any images provided by the user. You must never ask for or suggest that the user share any personal information, passwords, or secret keys. Your tone should be helpful, clear, and focused on security best practices. Your answers must be in {{lang}}.",
        ai_assistant_welcome: 'Hello! I\'m here to help you. Ask me anything about the steps to create Google API credentials or attach an image for me to analyze.',
        error_init_assistant: 'Sorry, I could not initialize the smart assistant. Please make sure your API key is correct.',
        error_send_message: 'Sorry, something went wrong. Please make sure your API key is valid and try again.',
        error_enter_api_key: 'Please enter a valid API key first via "Manage API Key" at the bottom of the page.',
        ai_script_generator_prompt: `You are an expert AI agent specializing in Google Cloud automation. Your task is to generate a complete and executable bash script that automates the creation of Google Cloud credentials. The script must perform the following actions using gcloud CLI commands:
1.  **Project ID Setup**: Define a variable for a new project ID. Use 'ai-agent-project-[RANDOM_6_CHARS]'.
2.  **Project Creation**: Create a new Google Cloud project with the defined project ID.
3.  **Project Linking**: Set the gcloud config to use the newly created project.
4.  **Billing Link**: Instruct the user on how to link a billing account manually, as this cannot be automated via a simple script. Provide the correct gcloud command and a URL.
5.  **API Enablement**: Enable the 'iam.googleapis.com' and 'vision.googleapis.com' APIs. Add comments explaining why these are needed.
6.  **API Key Creation**: Create a new unrestricted API Key. Store its value in a variable.
7.  **OAuth Consent Screen Setup**: Explain that this is a prerequisite for OAuth Client ID and usually requires manual setup. Provide a placeholder command.
8.  **OAuth Client ID Creation**: Create an OAuth 2.0 Client ID for a 'web' application.
9.  **Output**: At the end of the script, echo all the created information clearly: Project ID, API Key, and a message about where to find the OAuth Client ID and Secret in the Cloud Console.
If an image is provided, analyze its content (e.g., a diagram of cloud architecture, a screenshot of a setup) and generate a bash script that reflects the actions or resources shown in the image, in addition to the standard credential creation process. For example, if the image shows a GKE cluster and a Cloud SQL database, the script should also include commands to create those resources.
Rules:
- The entire output must be a single bash script enclosed in a markdown code block ('''bash ... ''').
- Do not include any text or explanation outside the markdown code block.
- Add comments in {{lang}} within the script to explain each major step.
- The script should be robust and include checks where appropriate (e.g., checking if a project was created).`,
        error_generating_script: 'Sorry, an error occurred while generating the script. Please make sure your API key is valid and try again.',
        service_guide_prompt: `{{promptContext}} Your goal is to provide a comprehensive and highly detailed professional guide for developers in {{lang}}.
The user has selected "{{serviceName}}". If an image is provided, you MUST analyze it and incorporate insights from the image into your guide (e.g., if it's an architecture diagram, explain how {{serviceName}} fits in).
Generate a guide with the following structure:
### 1. وصف شامل ومفصل (In-Depth Description)
A very detailed and comprehensive overview of what {{serviceName}} is. Go beyond the basics and cover its core architecture, advanced features, and key concepts.
### 2. حالات استخدام مفصلة (Detailed Use Cases)
List at least 5 comprehensive use cases. For each use case, provide a title and a detailed paragraph explaining the use case and its benefits.
### 3. مثال برمجي متقدم (Advanced Code Example)
Provide {{exampleContext}}. The code must be well-commented in {{lang}} to explain every step of the logic. Enclose the entire code snippet in a single markdown block, specifying the language.
### 4. أفضل الممارسات والأمان (Best Practices & Security)
Provide a section with critical advice on {{securityContext}} for {{serviceName}}.
IMPORTANT: The entire response MUST be in {{lang}}. Strictly follow the requested format and headings. Be as detailed and expansive as possible. Do not add any introductory or concluding text outside of the specified sections.`,
        error_generating_guide: 'Sorry, an error occurred while generating the guide. Please try again.',
        cloud_prompt_context: "You are a world-class expert on Google Cloud Platform and development.",
        workspace_prompt_context: "You are a world-class expert on Google Workspace APIs and development.",
        android_prompt_context: "You are a world-class expert on Android development with a focus on modern native development using Kotlin.",
        ai_prompt_context: "You are a world-class expert on Google's AI Studio and developing with Gemini models.",
        other_prompt_context: "You are a world-class expert on Google products and their APIs.",
        social_prompt_context: "You are a world-class expert on social media platform APIs and automation.",
        communication_prompt_context: "You are a world-class expert on communication platform APIs (like WhatsApp, Telegram, Slack) and building bots/integrations.",
        cloud_example_context: "a practical, non-trivial code snippet that demonstrates a powerful feature of the service using gcloud CLI or a relevant SDK like Node.js",
        workspace_example_context: "a practical, non-trivial JavaScript code snippet that demonstrates a powerful feature of the API.",
        android_example_context: "a practical, well-commented Kotlin code snippet using modern Android practices (e.g. Coroutines, Flow, Compose).",
        ai_example_context: "a practical example, which could be a detailed prompt, a JavaScript snippet using the Gemini SDK, or a Python snippet.",
        other_example_context: "a practical code snippet using a relevant SDK (e.g., JavaScript, Python, Dart).",
        social_example_context: "a practical, non-trivial code snippet using a relevant SDK (e.g., Python, JavaScript) to perform an automation task.",
        communication_example_context: "a practical code snippet for a simple bot or integration using a relevant SDK (e.g., Python, Node.js).",
        cloud_security_context: "security (e.g., IAM roles, principle of least privilege), cost optimization, performance tuning, and error handling",
        workspace_security_context: "security, efficiency, error handling, and respecting user privacy",
        android_security_context: "performance, memory management, modern architecture patterns (MVVM), and best practices",
        ai_security_context: "prompt security, managing quotas, choosing the right model, and interpreting results effectively",
        other_security_context: "security, API usage, rate limiting, and general best practices",
        social_security_context: "app permissions, user data privacy, API rate limits, and handling authentication securely.",
        communication_security_context: "securing webhooks, managing user privacy, API token security, and avoiding spam.",
    },
    ar: {
        // Navbar
        nav_home: 'الرئيسية',
        nav_services: 'خدماتنا',
        nav_automation: 'الأتمتة',
        nav_about: 'من نحن',
        nav_contact: 'اتصل بنا',
        nav_interactive_guide: 'الدليل التفاعلي',
        nav_credentials: 'إعتمادات',
        google_secrets: 'أسرار جووجل',
        // Footer
        footer_safe_practices: 'تم تصميم هذا الدليل لتعزيز الممارسات الآمنة في تطوير البرمجيات.',
        manage_api_key: 'إدارة مفتاح API',
        // General
        close_button: 'إغلاق',
        go_to_link: 'الانتقال إلى الرابط',
        step: 'الخطوة',
        then: 'ثم',
        copied: 'تم النسخ!',
        copy: 'نسخ',
        generating: 'جاري الإنشاء...',
        // Home Page
        home_title_1: "اكتشف",
        home_title_2: "أسرار",
        home_title_3: "Google.",
        home_title_4: "وكن",
        home_title_5: "انت",
        home_title_6: "المحترف",
        home_title_7: "",
        home_subtitle: 'بوابتك لاستكشاف وأتمتة خدمات Google السحابية و Workspace. أدلة تفاعلية، ومساعدون أذكياء، ومنشئات نصوص برمجية.',
        explore_automation_tools: 'استكشف أدوات الأتمتة',
        features_title: 'كل ما تحتاجه في مكان واحد',
        features_subtitle: 'نحن نقدم مجموعة من الأدوات والموارد التعليمية المصممة لمساعدتك على إتقان تقنيات Google بسهولة وأمان.',
        feature_1_title: 'أدلة شاملة وتفاعلية',
        feature_1_desc: 'تعلم خطوة بخطوة مع دليلنا الإرشادي، أو اختر أي خدمة من Google واحصل على دليل احترافي مفصل ومخصص من الذكاء الاصطناعي.',
        feature_2_title: 'منشئات ذكية للمطورين',
        feature_2_desc: 'حوّل الأفكار إلى واقع. استخدم منشئ نصوص الأتمتة لإنشاء شيفرات Bash جاهزة، أو استعن بمنشئ الأدلة لتسريع عملية التوثيق.',
        feature_3_title: 'محاكاة آمنة وبيئة تعليمية',
        feature_3_desc: 'جرّب عملية الحصول على بيانات الاعتماد في بيئة محاكاة آمنة تمامًا. تعلم أفضل الممارسات الأمنية دون أي مخاطر على حسابك.',
        feature_4_title: 'مساعد خبير تحت أمرك',
        feature_4_desc: 'هل واجهتك مشكلة؟ اسأل مساعدنا الذكي المدعوم بـ Gemini عن أي خطوة، أو اطلب منه تحليل صورة لمساعدتك في فهم أعمق.',
        // Services Page
        services_title: 'خدماتنا المصممة لك',
        services_subtitle: 'نقدم مجموعة متكاملة من الخدمات التعليمية والتفاعلية لمساعدتك على إتقان عالم Google الواسع.',
        service_card_1_title: 'أدلة تفاعلية وذكية',
        service_card_1_desc: 'نقدم نوعين من الأدلة: دليل إرشادي ثابت يأخذ بيدك خطوة بخطوة، وأدلة ذكية يتم إنشاؤها بواسطة الذكاء الاصطناعي لتغطية أي خدمة من خدمات Google بعمق وتفصيل.',
        go_to_interactive_guide: 'اذهب إلى الدليل التفاعلي',
        service_card_2_title: 'أدوات المطورين',
        service_card_2_desc: 'مجموعة من الأدوات التي تسرّع وتيرة عملك. من منشئ نصوص الأتمتة الذي يكتب لك شيفرات Bash، إلى المحاكي الذي يوضح لك العمليات المعقدة بطريقة آمنة وبصرية.',
        service_card_3_title: 'التركيز على الأمان',
        service_card_3_desc: 'الأمان ليس خيارًا إضافيًا، بل هو أساس كل ما نقدمه. جميع أدلتنا وأدواتنا مصممة مع التركيز على أفضل الممارسات الأمنية لحماية بياناتك ومواردك.',
        read_more_about_us: 'اقرأ المزيد عنا',
        // Automation Agent Page
        automation_agent_page_title: 'وكيل الأتمتة',
        automation_agent_page_subtitle: 'اختر خدمة لإنشاء أدلة ونصوص أتمتة مخصصة بواسطة الذكاء الاصطناعي.',
        social_media: 'وسائل التواصل الاجتماعي',
        communication_platforms: 'منصات التواصل',
        facebook: 'فيسبوك',
        twitter: 'تويتر (X)',
        instagram: 'انستجرام',
        tiktok: 'تيك توك',
        whatsapp: 'واتساب',
        telegram: 'تليجرام',
        slack: 'سلاك',
        // Credentials Page
        credentials_page_title: 'الاعتمادات والأمان',
        credentials_page_subtitle: 'تعلم كيفية الحصول على بيانات الاعتماد وتأمينها، يدويًا ومن خلال المحاكاة.',
        // About Page
        about_title: 'عن أسرار جووجل',
        about_subtitle: 'مهمتنا هي كشف أسرار التكنولوجيا للجميع.',
        about_mission_title: 'مهمتنا',
        about_mission_desc: 'مهمتنا هي إزالة الغموض عن التقنيات المتقدمة لشركة Google وجعلها في متناول الجميع، من المطورين المحترفين إلى الهواة الفضوليين. نؤمن بأن المعرفة هي القوة، ونسعى لتمكين المبدعين والمبتكرين في العالم العربي من خلال توفير أدوات تعليمية مبتكرة، وشروحات عملية، وبيئة آمنة للتجربة والتعلم.',
        about_vision_title: 'رؤيتنا',
        about_vision_desc: 'أن نكون المصدر الأول والأكثر ثقة في العالم العربي لاستكشاف وتعلّم وأتمتة خدمات Google. نطمح لبناء مجتمع من المطورين المهرة القادرين على بناء حلول استثنائية باستخدام أقوى الأدوات التي تقدمها Google، مع التركيز دائمًا على أفضل الممارسات الأمنية والتطوير الفعّال.',
        about_why_title: 'لماذا أسرار جووجل؟',
        about_why_desc: 'وُلد هذا الموقع من شغف بتبسيط المفاهيم المعقدة. لاحظنا وجود فجوة في المحتوى العربي الذي يغطي الجوانب العملية والعميقة لخدمات Google، خاصة فيما يتعلق بالأتمتة وأفضل الممارسات الأمنية. "أسرار جووجل" هو محاولتنا لسد هذه الفجوة وتقديم محتوى عالي الجودة يجمع بين الدقة التقنية وسهولة الفهم.',
        // Contact Page
        contact_title: "تواصل معنا",
        contact_subtitle: "هل لديك أسئلة أو ملاحظات؟ يسعدنا أن نسمع منك. املأ النموذج أدناه وسنعاود الاتصال بك في أقرب وقت ممكن.",
        contact_form_title: "أرسل لنا رسالة",
        contact_info_title: "معلومات الاتصال",
        contact_info_desc: "يمكنك أيضًا التواصل معنا عبر البريد الإلكتر الإلكتروني. نرد عادةً في غضون 24 ساعة.",
        contact_info_email: "بريدنا الإلكتروني",
        contact_info_email_value: "contact@nagiz.net",
        contact_form_name_label: "الاسم الكامل",
        contact_form_name_placeholder: "اسمك",
        contact_form_email_label: "البريد الإلكتروني",
        contact_form_email_placeholder: "you@example.com",
        contact_form_message_label: "رسالتك",
        contact_form_message_placeholder: "اكتب رسالتك هنا...",
        contact_form_submit_button: "إرسال الرسالة",
        contact_form_success_message: "شكرًا لك! لقد تم إرسال رسالتك.",
        // API Key Panel
        api_panel_description: 'لتجربة التطبيق، ستحتاج إلى مفتاح API من Google. يمكنك الحصول على واحد مجانًا من AI Studio.',
        api_panel_get_key_link: 'الحصول على مفتاح من Google AI Studio',
        api_panel_input_label: 'مفتاح API الخاص بك',
        api_panel_input_placeholder: 'أدخل مفتاح API هنا...',
        api_panel_save_button: 'حفظ واستخدام المفتاح',
        // Instructional Guide
        important_security_notice: 'تنبيه هام للأمان',
        security_notice_desc: 'هذا التطبيق هو أداة تعليمية فقط. لأمانك، لا تشارك أبدًا كلمة مرور حساب Google الخاص بك مع أي موقع أو تطبيق غير رسمي. بيانات الاعتماد تُنشأ دائمًا من خلال منصة Google Cloud الرسمية.',
        try_smart_guide_generator: 'جرّب منشئ الأدلة الذكى',
        smart_guide_generator_desc: 'اختر أي خدمة من القوائم المنسدلة واحصل على دليل مخصص أو استخدم وكيل gcloud لإنشاء الأوامر.',
        choose_service_for_guide: 'اختر خدمة لإنشاء الدليل',
        google_cloud: 'Google Cloud',
        google_workspace: 'Google Workspace',
        android_studio: 'Android Studio',
        ai_studio: 'AI Studio',
        step_by_step_guide_title: 'الدليل الإرشادي خطوة بخطوة',
        // Steps
        step1_title: "اذهب إلى Google Cloud Console",
        step1_desc: "الخطوة الأولى هي زيارة منصة Google Cloud. هذه هي البوابة الرسمية للمطورين لإدارة خدمات Google. ستحتاج إلى تسجيل الدخول بحساب Google الخاص بك.",
        step2_title: "أنشئ مشروعًا جديدًا",
        step2_desc: "داخل Cloud Console، قم بإنشاء مشروع جديد. المشاريع هي وسيلة لتنظيم جميع موارد Google Cloud الخاصة بك، بما في ذلك واجهات برمجة التطبيقات وبيانات الاعتماد.",
        step3_title: "تفعيل واجهات برمجة التطبيقات والخدمات",
        step3_desc: "انتقل إلى قسم 'APIs & Services' > 'Library'. ابحث عن الواجهة البرمجية التي تريد استخدامها (مثل Gemini API أو Maps API) وقم بتفعيلها لمشروعك.",
        step4_title: "إنشاء بيانات الاعتماد (Credentials)",
        step4_desc: "الآن، اذهب إلى 'APIs & Services' > 'Credentials'. هنا يمكنك إنشاء بيانات الاعتماد التي يحتاجها تطبيقك.",
        step4_sub1_title: "للحصول على مفتاح API (API Key)",
        step4_sub1_desc: "اختر 'Create Credentials' ثم 'API key'. هذا المفتاح مناسب للوصول إلى واجهات برمجة التطبيقات العامة التي لا تتطلب الوصول إلى بيانات المستخدم.",
        step4_sub2_title: "للحصول على معرف العميل (OAuth 2.0 Client ID)",
        step4_sub2_desc: "اختر 'Create Credentials' ثم 'OAuth client ID'. يستخدم هذا للسماح لتطبيقك بالوصول إلى بيانات المستخدمين نيابة عنهم بعد الحصول على موافقتهم. ستحتاج إلى تكوين 'OAuth consent screen' أولاً.",
        step5_title: "تأمين بيانات الاعتماد الخاصة بك",
        step5_desc: "الأمان هو الأهم. لا تشارك مفاتيحك الخاصة أبدًا. قم بتقييد مفاتيح API الخاصة بك بحيث لا تعمل إلا على نطاقات الويب أو عناوين IP المحددة لمنع الاستخدام غير المصرح به.",
        // Smart Guide Generator
        smart_guide_generator: 'منشئ الأدلة الذكى',
        select_service_to_start: 'اختر خدمة من القائمة على اليمين لبدء إنشاء دليل احترافي ومفصل.',
        // Service Names
        gcloud_command_generator_title: 'منشئ أوامر gcloud (وكيل)',
        compute_engine: 'Compute Engine',
        cloud_storage: 'Cloud Storage',
        cloud_functions: 'Cloud Functions',
        cloud_run: 'Cloud Run',
        kubernetes_engine: 'Kubernetes Engine',
        cloud_sql: 'Cloud SQL',
        firestore: 'Firestore',
        bigquery: 'BigQuery',
        vertex_ai: 'Vertex AI',
        pub_sub: 'Pub/Sub',
        gmail_api: 'Gmail API',
        drive_api: 'Google Drive API',
        calendar_api: 'Google Calendar API',
        sheets_api: 'Google Sheets API',
        jetpack_compose: 'Jetpack Compose',
        kotlin_coroutines: 'Kotlin Coroutines',
        room_database: 'Room Database',
        firebase_integration: 'Firebase Integration',
        prompt_engineering: 'هندسة الأوامر',
        model_tuning: 'ضبط النماذج',
        function_calling: 'استدعاء الدوال',
        other_google_products: 'منتجات أخرى',
        firebase: 'Firebase',
        flutter: 'Flutter',
        tensorflow: 'TensorFlow',
        analytics_api: 'Google Analytics API',
        ads_api: 'Google Ads API',
        photos_api: 'Google Photos API',
        youtube_data_api: 'YouTube Data API',
        tasks_api: 'Google Tasks API',
        maps_platform_api: 'Google Maps Platform',
        translation_api: 'Translation API',
        vision_api: 'واجهة برمجة تطبيقات الرؤية',
        natural_language_api: 'واجهة برمجة تطبيقات اللغة الطبيعية',
        text_to_speech_api: 'واجهة برمجة تطبيقات تحويل النص إلى كلام',
        speech_to_text_api: 'واجهة برمجة تطبيقات تحويل الكلام إلى نص',
        video_intelligence_api: 'واجهة برمجة تطبيقات ذكاء الفيديو',
        dialogflow_cx: 'Dialogflow CX',
        // AI Assistant
        ai_assistant_title: 'مساعد ذكي',
        ai_assistant_description: 'هل لديك سؤال حول الخطوات أو تريد تحليل صورة؟ اسأل المساعد المدعوم بـ Gemini.',
        attach_image: 'إرفاق صورة',
        ai_assistant_placeholder_image: 'صف الصورة أو اسأل عنها...',
        ai_assistant_placeholder_text: 'اسأل عن أي خطوة، مثلاً: ما هو OAuth؟',
        ai_assistant_input_aria_label: 'اطرح سؤالاً على المساعد الذكي',
        send_button_aria_label: 'إرسال السؤال',
        image_attached: 'تم إرفاق صورة',
        // AI Simulator
        ai_simulator_title: 'محاكي الوكيل الذكي',
        ai_simulator_description: 'شاهد كيف يمكن لوكيل الذكاء الاصطناعي أتمتة عملية الحصول على بيانات الاعتماد في بيئة محاكاة آمنة.',
        educational_simulation_only: 'هذه محاكاة تعليمية فقط',
        educational_simulation_desc: 'لا يتم إجراء أي اتصال حقيقي بحساب Google الخاص بك. جميع الخطوات وبيانات الاعتماد التي تظهر هي وهمية لأغراض العرض التوضيحي والتعليمي.',
        status_running: 'قيد التشغيل',
        status_complete: 'مكتمل',
        status_idle: 'خامل',
        agent_waiting_for_instructions: 'الوكيل ينتظر التعليمات...',
        percentage_complete: 'اكتمل بنسبة {{progress}}%',
        api_key_simulated: 'مفتاح API (محاكاة)',
        client_id_simulated: 'معرف العميل (محاكاة)',
        client_secret_simulated: 'سر العميل (محاكاة)',
        simulated: 'محاكاة',
        restart_simulation: 'إعادة تشغيل المحاكاة',
        simulation_in_progress: 'جاري المحاكاة...',
        sim_step_1: "تهيئة الوكيل الذكي...",
        sim_step_2: "إنشاء اتصال آمن بـ Google Cloud APIs...",
        sim_step_3: "مصادقة جلسة العمل...",
        sim_step_4: "البحث عن مشروع نشط أو إنشاء مشروع جديد...",
        sim_step_5: "تفعيل واجهة برمجة تطبيقات 'Gemini API'...",
        sim_step_6: "تفعيل واجهة برمجة تطبيقات 'Identity and Access Management (IAM) API'...",
        sim_step_7: "إعداد شاشة موافقة OAuth...",
        sim_step_8: "إنشاء بيانات اعتماد: مفتاح API...",
        sim_step_9: "تطبيق قيود الأمان على مفتاح API...",
        sim_step_10: "إنشاء بيانات اعتماد: معرّف عميل OAuth 2.0...",
        sim_step_11: "تكوين عناوين URI لإعادة التوجيه...",
        sim_step_12: "جمع بيانات الاعتماد وتأمينها...",
        sim_step_13: "إنهاء الجلسة وحذف البيانات المؤقتة...",
        sim_step_14: "اكتملت العملية بنجاح!",
        // AI Script Generator
        gcloud_command_generator_desc: 'دع وكيل الذكاء الاصطناعي ينشئ شيفرة أتمتة بناءً على طلبك أو صورة ترفقها (مثل مخطط معماري).',
        important_requirements: 'متطلبات وإرشادات هامة',
        requirement_1_part_1: 'يجب أن يكون لديك',
        requirement_1_part_2: 'Google Cloud CLI (gcloud)',
        requirement_1_part_3: 'مثبتًا ومصادقًا عليه.',
        requirement_2: 'قم بمراجعة الشيفرة المولّدة جيدًا قبل تشغيلها في الطرفية (Terminal) الخاصة بك.',
        requirement_3: 'أنت المسؤول عن أي تكاليف قد تنشأ عن استخدام موارد Google Cloud.',
        attach_image_optional: 'إرفاق صورة (اختياري)',
        attach_image_desc: 'أرفق مخططًا أو لقطة شاشة لإنشاء نص برمجي مخصص.',
        generate_automation_script: 'أنشئ شيفرة الأتمتة',
        ai_agent_writing_script: 'الوكيل الذكي يقوم بكتابة الشيفرة...',
        // Service Guide
        guide_for_service: 'دليل: {{serviceName}}',
        service_guide_desc: 'احصل على دليل مخصص من الذكاء الاصطناعي حول إمكانيات الخدمة، أو أرفق صورة (كمخطط معماري) لإثراء المحتوى.',
        attach_image_desc_guide: 'أرفق مخططًا أو لقطة شاشة لإثراء الدليل.',
        generating_guide_for_service: 'جاري إعداد دليل {{serviceName}}...',
        generate_smart_guide: 'أنشئ الدليل الذكي',
        ai_preparing_guide: 'الذكاء الاصطناعي يقوم بإعداد دليلك...',
        click_generate_to_start: 'انقر على زر "أنشئ الدليل الذكي" لبدء العملية.',
        // Errors & System Prompts
        error_enter_api_key_to_start: 'مرحباً! يرجى إدخال مفتاح Google API صالح للبدء. يمكنك الحصول عليه من aistudio.google.com.',
        ai_assistant_system_prompt: "أنت مساعد ذكاء اصطناعي خبير في Google Cloud Platform و Google Workspace و Android Development وإدارة بيانات اعتماد API بشكل عام. هدفك هو الإجابة على أسئلة المستخدم حول عملية إنشاء وتأمين مفاتيح API ومعرفات عميل OAuth، وتحليل أي صور يقدمها المستخدم. يجب ألا تطلب أبدًا أو تقترح على المستخدم مشاركة أي معلومات شخصية أو كلمات مرور أو مفاتيح سرية. يجب أن تكون نبرتك مفيدة وواضحة وتركز على أفضل ممارسات الأمان. يجب أن تكون إجاباتك باللغة {{lang}}.",
        ai_assistant_welcome: 'مرحباً! أنا هنا لمساعدتك. اسألني أي شيء عن خطوات إنشاء بيانات اعتماد Google API أو أرفق صورة لأحللها لك.',
        error_init_assistant: 'عفوًا، لم أتمكن من تهيئة المساعد الذكي. يرجى التأكد من صحة مفتاح API الخاص بك.',
        error_send_message: 'عفوًا، حدث خطأ ما. يرجى التأكد من صلاحية مفتاح API والمحاولة مرة أخرى.',
        error_enter_api_key: 'الرجاء إدخال مفتاح API صالح أولاً من خلال "إدارة مفتاح API" في أسفل الصفحة.',
        ai_script_generator_prompt: `أنت وكيل ذكاء اصطناعي خبير متخصص في أتمتة Google Cloud. مهمتك هي إنشاء نص برمجي bash كامل وقابل للتنفيذ يقوم بأتمتة إنشاء بيانات اعتماد Google Cloud. يجب أن يقوم البرنامج النصي بتنفيذ الإجراءات التالية باستخدام أوامر gcloud CLI:
1.  **إعداد معرف المشروع**: حدد متغيرًا لمعرف مشروع جديد. استخدم 'ai-agent-project-[RANDOM_6_CHARS]'.
2.  **إنشاء المشروع**: قم بإنشاء مشروع Google Cloud جديد باستخدام معرف المشروع المحدد.
3.  **ربط المشروع**: قم بتعيين تكوين gcloud لاستخدام المشروع الذي تم إنشاؤه حديثًا.
4.  **ربط الفوترة**: أرشد المستخدم حول كيفية ربط حساب الفوترة يدويًا ، حيث لا يمكن أتمتة ذلك عبر برنامج نصي بسيط. قم بتوفير أمر gcloud الصحيح وعنوان URL.
5.  **تمكين واجهة برمجة التطبيقات**: قم بتمكين واجهات برمجة التطبيقات 'iam.googleapis.com' و 'vision.googleapis.com'. أضف تعليقات تشرح سبب الحاجة إليها.
6.  **إنشاء مفتاح API**: قم بإنشاء مفتاح API جديد غير مقيد. قم بتخزين قيمته في متغير.
7.  **إعداد شاشة موافقة OAuth**: اشرح أن هذا شرط أساسي لمعرف عميل OAuth وعادة ما يتطلب إعدادًا يدويًا. قم بتوفير أمر نائب.
8.  **إنشاء معرف عميل OAuth**: قم بإنشاء معرف عميل OAuth 2.0 لتطبيق 'ويب'.
9.  **الإخراج**: في نهاية البرنامج النصي ، قم بطباعة جميع المعلومات التي تم إنشاؤها بوضوح: معرف المشروع ومفتاح API ورسالة حول مكان العثور على معرف عميل OAuth وسره في Cloud Console.
إذا تم توفير صورة ، فقم بتحليل محتواها (على سبيل المثال ، رسم تخطيطي لبنية السحابة ، لقطة شاشة لإعداد ما) وقم بإنشاء برنامج نصي bash يعكس الإجراءات أو الموارد الموضحة في الصورة ، بالإضافة إلى عملية إنشاء بيانات الاعتماد القياسية. على سبيل المثال ، إذا كانت الصورة تعرض مجموعة GKE وقاعدة بيانات Cloud SQL ، فيجب أن يتضمن البرنامج النصي أيضًا أوامر لإنشاء هذه الموارد.
القواعد:
- يجب أن يكون الإخراج بأكمله برنامجًا نصيًا bash واحدًا مضمنًا في كتلة كود markdown ('''bash ... ''').
- لا تقم بتضمين أي نص أو شرح خارج كتلة كود markdown.
- أضف تعليقات باللغة {{lang}} داخل البرنامج النصي لشرح كل خطوة رئيسية.
- يجب أن يكون البرنامج النصي قويًا ويتضمن عمليات فحص عند الاقتضاء (على سبيل المثال ، التحقق مما إذا تم إنشاء مشروع).`,
        error_generating_script: 'عذرًا، حدث خطأ أثناء إنشاء الشيفرة. يرجى التأكد من صلاحية مفتاح API والمحاولة مرة أخرى.',
        service_guide_prompt: `{{promptContext}}. هدفك هو تقديم دليل احترافي شامل ومفصل للغاية للمطورين باللغة {{lang}}.
لقد اختار المستخدم "{{serviceName}}". إذا تم توفير صورة ، فيجب عليك تحليلها ودمج رؤى من الصورة في دليلك (على سبيل المثال ، إذا كان رسمًا تخطيطيًا معماريًا ، فاشرح كيف يتناسب {{serviceName}} معه).
أنشئ دليلاً بالهيكل التالي:
### 1. وصف شامل ومفصل
نظرة عامة مفصلة وشاملة للغاية لماهية {{serviceName}}. تجاوز الأساسيات وقم بتغطية بنيتها الأساسية وميزاتها المتقدمة ومفاهيمها الرئيسية.
### 2. حالات استخدام مفصلة
اذكر ما لا يقل عن 5 حالات استخدام شاملة. لكل حالة استخدام ، قم بتوفير عنوان وفقرة مفصلة تشرح حالة الاستخدام وفوائدها.
### 3. مثال برمجي متقدم
قم بتوفير {{exampleContext}}. يجب أن يكون الكود معلقًا عليه جيدًا باللغة {{lang}} لشرح كل خطوة من خطوات المنطق. قم بتضمين مقتطف الشفرة بأكمله في كتلة markdown واحدة ، مع تحديد اللغة.
### 4. أفضل الممارسات والأمان
قدم قسمًا يحتوي على نصائح مهمة حول {{securityContext}} لـ {{serviceName}}.
مهم: يجب أن تكون الاستجابة بأكملها باللغة {{lang}}. اتبع بدقة التنسيق والعناوين المطلوبة. كن مفصلاً وموسعاً قدر الإمكان. لا تقم بإضافة أي نص تمهيدي أو ختامي خارج الأقسام المحددة.`,
        error_generating_guide: 'عذرًا، حدث خطأ أثناء إنشاء الدليل. يرجى المحاولة مرة أخرى.',
        cloud_prompt_context: "أنت خبير عالمي في منصة Google Cloud وتطويرها.",
        workspace_prompt_context: "أنت خبير عالمي في واجهات برمجة تطبيقات Google Workspace وتطويرها.",
        android_prompt_context: "أنت خبير عالمي في تطوير Android مع التركيز على التطوير الأصلي الحديث باستخدام Kotlin.",
        ai_prompt_context: "أنت خبير عالمي في Google's AI Studio والتطوير باستخدام نماذج Gemini.",
        other_prompt_context: "أنت خبير عالمي في منتجات Google وواجهات برمجة التطبيقات الخاصة بها.",
        social_prompt_context: "أنت خبير عالمي في واجهات برمجة تطبيقات منصات التواصل الاجتماعي وأتمتتها.",
        communication_prompt_context: "أنت خبير عالمي في واجهات برمجة تطبيقات منصات الاتصالات (مثل WhatsApp و Telegram و Slack) وبناء الروبوتات / عمليات التكامل.",
        cloud_example_context: "مقتطف رمز عملي وغير تافه يوضح ميزة قوية للخدمة باستخدام gcloud CLI أو SDK ذي صلة مثل Node.js",
        workspace_example_context: "مقتطف رمز JavaScript عملي وغير تافه يوضح ميزة قوية لواجهة برمجة التطبيقات.",
        android_example_context: "مقتطف رمز Kotlin عملي ومعلق عليه جيدًا باستخدام ممارسات Android الحديثة (مثل Coroutines و Flow و Compose).",
        ai_example_context: "مثال عملي ، والذي يمكن أن يكون أمرًا مفصلاً أو مقتطف JavaScript باستخدام Gemini SDK أو مقتطف Python.",
        other_example_context: "مقتطف رمز عملي باستخدام SDK ذي صلة (مثل JavaScript أو Python أو Dart).",
        social_example_context: "مقتطف رمز عملي وغير تافه يستخدم SDK ذا صلة (مثل Python ، JavaScript) لتنفيذ مهمة أتمتة.",
        communication_example_context: "مقتطف رمز عملي لروبوت بسيط أو تكامل يستخدم SDK ذا صلة (مثل Python ، Node.js).",
        cloud_security_context: "الأمان (على سبيل المثال ، أدوار IAM ، مبدأ الامتياز الأقل) ، وتحسين التكلفة ، وضبط الأداء ، ومعالجة الأخطاء",
        workspace_security_context: "الأمان والكفاءة ومعالجة الأخطاء واحترام خصوصية المستخدم",
        android_security_context: "الأداء وإدارة الذاكرة وأنماط البنية الحديثة (MVVM) وأفضل الممارسات",
        ai_security_context: "أمان الأوامر وإدارة الحصص واختيار النموذج الصحيح وتفسير النتائج بفعالية",
        other_security_context: "الأمان، واستخدام واجهة برمجة التطبيقات، وتحديد المعدل، وأفضل الممارسات العامة",
        social_security_context: "أذونات التطبيق، وخصوصية بيانات المستخدم، وحدود معدل واجهة برمجة التطبيقات، والتعامل مع المصادقة بشكل آمن.",
        communication_security_context: "تأمين خطافات الويب (webhooks)، وإدارة خصوصية المستخدم، وأمان رمز API، وتجنب البريد العشوائي.",
    }
};