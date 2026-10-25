
const express = require("express");

const app = express();
const PORT = 3000;

// Middleware to read JSON request data
app.use(express.json());

// Temporary storage for appointments
let appointments = [];
let nextId = 1;

// Home route
app.get("/", (req, res) => {
    res.json({
        message: "Appointment Booking API is running",
        endpoints: [
            "POST /appointments",
            "GET /appointments",
            "PUT /appointments/:id",
            "DELETE /appointments/:id"
        ]
    });
});

// Book an appointment
app.post("/appointments", (req, res) => {
    const { name, service, date, time } = req.body;

    if (!name || !service || !date || !time) {
        return res.status(400).json({
            error: "Name, service, date, and time are required"
        });
    }

    const duplicate = appointments.some(
        (appointment) =>
            appointment.date === date &&
            appointment.time === time
    );

    if (duplicate) {
        return res.status(409).json({
            error: "This time slot is already booked"
        });
    }

    const appointment = {
        id: nextId++,
        name,
        service,
        date,
        time
    };

    appointments.push(appointment);

    res.status(201).json({
        message: "Appointment booked successfully",
        appointment
    });
});

// View all appointments
app.get("/appointments", (req, res) => {
    res.json({ appointments });
});

// Reschedule an appointment
app.put("/appointments/:id", (req, res) => {
    const id = Number(req.params.id);

    const appointment = appointments.find(
        (item) => item.id === id
    );

    if (!appointment) {
        return res.status(404).json({
            error: "Appointment not found"
        });
    }

    const { date, time } = req.body;

    if (!date || !time) {
        return res.status(400).json({
            error: "New date and time are required"
        });
    }

    const duplicate = appointments.some(
        (item) =>
            item.id !== id &&
            item.date === date &&
            item.time === time
    );

    if (duplicate) {
        return res.status(409).json({
            error: "This time slot is already booked"
        });
    }

    appointment.date = date;
    appointment.time = time;

    res.json({
        message: "Appointment rescheduled successfully",
        appointment
    });
});

// Cancel an appointment
app.delete("/appointments/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = appointments.findIndex(
        (item) => item.id === id
    );

    if (index === -1) {
        return res.status(404).json({
            error: "Appointment not found"
        });
    }

    appointments.splice(index, 1);

    res.json({
        message: "Appointment cancelled successfully",
        id
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(
        `Appointment Booking API running at http://localhost:${PORT}`
    );
});
