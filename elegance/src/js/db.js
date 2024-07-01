import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'elegance'
});

connection.connect((err) => {
  if (err) {
    console.error('Ошибка подключения к БД:', err);
    return;
  }
  
  console.log('Успешное подключение к БД!');
});

export default connection;
