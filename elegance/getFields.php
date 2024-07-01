<?php
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET');
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

$table = $_GET['table'];
$sql = "SHOW COLUMNS FROM $table";
$result = $conn->query($sql);

$fields = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $fields[] = $row['Field'];
    }
}

echo json_encode($fields);

$conn->close();
