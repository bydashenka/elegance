<?php
header('Content-Type: application/json'); 
header('Access-Control-Allow-Origin: *'); // Разрешаем запросы с любого домена (ДЛЯ ТЕСТИРОВАНИЯ)
   header('Access-Control-Allow-Methods: GET, POST, OPTIONS'); // Разрешаем методы GET, POST, OPTIONS
   header('Access-Control-Allow-Headers: Content-Type'); // Разрешаем заголовок Content-Type

$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "elegance"; 

try {
  // Создаем подключение к базе данных ПЕРЕД использованием $conn
  $conn = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  $stmt = $conn->query("SELECT DISTINCT FIO FROM master");
  $master = $stmt->fetchAll(PDO::FETCH_COLUMN); 
  echo json_encode($master);

} catch(PDOException $e) { 
    http_response_code(500);
    echo json_encode(['error' => 'Ошибка базы данных: ' . $e->getMessage()]);
} catch(Exception $e) { 
    http_response_code(400); 
    echo json_encode(['error' => $e->getMessage()]);
}
?>
