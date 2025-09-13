import { createPageControls } from './components/PageControls.js';
import { createPageView } from './components/PageView.js';
import { createCanvasSettings } from './components/CanvasSettings.js';
import { createSupabaseConnector, handleSupabaseAuth } from './components/SupabaseConnector.js';

document.addEventListener('DOMContentLoaded', () => {
    // --- Supabase Client Initialization ---
    const SUPABASE_URL = 'https://ttzakubulphvibneblpm.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0emFrdWJ1bHBodmlibmVibHBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExMDYwMTYsImV4cCI6MjA2NjY4MjAxNn0.SXB9SUHUEOrpOsnZSsfsnCxqkc4wUbucpCSGlKghQjM';
    const { createClient } = supabase;
    const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    // --- Component Containers ---
    const controlsContainer = document.getElementById('editor-controls-container');
    const pageViewContainer = document.getElementById('page-view-container');
    const canvasSettingsContainer = document.getElementById('canvas-settings-container');
    const supabaseContainer = document.getElementById('supabase-connector-container');

    // --- Render Components ---
    if (controlsContainer) {
        createPageControls(controlsContainer);
    }
    if (pageViewContainer) {
        createPageView(pageViewContainer);
    }
    if (canvasSettingsContainer) {
        createCanvasSettings(canvasSettingsContainer);
    }
    if (supabaseContainer) {
        createSupabaseConnector(supabaseContainer);
        // After rendering the component, attempt to authenticate
        handleSupabaseAuth(supabaseClient);
    }

    console.log('CanvasLMS Component Tool Initialized');
});

