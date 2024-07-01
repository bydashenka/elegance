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

$table = $data['table'];
$record = $data['record'];

// Исключаем поле 'id' из вставляемых полей, если оно существует
$columns = array_keys($record);
$values = array_values($record);
$idIndex = array_search('id', $columns);
if ($idIndex !== false) {
    unset($columns[$idIndex]);
    unset($values[$idIndex]);
}

$columnsList = implode(", ", $columns);
$valuesList = implode(", ", array_map(function ($value) use ($conn) {
    return "'" . $conn->real_escape_string($value) . "'";
}, $values));

$query = "INSERT INTO $table ($columnsList) VALUES ($valuesList)";
$result = $conn->query($query);

if ($result) {
    echo json_encode(["success" => true, "id" => $conn->insert_id]);
} else {
    echo json_encode(["success" => false, "message" => $conn->error]);
}

$conn->close();
?>
