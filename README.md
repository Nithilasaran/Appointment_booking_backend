# Appointment Booking Backend API

## Project Overview

The Appointment Booking Backend API is a RESTful application developed using Node.js and Express.js. It allows users to book, view, reschedule, and cancel appointments through HTTP requests.

The application checks required fields and prevents two appointments from using the same date and time slot.

## Objectives

- Develop an appointment management REST API.
- Handle booking and rescheduling requests.
- Retrieve appointment records.
- Cancel existing appointments.
- Validate appointment details and handle scheduling conflicts.

## Technology Stack

- **Runtime:** Node.js
- **Backend Framework:** Express.js
- **Language:** JavaScript
- **Data Format:** JSON
- **Testing:** Node.js built-in Fetch API
- **Development Environment:** Visual Studio Code

## Features

- Book a new appointment.
- View all appointments.
- Reschedule an appointment by ID.
- Cancel an appointment by ID.
- Validate required fields.
- Detect conflicting appointment time slots.
- Return appropriate HTTP status codes.

## Project Structure

```text
appointment_booking_backend/
├── app.js
├── test_api.js
├── view_appointments.js
├── reschedule_appointment.js
├── cancel_appointment.js
├── package.json
├── package-lock.json
└── README.md
```

## Installation and Setup

### 1. Install Node.js

Download Node.js from the official website:

https://nodejs.org/

Verify the installation:

```bash
node --version
npm --version
```

### 2. Install dependencies

Open the project folder in Visual Studio Code and run:

```bash
npm install
```

### 3. Start the server

```bash
node app.js
```

Expected startup message:

```text
Appointment Booking API running at http://localhost:3000
```

### 4. Check the API

Open this URL in a browser:

http://localhost:3000/

The API returns a JSON message confirming that the server is running.

## API Endpoints

| HTTP Method | Endpoint | Purpose |
|---|---|---|
| GET | `/` | Check API status |
| POST | `/appointments` | Book an appointment |
| GET | `/appointments` | View appointments |
| PUT | `/appointments/:id` | Reschedule an appointment |
| DELETE | `/appointments/:id` | Cancel an appointment |

## Testing

Keep the server running in one terminal. Open a second terminal for the test commands.

Book an appointment:

```bash
node test_api.js
```

View appointments:

```bash
node view_appointments.js
```

Reschedule an appointment:

```bash
node reschedule_appointment.js
```

Cancel an appointment:

```bash
node cancel_appointment.js
```

The successful booking request returns HTTP `201`. The view, reschedule, and cancel operations return HTTP `200` when successful.

## Data Storage

**Current implementation:** Appointment records are stored in memory. The records are cleared when the server restarts. A database such as SQLite can be integrated for persistent storage.

## Future Enhancements

- Integrate persistent database storage.
- Add user authentication.
- Validate dates and appointment times.
- Add appointment reminders.
- Develop a frontend booking interface.

## Author

Developed as a Web Development Technologies Lab project.
