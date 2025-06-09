/**
 * @file calendarRenderer.js
 * @description Renders calendar days and highlights days with events.
 */

const storedData = localStorage.getItem("sportEvents");
const sortedEvents = JSON.parse(storedData);

/**
 * All the day elements displayed in a grid
 * @type {HTMLElement}
 */
const generatedCalendarDay = document.querySelector(".calendar__day");

/**
 * Array of month names.
 * @constant {string[]}
 */
export const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

/**
 * Returns the number of days in a given month and year.
 *
 * @param {number} year - The four-digit year.
 * @param {number} month - The zero-indexed month (0 for January).
 * @returns {number} The number of days in the month.
 */
export function daysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

/**
 * Clears all child elements from a given DOM element.
 *
 * @param {HTMLElement} container - The DOM element to clear.
 */
export function clearElements(container) {
    container.innerHTML = "";
}

/**
 * Appends empty placeholder days before the first day of the month.
 *
 * @param {HTMLElement} container - The container for day elements.
 * @param {number} year - The four-digit year.
 * @param {number} month - The zero-indexed month.
 */
export function appendEmptyDays(container, year, month) {
    const firstDay = new Date(year, month, 1).getDay();
    const adjustedDay = firstDay === 0 ? 6 : firstDay - 1;

    for (let i = 0; i < adjustedDay; i++) {
        const emptyDay = document.createElement("div");
        emptyDay.classList.add("calendar__day", "calendar__day-empty");
        container.appendChild(emptyDay);
    }
}

/**
 * Generates and appends day elements for the specified month and highlights days with events.
 *
 * @param {HTMLElement} container - The container for day elements.
 * @param {number} year - The four-digit year.
 * @param {number} month - The zero-indexed month.
 * @param {Object} sortedEvents - The events data sorted by date.
 */
export function appendMonthDays(container, year, month, sortedEvents) {
    const totalDays = daysInMonth(year, month);

    for (let day = 1; day <= totalDays; day++) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("calendar__day");
        dayElement.textContent = day;

        const yearString = year.toString();
        const monthString = (month + 1).toString().padStart(2, "0");
        const dayString = day.toString().padStart(2, "0");
        const formattedDate = `${yearString}${monthString}${dayString}`;

        if (sortedEvents[formattedDate]) {
            dayElement.classList.add("sport-event-day");

            const redDotMarkerWrapper = document.createElement("div");
            redDotMarkerWrapper.classList.add("red-event-marker-wrapper");

            dayElement.appendChild(redDotMarkerWrapper);

            dayElement.addEventListener("click", () => {
                localStorage.setItem("selectedDate", formattedDate);
                window.location.replace("sport-event.html");
            });

            sortedEvents[formattedDate].forEach((element) => {
                const redDotMarker = document.createElement("div");
                redDotMarker.classList.add("red-event-marker");
                redDotMarkerWrapper.appendChild(redDotMarker);
            });
        }

        container.appendChild(dayElement);
    }
}

/**
 * Renders the calendar for a given month and year.
 *
 * @param {HTMLElement} dayGrid - The container element for the day grid.
 * @param {HTMLElement} monthLabel - The element displaying the current month and year.
 * @param {number} year - The four-digit year.
 * @param {number} month - The zero-indexed month.
 */
export async function renderCalendar(dayGrid, monthLabel, year, month) {
    const storedData = localStorage.getItem("sportEvents");
    const sortedEvents = storedData ? JSON.parse(storedData) : {};
    
    clearElements(dayGrid);
    monthLabel.textContent = `${monthNames[month]} ${year}`;
    appendEmptyDays(dayGrid, year, month);
    appendMonthDays(dayGrid, year, month, sortedEvents);
}
