<?php
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ClinicDB";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$query_option = "SELECT ServiceName FROM Services;";
$result = $conn->query($query_option);

$options = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $options[] = $row['ServiceName'];
    }
}


echo json_encode($options);


$conn->close();
