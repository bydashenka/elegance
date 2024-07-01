<?php
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Max-Age: 3600');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "elegance";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents("php://input"), true);


$email = $data['email'];
$service = $data['service'];
$master = $data['master'];
$date = $data['date'];


$sql = "INSERT INTO appointment (email, service, master, date) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $email, $service, $master, $date);

if ($stmt->execute()) {
    echo json_encode(array("message" => "Запись успешно добавлена в базу данных"));
} else {
    echo json_encode(array("message" => "Ошибка при добавлении записи в базу данных: " . $stmt->error));
}

$stmt->close();
$conn->close();
