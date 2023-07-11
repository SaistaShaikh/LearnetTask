const express = require('express');
const mysql = require('mysql2');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 8000;
app.use(cors());
app.use(bodyParser.json());
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'learnet',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the MySQL database!');
});

app.post('/register', (req, res) => {
  const { name, email, password, gender, phoneNumber } = req.body;

 
  const sql = `INSERT INTO users (name, email, password,
    gender,phoneNumber) VALUES (?, ?, ?,?,?)`;
  connection.query(
    sql,
    [name, email, password, gender, phoneNumber],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error saving the user data');
      } else {
        res.status(200).send('User data saved successfully');
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
