import API from "../services/api";
import { useState } from "react";

function BookingForm() {
  const [service, setService] = useState("");

  const submitBooking = async () => {
    await API.post("/bookings", {
      service,
      date: new Date().toDateString()
    });
    alert("Booking successful");
  };

  return (
    <div>
      <select onChange={e => setService(e.target.value)}>
        <option>Plumbing</option>
        <option>Electrician</option>
        <option>Cleaning</option>
      </select>
      <button onClick={submitBooking}>Book Service</button>
    </div>
  );
}

export default BookingForm;
