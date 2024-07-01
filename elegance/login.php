<?php
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Content-Type: application/json');
session_start();

// Подключение к базе данных
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "elegance";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    error_log("Connection failed: " . $conn->connect_error);
    http_response_code(500);
    echo json_encode(["error" => "Connection failed: " . $conn->connect_error]);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'] ?? null;
    $password = $_POST['password'] ?? null;
    $recaptcha_response = $_POST['g-recaptcha-response'] ?? null;

    if (is_null($email) || is_null($password) || is_null($recaptcha_response)) {
        http_response_code(400);
        echo json_encode(["error" => "Все поля должны быть заполнены"]);
        exit();
    }

    // Verify reCAPTCHA response
    $secret_key = '6LemWfwpAAAAALzG9E2_qoMSW5C94D8FHNKHAVcE';
    $verify_response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secret_key}&response={$recaptcha_response}&remoteip={$_SERVER['REMOTE_ADDR']}");

    $response_data = json_decode($verify_response, true);

    if ($response_data['success']) {
        // капча пройдена
        $stmt = $conn->prepare("SELECT id, password_user, name FROM user WHERE email = ?");
        if ($stmt === false) {
            error_log("Prepare failed: " . $conn->error);
            http_response_code(500);
            echo json_encode(["error" => "Prepare failed: " . $conn->error]);
            exit();
        }

        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows === 0) {
            http_response_code(401);
            echo json_encode(["error" => "Неправильный логин или пароль"]);
            exit();
        }

        $stmt->bind_result($id, $hashed_password, $name);
        $stmt->fetch();

        if (password_verify($password, $hashed_password)) {
            $_SESSION['user'] = ['id' => $id, 'name' => $name];
            http_response_code(200);
            echo json_encode(["message" => "Авторизация прошла успешно", "name" => $name]);
        } else {
            http_response_code(401);
            echo json_encode(["error" => "Неправильный логин или пароль"]);
        }
        
        $stmt->close();
    } else {
        http_response_code(401);
        echo json_encode(["error" => "Пройдите рекапчу"]);
    }
}

$conn->close();
?>
