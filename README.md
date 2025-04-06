# AI-Powered Personalized Treatment Recommender

This project is a web application that allows patients to log in, enter their EHR (Electronic Health Record) data, and receive personalized treatment recommendations using a Flask backend. The application also provides a dashboard for visualizing patient data and a reports section to download detailed summaries.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Prerequisites](#prerequisites)
- [Installation & Running Locally](#installation--running-locally)
- [Usage Flow](#usage-flow)
- [Technical Details](#technical-details)
- [Future Enhancements](#future-enhancements)

## Project Overview

Patients can log into the system via `login.html`, which then redirects them to `index.html` upon successful authentication. The main page (`index.html`) has several key sections:

- **AI\_Treatment**: Allows patients to input EHR data (e.g., blood pressure, glucose, BMI) and get recommendations from the Flask backend.
- **Dashboard**: Displays visual summaries of the patient's EHR values and key metrics.
- **Reports**: Offers downloadable reports summarizing the patient's health data and recommendations.

The Flask application (`app.py`) handles incoming requests from the frontend, processes EHR data, and integrates with an open-source API key (AI model) to generate treatment recommendations.

## Features

- **Secure Login Flow**

  - `login.html` for user authentication (demo-level; actual security measures recommended in production).

- **AI-Driven Treatment Recommendations**

  - Patients input their health data; the backend (Flask) uses a fine-tuned ML/AI model to suggest treatments.

- **Interactive Dashboard**

  - Charts and stats for average glucose levels, total reports, etc.

- **Reports Section**

  - Downloadable summaries in PDF or other formats (depending on implementation).

## Folder Structure

```
.
├── src/                # (Optional) Contains your JavaScript logic or ML scripts
├── style/              # CSS files for styling the frontend
├── app.py              # Flask backend application
├── index.html          # Main page after login (Dashboard + Navigation)
├── login.html          # Login page
└── requirements.txt    # Python dependencies (if applicable)
```

> **Note:** Depending on your deployment, you may also have additional files like `Procfile` (for Render or Heroku), or `static/` and `templates/` folders if you use Flask templating.

## Prerequisites

- Python 3.8+
- Pip (Python package manager)
- Virtualenv (recommended for clean dependencies)
- Internet connection if you’re calling an external API

## Installation & Running Locally

1. **Clone the Repository**

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

2. **Create & Activate a Virtual Environment (Optional but recommended)**

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. **Install Dependencies**

```bash
pip install -r requirements.txt
```

4. **Run Flask App**

```bash
python app.py
```

The server should start on `http://127.0.0.1:5000/`.

5. **Serve Frontend Pages**

You can open `login.html` directly in your browser, or serve it via a simple HTTP server:

```bash
python -m http.server 5500
```

Then visit `http://127.0.0.1:5500/login.html` in your browser.

## Usage Flow

- \*\*Open \*\*\`\`: Enter demo credentials (if any). On success, the user is redirected to `index.html`.

- **Navigate the Dashboard**:

  - **AI\_Treatment**: Enter EHR data → Send request to `app.py` → Receive recommended treatments.
  - **Dashboard**: View key metrics (avg glucose, total reports, etc.).
  - **Reports**: Generate and download your health data summary.

- **Check the Flask Console**: When you click “Submit” or “Predict Treatment,” you’ll see logs in your terminal indicating requests to the backend.

## Technical Details

- **Backend**: Flask application (`app.py`) that:

  - Receives EHR data from frontend via `POST` requests.
  - Calls an open-source AI model (or any ML library) for treatment suggestions.
  - Returns a JSON response with recommended treatment.

- **Frontend**:

  - HTML/CSS for structure and styling (`index.html`, `login.html`, `style/`).
  - JavaScript for API calls (within `src/` or inline in HTML).
  - Uses Fetch API to communicate with Flask.

- **Data Flow**:

  - User enters EHR data → JS sends POST to `/predict` in `app.py` → Flask processes data, queries AI model, returns recommendation → Frontend displays the recommended treatment.

## Future Enhancements

- Enhanced Authentication: Use JWT tokens or OAuth for secure login.
- Database Integration: Persist patient records in a database (PostgreSQL, MongoDB, etc.).
- Advanced Analytics: Additional ML models for multi-disease analysis.
- Real-Time Updates: WebSockets or push notifications for immediate alerts.



