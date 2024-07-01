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


$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];
$hashed_password = password_hash($password, PASSWORD_DEFAULT);
$sql = "SELECT * FROM User WHERE Email = '$email'";
$result = $conn->query($sql);

// Если email уже существует
if ($result->num_rows > 0) {
    // Отправка ответа клиенту (HTTP код 400 - Bad Request)
    http_response_code(400);
    echo json_encode(['message' => 'Этот email уже используется']);
    exit; 
} else {
    // Хеширование пароля
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Вставка данных в базу данных
    $sql = "INSERT INTO User (Name, Email, Password, Role) VALUES ('$name', '$email', '$hashed_password', 'client')";
    $result = $conn->query($sql);

    if ($result) {
        // Отправка ответа клиенту (HTTP код 201 - Created)
        http_response_code(201);
        echo json_encode(['message' => 'Регистрация прошла успешно']);
    } else {
        // Отправка ответа клиенту (HTTP код 500 - Internal Server Error)
        http_response_code(500);
        echo json_encode(['message' => 'Ошибка при сохранении данных']);
    }
}

// Закрытие соединения
$conn->close();
?>

