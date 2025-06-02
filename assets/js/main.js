const weekDaysWrapper = document.body.querySelector(".calendar__daygrid");

// Dynamically creates a day element and appends it to the calendar
for (let day = 1; day <= 31; day++) {
    const calendarDay = document.createElement("div");
    calendarDay.className = "calendar__day";
    calendarDay.textContent = day;

    weekDaysWrapper.appendChild(calendarDay);
}
