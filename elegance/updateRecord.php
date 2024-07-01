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

$table = $data['table'];
$primaryKeyField = $data['primaryKeyField'];
$primaryKeyValue = $data['primaryKeyValue'];
$field = $data['field'];
$newValue = $data['newValue'];

$sql = "UPDATE $table SET $field = ? WHERE $primaryKeyField = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $newValue, $primaryKeyValue);

$response = [];

if ($stmt->execute()) {
    $response['success'] = true;
} else {
    $response['success'] = false;
    $response['message'] = 'Ошибка при обновлении записи: ' . $stmt->error;
}

$stmt->close();
$conn->close();

echo json_encode($response);
