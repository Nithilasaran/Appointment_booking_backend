
async function cancelAppointment() {
    const response = await fetch(
        "http://localhost:3000/appointments/1",
        {
            method: "DELETE"
        }
    );

    const result = await response.json();

    console.log("CANCEL APPOINTMENT:", response.status);
    console.log(JSON.stringify(result, null, 2));
}

cancelAppointment().catch(console.error);
