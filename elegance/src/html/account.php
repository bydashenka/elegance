<?php
session_start();
$isLoggedIn = isset($_SESSION['user']);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="../img/logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../scss/account.css">
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
<section style="margin: 20px auto;">
      <?php if ($isLoggedIn): ?>
      <div>
          <p class="hello" style="font-family: Cormorant; font-size: 30px; text-align: center">Привет, <?php echo $_SESSION['user']['name']; ?> (<?php echo $_SESSION['user']['email']; ?>)</p>
            <div class="role">
              <?php if ($_SESSION['user']['role'] == 'client'): ?>
                <div class="button"><a class="btn__link" href="record.html"><p class="btntext">Записаться на услугу</p></a></div>
                <?php elseif ($_SESSION['user']['role'] == 'admin'): ?>
                <a class="btn__link" href="admin.html"><div class="button"><p class="btntext">Перейти к админ панели</p></div></a>
              <?php endif; ?>
              </div>
              <div class="logout">
                  <div class="button"><a class="btn__link" href="logout.php"><p class="btntext">Выйти</p></a></div>
              </div>
      </div>
  <?php else: ?>
      <p class="voidite"style="font-family: Cormorant; font-size: 30px; text-align: center">Для доступа к личному кабинету необходимо авторизоваться.</p>
      <div class="button"><a class="btn__link" href="auth.php"><p class="btntext">Войти</p></a></div>
  <?php endif; ?>
</section>
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
