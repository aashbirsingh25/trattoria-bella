import { useState } from "react";
import Reveal from "./Reveal";

// Reserve: a table reservation form (name, guests, date, time).
// useState remembers the inputs; on submit we show a confirmation.
function Reserve() {
  const [form, setForm] = useState({ name: "", guests: "", date: "", time: "" });
  const [done, setDone] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setDone(true); };

  return (
    <section id="reserve" className="reserve">
      <div className="container">
        <Reveal>
          <span className="eyebrow" style={{ textAlign: "center", display: "block" }}>Reservations</span>
          <h2 className="section-title">Reserve Your <em>Table</em></h2>
          <p className="section-subtitle">
            Join us for an unforgettable evening. We'll confirm your booking by phone.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="reserve-card">
            {done ? (
              <div className="confirmation">
                <h3>Grazie, {form.name}!</h3>
                <p>
                  Your table for <strong>{form.guests}</strong> on{" "}
                  <strong>{form.date}</strong> at <strong>{form.time}</strong> is
                  requested. We'll call shortly to confirm. A presto!
                </p>
                <button className="btn" onClick={() => { setDone(false); setForm({ name: "", guests: "", date: "", time: "" }); }}>
                  New Reservation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="reserve-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                  </div>
                  <div className="form-group">
                    <label>Guests</label>
                    <select name="guests" value={form.guests} onChange={handleChange} required>
                      <option value="">Select</option>
                      <option>2 people</option>
                      <option>3 people</option>
                      <option>4 people</option>
                      <option>5 people</option>
                      <option>6+ people</option>
                    </select>
                  </div>
                </div>
                <div className="reserve-row">
                  <div className="form-group">
                    <label>Date</label>
                    <input type="date" name="date" value={form.date} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Time</label>
                    <input type="time" name="time" value={form.time} onChange={handleChange} required />
                  </div>
                </div>
                <button type="submit" className="btn" style={{ width: "100%" }}>Request Reservation</button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Reserve;
