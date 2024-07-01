<?php
header('Access-Control-Allow-Origin: http://localhost:5173');

// Подключение к базе данных
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "elegance";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Получение данных из формы
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Подготовленный запрос (изменена структура столбцов)
$stmt = $conn->prepare("INSERT INTO Feedback (name, email, message, datatime) VALUES (?, ?, ?, NOW())");
$stmt->bind_param("sss", $name, $email, $message);

if ($stmt->execute()) {
  http_response_code(201);
  echo json_encode(['success' => true, 'message' => 'Сообщение успешно отправлено']);
} else {
  http_response_code(400);
  echo json_encode(['success' => false, 'message' => 'Ошибка отправки сообщения: ' . mysqli_error($conn)]);
}

$stmt->close();
$conn->close();
?>