/**
 * A simple utility function to demonstrate modularity.
 * @param {string} name - The name to include in the greeting.
 * @returns {string} A greeting message.
 */
export function sayHello(name) {
    console.log(`Generating greeting for ${name}`);
    return `Hello, ${name}! This message comes from the 'utils.js' module.`;
}

/**
 * You can add more utility functions here.
 * For example:
 *
 * export function formatDate(date) {
 * // date formatting logic
 * }
 *
 * export const API_URL = 'https://api.example.com';
 */
