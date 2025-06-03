const weekDaysWrapper = document.body.querySelector(".calendar__day-grid");
const monthLabel = document.body.querySelector(".calendar__month-label");

//Dynamically get and display the current month and current year
const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

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

monthLabel.textContent = monthNames[currentMonth] + " " + currentYear;

// Dynamically create empty days before the month starts
const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
console.log(firstDayOfMonth);

const dayOfWeek = firstDayOfMonth.getDay();

const adjustedDayOfWeek = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
console.log(adjustedDayOfWeek);

for (let empty = 0; empty <= adjustedDayOfWeek - 1; empty++) {
    const emptyDay = document.createElement("div");
    emptyDay.classList.add("calendar__day");
    emptyDay.classList.add("calendar__day--empty");

    weekDaysWrapper.appendChild(emptyDay);
}

//Create a for loop to fill out the rest of the month days
const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
daysInMonth(2020, 12);
daysInMonth(2024, 2);

const currentDaysOfMonth = daysInMonth(currentYear, currentMonth);

for (let day = 1; day <= currentDaysOfMonth; day++) {
    const filledDay = document.createElement("div");
    filledDay.classList.add("calendar__day");
    filledDay.textContent = day;

    weekDaysWrapper.appendChild(filledDay);
}
