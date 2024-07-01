<?php
header('Access-Control-Allow-Origin: http://localhost:5173/elegance');  // ЗАМЕНИТЕ * на ваш домен для продакшена!
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Настройки подключения к базе данных
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "elegance"; 

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  $data = json_decode(file_get_contents('php://input'), true);

  if ($data === null || !is_array($data) || empty($data)) {
      http_response_code(400); // Bad Request
      echo json_encode(['success' => false, 'error' => 'Некорректные данные в запросе']);
      return;
  }

  $service = $data['service'];
  $master = $data['master'];
  $date = $data['date'];
  $email = $data['email'];

  
  $sql = "INSERT INTO appointment (service, master, date, email) 
          VALUES (:service, :master, :date, :email)"; 
  $stmt = $conn->prepare($sql);
  
  $stmt->bindParam(':service', $service);
  $stmt->bindParam(':master', $master);
  $stmt->bindParam(':date', $date);
  $stmt->bindParam(':email', $email);
  

  // Выполняем запрос
  $stmt->execute();

  echo json_encode(['success' => true]);

} catch(PDOException $e) {
  http_response_code(500); 
  echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
?>
