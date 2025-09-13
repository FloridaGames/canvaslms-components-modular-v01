// Import functions or variables from other modules
import { sayHello } from './utils.js';

/**
 * Main application logic goes here.
 * This function is called when the script is loaded.
 */
function main() {
    console.log("App started!");

    // Get the main app element
    const appElement = document.getElementById('app');
    const outputElement = document.getElementById('output');

    if (appElement && outputElement) {
        // Use the imported function
        const greeting = sayHello("Developer");
        outputElement.textContent = greeting;
        console.log(greeting);
    } else {
        console.error("Required elements not found in the DOM.");
    }
}

// Run the main function when the document is ready
// Since we use `defer` in the script tag, the DOM will be ready when this executes.
main();
