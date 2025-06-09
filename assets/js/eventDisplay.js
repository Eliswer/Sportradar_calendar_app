/**
 * @file sport-event.js
 * @description Retrieves and displays sport event data based on a selected date stored in localStorage.
 */

/**
 * Button to navigate back to the calendar.
 * @type {HTMLElement}
 */
const backButton = document.querySelector(".back-to-calendar");

// Retrieve stored sport events and selected date from localStorage
const storedData = localStorage.getItem("sportEvents");
const storedDateKey = localStorage.getItem("selectedDate");

/**
 * Wrapper element where the event information will be displayed.
 * @type {HTMLElement}
 */
const eventWrapper = document.querySelector(".calendar__wrapper");

if (storedData && storedDateKey) {
    /**
     * Parsed object containing events grouped by formatted date keys.
     * @type {Object<string, Object[]>}
     */
    const eventsByDate = JSON.parse(storedData);

    /**
     * Loop through all events that match the selected date and render their details.
     */
    eventsByDate[storedDateKey].forEach((element) => {
        console.log(element);

        /** @type {HTMLDivElement} */
        const wrapperElement = document.createElement("div");
        wrapperElement.classList.add("event__wrapper");

        /** @type {HTMLHeadingElement} */
        const title = document.createElement("h1");
        title.classList.add("event__title");
        title.textContent = element.originCompetitionName;

        /** @type {HTMLHeadingElement} */
        const subtitle = document.createElement("h2");
        subtitle.classList.add("event__subtitle");
        const homeTeam = element?.homeTeam?.officialName || "To be added";
        const awayTeam = element?.awayTeam?.officialName || "To be added";
        const opposingTeams = `${awayTeam} vs ${homeTeam}`;
        subtitle.textContent = opposingTeams;

        /** @type {HTMLParagraphElement} */
        const datePlayed = document.createElement("p");
        datePlayed.classList.add("event__par");
        const rawDate = element.dateVenue;
        const date = new Date(rawDate);
        const formattedDate = date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        const rawTime = element.timeVenueUTC;
        const time = new Date(`1970-01-01T${rawTime}`);
        const formattedTime = time.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        });
        datePlayed.textContent = formattedTime + " " + formattedDate;

        /** @type {HTMLParagraphElement} */
        const nameOfSport = document.createElement("p");
        nameOfSport.classList.add("event__par");
        nameOfSport.textContent = element.sport;

        // Append all generated elements into the DOM
        eventWrapper.append(wrapperElement);
        wrapperElement.appendChild(title);
        wrapperElement.appendChild(subtitle);
        wrapperElement.appendChild(datePlayed);
        wrapperElement.appendChild(nameOfSport);
    });
} else {
    console.log("Nothing found in local storage.");
}

function goBackToCalendar() {
    window.location.replace("index.html");
}

backButton.addEventListener("click", goBackToCalendar);
