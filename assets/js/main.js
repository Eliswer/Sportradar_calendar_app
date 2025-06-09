/**
 * @file main.js
 * @description Initializes calendar and handles navigation events.
 */

import { loadSportData } from "./dataService.js";
import { renderCalendar } from "./calendarRenderer.js";

/**
 * Reference to the element that contains all day cells.
 * @type {HTMLElement}
 */
const dayGrid = document.querySelector(".calendar__day-grid");

/**
 * Element displaying the current month and year.
 * @type {HTMLElement}
 */
const monthLabel = document.querySelector(".calendar__month-label");

/**
 * Button to navigate to the previous month.
 * @type {HTMLElement}
 */
const prevButton = document.querySelector(".calendar__nav-icon--left");

/**
 * Button to navigate to the next month.
 * @type {HTMLElement}
 */
const nextButton = document.querySelector(".calendar__nav-icon--right");

/**
 * Button to add a new sport event.
 * @type {HTMLElement}
 */
const addNewEvent = document.querySelector(".add-new-event");

/**
 * Stores the zero-indexed month (0 for January).
 * @type {number}
 */
let currentMonth = new Date().getMonth();

/**
 * Stores the four-digit year.
 * @type {number}
 */
let currentYear = new Date().getFullYear();

/**
 * Initializes the calendar by loading data and rendering the current month.
 *
 * @async
 * @function initializeCalendar
 */
async function initializeCalendar() {
    await loadSportData("./data/sportData.json");
    renderCalendar(dayGrid, monthLabel, currentYear, currentMonth);
}

/**
 * Updates the calendar to show the previous month.
 *
 * @function showPreviousMonth
 */
async function showPreviousMonth() {
    if (currentMonth > 0) {
        currentMonth -= 1;
    } else {
        currentMonth = 11;
        currentYear -= 1;
    }
    await renderCalendar(dayGrid, monthLabel, currentYear, currentMonth);
}

/**
 * Updates the calendar to show the next month.
 *
 * @function showNextMonth
 */
async function showNextMonth() {
    if (currentMonth < 11) {
        currentMonth += 1;
    } else {
        currentMonth = 0;
        currentYear += 1;
    }
    await renderCalendar(dayGrid, monthLabel, currentYear, currentMonth);
}

prevButton.addEventListener("click", showPreviousMonth);
nextButton.addEventListener("click", showNextMonth);

initializeCalendar();

/**
 * Loads an HTML file that allows users to add a new sport event
 *
 * @function loadAddEventPage
 */
function loadAddEventPage() {
    window.location.replace("add-new-event.html");
}

addNewEvent.addEventListener("click", loadAddEventPage);
