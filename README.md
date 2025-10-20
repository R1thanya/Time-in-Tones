Time in Tones

Time in Tones is a minimalistic digital clock web application that dynamically displays the current time while allowing users to switch between different color themes or “tones.” The project focuses on aesthetic simplicity, smooth transitions, and the integration of real-time functionality using JavaScript.

Overview

The project demonstrates the use of DOM manipulation, JavaScript timing functions, and dynamic styling to build an interactive and visually appealing web page. It showcases how simple front-end technologies can be combined to create a responsive and engaging user experience.

Features

Displays real-time clock updated every second.

Allows users to switch between multiple background and text color combinations.

Smooth transitions between themes for better visual flow.

Lightweight and responsive layout.

Minimalistic design focusing on readability and calm aesthetics.

Technologies Used
Technology	Purpose
HTML5	Defines the page structure.
CSS3	Styles the interface and handles smooth color transitions.
JavaScript (ES6)	Manages the real-time clock and mood-switching logic.
Project Structure
TimeInTones/
│
├── index.html      # HTML layout
├── style.css       # Styles for layout, typography, and transitions
├── script.js       # JavaScript logic for clock and theme switching
└── README.md       # Project documentation

How It Works

The webpage initializes with a default color tone and displays the current time in HH:MM:SS format.

The time is updated every second using the setInterval() function.

Each click on the “Switch Tone” button cycles through a predefined set of color schemes.

Both the background and text colors change with smooth transitions.

Example Output

Initial Display:

Time 'n Tones
14:28:36
"stillness is productive too."
[Switch Tone]


After clicking “Switch Tone”:
The background and text colors change, while the clock continues running in real time.

Setup Instructions

Download or clone the project repository:

git clone https://github.com/yourusername/TimeInTones.git


Open the project folder:

cd TimeInTones


Run the application:

Open index.html directly in your browser, or

Use a live server (for example, with VS Code).

No external dependencies or API keys are required.

Future Enhancements

Add an automatic theme switch based on the time of day.

Include motivational or aesthetic quotes that change dynamically.

Introduce animation effects on theme change.

Provide a toggle for 12-hour or 24-hour time formats.

Developer

Name: Rithanya M
Course: B.Tech in Computer Science and Engineering
Year: 2nd Year
Description: Passionate about front-end web development, UI design, and creating visually pleasing interactive applications.

License

This project is open-source and available under the MIT License.
