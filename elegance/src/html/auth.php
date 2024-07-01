<?php
session_start();
$log = 0;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['email']) && isset($_POST['password'])) {
        $email = $_POST['email'];
        $password = $_POST['password'];
        $recaptcha_response = $_POST['g-recaptcha-response'];

        $secret_key = '6LemWfwpAAAAALzG9E2_qoMSW5C94D8FHNKHAVcE';
        $verify_response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secret_key}&response={$recaptcha_response}&remoteip={$_SERVER['REMOTE_ADDR']}");
        $response_data = json_decode($verify_response, true);

        if ($response_data['success']) {
            $db = mysqli_connect('localhost', 'root', '', 'elegance');

            if (!$db) {
                die('Ошибка подключения (' . mysqli_connect_errno() . ') ' . mysqli_connect_error());
            }

            $stmt = $db->prepare("SELECT * FROM user WHERE email = ? AND password = ?");
            $stmt->bind_param("ss", $email, $password);
            $stmt->execute();
            $result = $stmt->get_result();

            if ($result->num_rows > 0) {
                $user_data = $result->fetch_assoc();
                $_SESSION['user'] = $user_data;
                echo "<script>alert('Вы успешно авторизовались!'); window.location.href = 'account.php';</script>";
                exit();
            } else {
                echo "<script>alert('Что-то не так. Попробуйте снова.');</script>";
            }

            $stmt->close();
            mysqli_close($db);
        } else {
            echo "<script>alert('Пройдите reCAPTCHA.');</script>";
        }
    } else {
        echo "<script>alert('Введите email и пароль.');</script>";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="../img/logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../scss/login.css">
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    <title>Elegance</title>
</head>
<body>
<header>
    <div class="container">
        <nav class="menu">
            <ul class="menu menu__left">
                <li class="menu__items"><a href="index.html" class="menu__link"><img class="menu__logo" src="../img/logo.png"></a></li>
            </ul>
            <ul class="menu__center">
                <li class="menu__items"><a href="services.html" class="menu__link"><p class="menu__text">Услуги</p></a></li>
                <li class="menu__items"><a href="master.html" class="menu__link"><p class="menu__text">Мастера</p></a></li>
                <li class="menu__items"><a href="sale.html" class="menu__link"><p class="menu__text">Акции</p></a></li>
                <li class="menu__items"><a href="contacts.html" class="menu__link"><p class="menu__text">Контакты</p></a></li>
            </ul>
            <div class="menu menu__right">
                <a href="account.php" class="menu__link"><img class="menu__log" src="../img/login.png"></a>
            </div>
        </nav>
</header>
<body>
    <h2>Авторизация</h2>
    <form method="POST" class="login">
    <div class="login__line">
        <img src="../img/fly.png">
        <div class="login__box">
        <label>Email:</label>
        <input type="email" name="email" required><br>
        <label>Пароль:</label>
        <input type="password" name="password" required><br>
        </div>
          <img src="../img/image.png">
        </div>
        <div style="display: flex; justify-content: center;" class="g-recaptcha" data-sitekey="6LemWfwpAAAAANvrJRRfpKLZvy2eSFWqskD1fd2v"></div><br>
        <input class="btnvalid" type="submit" value="Войти">
    </form>
    <footer>
      <div class="container">
          <nav class="footmenu">
              <ul class="footmenu__left">
                <li class="footmenu__items"><a href="services.html" class="footmenu__link"><p class="menu__text">Услуги</p></a></li>
                <li class="footmenu__items"><a href="master.html" class="footmenu__link"><p class="menu__text">Мастера</p></a></li>
                <li class="footmenu__items"><a href="sale.html" class="footmenu__link"><p class="menu__text">Акции</p></a></li>
              </ul>
              <div class="footmenu__center">
                <p class="footmenu__salon">© Салон красоты Elegance</p>
              </div>
              <div class="footmenu__right">
                <li class="footmenu__items"><a href="contacts.html" class="footmenu__link"><p class="footmenu__text">Контакты</p></a></li>
                  <div class="footmenu__contact">
                    <img class="footmenu__icon" src="../img/telegram.png">
                    <img class="footmenu__icon" src="../img/vk.png">
                    <img class="footmenu__icon" src="../img/insta.png">
                    <p class="footmenu__number">+7 (900) 456 77 11</p>
                </div>
              </div>
          </nav>
      </div>
    </footer>
</body>
</html>
