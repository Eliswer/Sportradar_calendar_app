# Sportradar Calendar App

A custom-built calendar application that displays sporting events in an interactive calendar interface. Built with HTML, CSS, and vanilla JavaScript, this project demonstrates clean architecture and responsive design principles.

## Features

- Interactive calendar interface with month navigation
- Display of sporting events with visual indicators
- Responsive design that works on all device sizes
- Local storage for event data persistence
- Detailed event view with comprehensive event information

## Prerequisites

Before running this project, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Eliswer/Sportradar-calendar.git
```

2. Navigate to the project directory:
```bash
cd Sportradar-calendar
```

3. Install dependencies:
```bash
npm install
```

## Running the Application

To start the development server:

```bash
npm start
```

This will start the application on `http://localhost:3000`. The server will automatically reload when you make changes to the files.

## Project Structure

```
Sportradar-calendar/
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   └── sport-event.css
│   ├── js/
│   │   ├── calendarRenderer.js
│   │   ├── dataService.js
│   │   ├── eventDisplay.js
│   │   ├── main.js
│   │   └── submitNewEvent.js
│   └── img/
├── data/
│   └── sportData.json
├── index.html
├── sport-event.html
├── add-new-event.html
├── package.json
└── README.md
```

## Usage

1. The main calendar view shows all sporting events for the current month
2. Days with events are marked with red indicators
3. Click on a day with events to view detailed information
4. Use the navigation arrows to move between months
5. Click "Add new event" to create a new sporting event

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- Local Storage API
- npm for package management
- live-server for development

## Development

The project uses `live-server` for development, which provides:
- Automatic page reloading
- Live reload of CSS changes
- Cross-browser testing support

## License

This project is licensed under the ISC License.

## Author

Eliswer - [GitHub Profile](https://github.com/Eliswer)
