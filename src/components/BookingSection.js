import React, { useState } from 'react';
import '../styles/BookingSection.css';

const BookingSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      name,
      email,
      phone,
      date,
      passengers: Number(passengers), // Преобразуем строку в число, если нужно
    };

    try {
      const response = await fetch('http://localhost:3307/api/booking', { // URL Node.js сервера
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      const result = await response.json();

      if (response.ok) {  // Проверяем, если статус ответа 2xx (успешно)
        setMessage('Your booking has been successfully submitted!');
      } else {
        setMessage(`Error: ${result.message || 'Unknown error'}`);
      }
    } catch (error) {
      setMessage(`Network error: ${error.message}`);
    }
  };

  return (
    <div className="booking">
      <h2>Book Your Cruise</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Passengers</label>
          <input
            type="number"
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            min="1"
            required
            placeholder="Number of passengers"
          />
        </div>
        <button type="submit">Submit Booking</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default BookingSection;
