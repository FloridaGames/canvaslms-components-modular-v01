/**
 * Creates the Canvas Upload Settings component.
 * @param {HTMLElement} container - The element to render the component into.
 */
export function createCanvasSettings(container) {
    const canvasSettingsHTML = `
        <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 class="text-xl font-bold text-gray-700 mb-4">Canvas Upload Settings</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label for="course-id" class="block text-sm font-medium text-gray-600">Course ID</label>
                    <input type="text" id="course-id" placeholder="e.g., 21261" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                </div>
                <div>
                    <label for="page-name" class="block text-sm font-medium text-gray-600">Page Name</label>
                    <input type="text" id="page-name" placeholder="e.g., Making Decisions" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                </div>
            </div>
            <div class="flex justify-end">
                <button id="upload-canvas-btn" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition duration-150">
                    Upload to Canvas
                </button>
            </div>
        </div>`;
    container.innerHTML = canvasSettingsHTML;

    // --- Event Listeners for CanvasSettings ---
    const uploadBtn = document.getElementById('upload-canvas-btn');
    if (uploadBtn) {
        uploadBtn.addEventListener('click', () => {
            const courseId = document.getElementById('course-id').value;
            const pageName = document.getElementById('page-name').value;
            console.log(`Uploading to Canvas: Course ID=${courseId}, Page Name=${pageName}`);
            alert('Upload functionality will be implemented here.');
        });
    }
}

