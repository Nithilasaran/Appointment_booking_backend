
async function viewAppointments() {
    const response = await fetch("http://localhost:3000/appointments");
    const result = await response.json();

    console.log("VIEW APPOINTMENTS:", response.status);
    console.log(JSON.stringify(result, null, 2));
}

viewAppointments().catch(console.error);
