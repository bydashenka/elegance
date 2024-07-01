<?php
session_start();

$mysql = mysqli_connect('localhost', 'root', '', 'elegance');

if (!$mysql) {
    die('Ошибка подключения (' . mysqli_connect_errno() . ') ' . mysqli_connect_error());
}

$email = $_POST['email'];
$password = $_POST['password'];

$stmt = $mysql->prepare("SELECT * FROM user WHERE email = ? AND password = ?");
$stmt->bind_param("ss", $email, $password);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $user_data = $result->fetch_assoc();
    $_SESSION['user'] = $user_data;
    echo "<script>alert('Вы успешно авторизовались!'); window.location.href = 'account.php';</script>";
} else {
    echo "<script>alert('Такого аккаунта не существует. Зарегистрируйтесь.');</script>";
}

$stmt->close();
mysqli_close($mysql);
?>
