# CHROME-EXTENSION-FOR-PERSONAL-PRODUCTIVITY-TRACKER

COMPANY: CODTECH IT SOLUTIONS

NAME: Farzana P A

INTERN ID: CT04DF1800

DOMAIN: React.js Web Development

DURATION: 4 weeks

MENTOR: NEELA SANTHOSH

# Task Description:

Welcome to the Chrome Extension for Personal Productivity Tracker!
This Chrome extension is designed to help users enhance their focus and self-discipline by tracking time spent on websites, setting daily productivity goals, and visualizing usage trends. It uses a React-based frontend, browser APIs like chrome.tabs and chrome.storage, and a service worker for real-time monitoring in the background.

# Features
•  Set Daily Goals:
Enter your daily productivity goal (e.g., “Study React 2 hours”) and save it.

•  Website Time Tracking:
Automatically monitors how much time you spend on each website.

•  Usage Graphs:
Visualize daily time spent across domains using clean and interactive pie charts.

•  Chrome Storage Integration:
Saves website usage data and goals using chrome.storage.local.

•  Background Monitoring:
Runs in the background using a service worker to detect tab and window changes.

•  Lightweight and Secure:
All data is stored locally within your browser — no external servers required.

•  Responsive UI:
Built with React for a smooth, clean, and responsive experience.

# Technologies Used

• React – Frontend UI

• Chrome Extensions API – Tabs, Storage, and Background service

• Recharts – Pie chart for productivity visualization

• JavaScript (ES6+) – Logic and control

• CSS3 – Styling and layout

# Installation

Backend (Chrome Extension Background Script):

No external backend required. Background service runs with manifest.json and background.js as a service worker.

Frontend Setup:

# Step 1: Clone the repository

git clone https://github.com/farzanapa25/CHROME-EXTENSION-FOR-PERSONAL-PRODUCTIVITY-TRACKER.git

# Step 2: Navigate to the project

cd CHROME-EXTENSION-FOR-PERSONAL-PRODUCTIVITY-TRACKER

# Step 3: Install dependencies

npm install

# Step 4: Build the app

npm run build

Load the Extension in Chrome:

1. Go to chrome://extensions/

2. Enable Developer Mode

3. Click Load Unpacked

4. Select the /build folder

5. Pin the extension from the puzzle icon

🚀 Deployment
This Chrome Extension is live and available to run locally via build/ folder, and optionally can be packaged into a .crx or submitted to the Chrome Web Store.

🔗 Live GitHub Page (Web version):
 https://farzanapa25.github.io/CHROME-EXTENSION-FOR-PERSONAL-PRODUCTIVITY-TRACKER/

(Note: For full extension functionality, install it in Chrome via chrome://extensions/)

📌 Usage
• Open Chrome and install the extension

• Click the extension icon → Enter your daily goal

• Browse websites like YouTube, Google, etc.

• Open the extension again to see:

  - Time spent per domain

  - Pie chart visualization

  - Saved goal display

The extension continues running in the background and updates your usage statistics in real time.
