<?php
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Max-Age: 3600');

// Подключение к базе данных
$conn = new mysqli('localhost', 'root', '', 'elegance');
if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]));
}

$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['table']) || !isset($data['primaryKeyField']) || !isset($data['primaryKeyValue'])) {
    echo json_encode(["success" => false, "message" => "Missing required parameters"]);
    $conn->close();
    exit();
}

$table = $conn->real_escape_string($data['table']);
$primaryKeyField = $conn->real_escape_string($data['primaryKeyField']);
$primaryKeyValue = $conn->real_escape_string($data['primaryKeyValue']);

$query = "DELETE FROM $table WHERE $primaryKeyField = '$primaryKeyValue'";
$result = $conn->query($query);

if ($result) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => $conn->error]);
}

$conn->close();
?>
