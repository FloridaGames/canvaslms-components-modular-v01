/**
 * Creates the Page View component where users will build their page.
 * @param {HTMLElement} container - The element to render the component into.
 */
export function createPageView(container) {
    const pageViewHTML = `
        <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div id="component-container" class="min-h-[200px] border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center">
                <!-- Dynamic components will be added here by the user -->
                <div class="text-gray-500">Page View - Add components to build your page.</div>
            </div>
            <div class="text-center mt-4">
                <button id="add-component-btn" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded-md shadow-sm">
                    Add Component
                </button>
            </div>
        </div>`;
    container.innerHTML = pageViewHTML;

    // --- Event Listeners for PageView ---
    const addComponentBtn = document.getElementById('add-component-btn');
    if (addComponentBtn) {
        addComponentBtn.addEventListener('click', () => {
            console.log('Add Component button clicked');
            // Placeholder for showing a modal to select a component type
            alert('Component selection modal will appear here.');
        });
    }
}

