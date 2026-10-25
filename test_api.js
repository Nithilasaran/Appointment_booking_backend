
const baseURL = "http://localhost:3000";

async function testBooking() {
    const response = await fetch(`${baseURL}/appointments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: "Nova",
            service: "General Consultation",
            date: "2026-10-26",
            time: "10:00"
        })
    });

    const result = await response.json();

    console.log("BOOK APPOINTMENT:", response.status);
    console.log(JSON.stringify(result, null, 2));
}

testBooking().catch(console.error);
