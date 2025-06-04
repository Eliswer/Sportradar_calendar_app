const weekDaysWrapper = document.body.querySelector(".calendar__day-grid");
const monthLabel = document.body.querySelector(".calendar__month-label");
const rightArrowButton = document.body.querySelector(
    ".calendar__nav-icon--right"
);
const leftArrowButton = document.body.querySelector(
    ".calendar__nav-icon--left"
);

//Dynamically get and display the current month and current year
const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

let calcMonth = currentMonth;
let calcYear = currentYear;

const monthNames = [
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

monthLabel.textContent = monthNames[currentMonth] + " " + calcYear;

// Dynamically create empty days before the month starts
function emptyDays() {
    const firstDayOfMonth = new Date(calcYear, calcMonth, 1);
    const dayOfWeek = firstDayOfMonth.getDay();

    const adjustedDayOfWeek = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

    for (let empty = 0; empty <= adjustedDayOfWeek - 1; empty++) {
        const emptyDay = document.createElement("div");
        emptyDay.classList.add("calendar__day");
        emptyDay.classList.add("calendar__day--empty");

        weekDaysWrapper.appendChild(emptyDay);
    }
}

emptyDays();

//Create a for loop to fill out the rest of the month days
const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

function displayMonthDays() {
    const currentDaysOfMonth = daysInMonth(calcYear, calcMonth);

    for (let day = 1; day <= currentDaysOfMonth; day++) {
        const filledDay = document.createElement("div");
        filledDay.classList.add("calendar__day");
        filledDay.textContent = day;

        weekDaysWrapper.appendChild(filledDay);
    }
}

displayMonthDays();

//Change months on the click of arrow buttons
leftArrowButton.addEventListener("click", () => {
    weekDaysWrapper.innerHTML = "";

    if (calcMonth > 0) {
        calcMonth -= 1;
    } else if (calcMonth === 0) {
        calcMonth = 11;
        calcYear -= 1;
    }

    monthLabel.textContent = monthNames[calcMonth] + " " + calcYear;
    emptyDays();
    displayMonthDays();
});
rightArrowButton.addEventListener("click", () => {
    weekDaysWrapper.innerHTML = "";

    if (calcMonth < 11) {
        calcMonth += 1;
    } else if (calcMonth === 11) {
        calcMonth = 0;
        calcYear += 1;
    }

    monthLabel.textContent = monthNames[calcMonth] + " " + calcYear;
    emptyDays();
    displayMonthDays();
});
