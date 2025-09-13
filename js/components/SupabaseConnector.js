/**
 * Creates the Supabase Connection Status component.
 * @param {HTMLElement} container - The element to render the component into.
 */
export function createSupabaseConnector(container) {
    const supabaseConnectorHTML = `
        <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 class="text-xl font-bold text-gray-700 mb-4">Connection Status</h2>
            <div class="bg-gray-50 p-4 rounded-md mb-4">
                <p class="text-gray-800">
                    <strong>Status:</strong> <span id="connection-status" class="text-gray-500 font-semibold">Initializing...</span>
                </p>
            </div>
            <h3 class="text-lg font-bold text-gray-700 mb-2">Response</h3>
            <div id="connection-response" class="bg-gray-800 text-white font-mono text-sm p-4 rounded-md min-h-[50px]">
                Waiting for connection...
            </div>
        </div>`;
    container.innerHTML = supabaseConnectorHTML;
}

/**
 * Handles the authentication with Supabase and updates the UI.
 * @param {SupabaseClient} supabaseClient - The initialized Supabase client.
 */
export async function handleSupabaseAuth(supabaseClient) {
    const statusEl = document.getElementById('connection-status');
    const responseEl = document.getElementById('connection-response');

    if (!statusEl || !responseEl) {
        console.error("Connection status elements not found!");
        return;
    }

    statusEl.textContent = 'Connecting...';
    statusEl.className = 'text-yellow-600 font-semibold';
    responseEl.textContent = 'Attempting to authenticate with Supabase.';

    try {
        const { data: { session }, error: sessionError } = await supabaseClient.auth.getSession();
        if (sessionError) throw sessionError;

        if (session) {
            statusEl.textContent = 'Connection OK.';
            statusEl.className = 'text-green-600 font-semibold';
            responseEl.textContent = `Re-established session. User ID: ${session.user.id}`;
        } else {
            const { data, error } = await supabaseClient.auth.signInAnonymously();
            if (error) throw error;
            statusEl.textContent = 'Connection OK.';
            statusEl.className = 'text-green-600 font-semibold';
            responseEl.textContent = `Authenticated anonymously. User ID: ${data.user.id}`;
        }
    } catch (error) {
        console.error('Supabase connection error:', error);
        statusEl.textContent = 'Connection Failed.';
        statusEl.className = 'text-red-600 font-semibold';
        responseEl.textContent = error.message;
    }
}

