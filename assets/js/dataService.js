/**
 * @file dataService.js
 * @description Handles loading and sorting of sporting event data.
 */

export const sortedEvents = {};

/**
 * Loads sporting event data from a JSON file and organizes it by date.
 *
 * @async
 * @function loadSportData
 * @param {string} url - The URL of the JSON data file.
 * @returns {Promise<void>} Resolves when data is loaded and sorted.
 */
export async function loadSportData(url) {
    const response = await fetch(url);
    const json = await response.json();
    const events = json.data;

    events.forEach((event) => {
        const formattedDate = event.dateVenue.replace(/-/g, "");

        if (!sortedEvents[formattedDate]) {
            sortedEvents[formattedDate] = [];
        }

        sortedEvents[formattedDate].push(event);
    });

    localStorage.setItem("sportEvents", JSON.stringify(sortedEvents));
}
