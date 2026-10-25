
async function rescheduleAppointment() {
    const response = await fetch(
        "http://localhost:3000/appointments/1",
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                date: "2026-10-27",
                time: "11:00"
            })
        }
    );

    const result = await response.json();

    console.log("RESCHEDULE APPOINTMENT:", response.status);
    console.log(JSON.stringify(result, null, 2));
}

rescheduleAppointment().catch(console.error);
