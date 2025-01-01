const express = require('express');
const mysql = require('mysql2'); // Используем mysql2 для лучшей совместимости

const app = express();
const port = 3307;

// Настройка CORS (если нужно)
const cors = require('cors');
app.use(cors());

// Подключение к базе данных
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root', // Убедитесь, что это ваш правильный пароль для MySQL
database: 'cruise_landing',
port: 3307
});

db.connect((err) => {
  if (err) {
    console.error('Ошибка подключения к базе данных:', err.message);
    return;
  }
  console.log('Подключение к базе данных MySQL успешно!');
});

// Middleware для парсинга JSON тела
app.use(express.json());

// Маршрут для обработки бронирования
app.post('/api/booking', (req, res) => {
  const { name, email, phone, date, passengers } = req.body;

  const query = 'INSERT INTO bookings (name, email, phone, date, passengers) VALUES (?, ?, ?, ?, ?)';

  db.query(query, [name, email, phone, date, passengers], (err, result) => {
    if (err) {
      console.error('Ошибка при добавлении записи в базу данных:', err.message);
      return res.status(500).json({ status: 'error', message: 'Database error' });
    }
    res.status(200).json({ status: 'success', message: 'Booking added successfully!' });
  });
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
