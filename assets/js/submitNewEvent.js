/**
 * Button to navigate to the previous month.
 * @type {HTMLElement}
 */
const backButton = document.querySelector(".back-to-calendar");

/**
 * Select the form
 * @type {HTMLElement}
 */
const form = document.querySelector(".event-form");

/**
 * Redirects the user back to main page / calendar
 *
 * @function loadAddEventPage
 */
function goBackToCalendar() {
    window.location.replace("index.html");
}

backButton.addEventListener("click", goBackToCalendar);

/**
 * Gathers all the data on submit and stores them in variables
 *
 * @function addEventListener
 */
form.addEventListener("submit", function (e) {
    // Extract values
    const homeTeam = document.getElementById("homeTeam").value;
    const awayTeam = document.getElementById("awayTeam").value;
    const sport = document.getElementById("sport").value;
    const date = document.getElementById("date").value;
    const competition = document.getElementById("competition").value;
    const newTime = document.getElementById("eventTime").value;

    const formattedNewTime = newTime + ":00";

    const formattedKeyDate = date.replace(/-/g, "");

    // Save to variables or localStorage, example:
    const eventData = {
        homeTeam: { officialName: homeTeam },
        awayTeam: { officialName: awayTeam },
        dateVenue: date,
        timeVenueUTC: formattedNewTime,
        sport: sport,
        originCompetitionName: competition,
    };

    console.log("Saved Event Data");

    const stored = localStorage.getItem("sportEvents");
    const oldEvents = stored ? JSON.parse(stored) : {};

    if (oldEvents[formattedKeyDate]) {
        // Key exists, push new event to array
        oldEvents[formattedKeyDate].push(eventData);
    } else {
        // Key doesn't exist, create a new array with the event
        oldEvents[formattedKeyDate] = [eventData];
    }

    // Save updated data back to localStorage
    localStorage.setItem("sportEvents", JSON.stringify(oldEvents));
});
