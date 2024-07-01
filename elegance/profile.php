<!DOCTYPE html>
<html lang="ru,en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Личный кабинет</title>
    <link rel="icon" href="Vector.svg" type="image/x-icon">
    <link rel="stylesheet" href="account.css">
</head>
<body>
    <?php
    session_start();
    $isLoggedIn = isset($_SESSION['id']);// Проверка, залогинен ли пользователь
    ?>
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
                  <a href="auth.php" class="menu__link"><img class="menu__log" src="../img/login.png"></a>
              </div>
          </nav>
  </header>
        <div class="login-button">
            <?php if ($isLoggedIn): ?>
                <a href="logout.php" class="button">Выйти</a>
            <?php else: ?>
                <a href="auth.php" class="button">Войти</a>
            <?php endif; ?>
        </div>
    <section>
        <div class="acc-block">
            <?php
            if ($isLoggedIn) {
                // Подключение к базе данных
                $host = 'localhost';
                $db = 'elegance';
                $user = 'root';
                $pass = '';
                $charset = 'utf8mb4';

                $dsn = "mysql:host=$host;dbname=$db;charset=$charset";
                $options = [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                    PDO::ATTR_EMULATE_PREPARES => false,
                ];

                try {
                    $pdo = new PDO($dsn, $user, $pass, $options);
                } catch (\PDOException $e) {
                    throw new \PDOException($e->getMessage(), (int)$e->getCode());
                }

                // Запрос к базе данных для получения данных пользователя
                $stmt = $pdo->prepare('SELECT * FROM user WHERE id = :id');
                $stmt->execute(['id' => $_SESSION['user_id']]);
                $user = $stmt->fetch();

                // Используйте полученные данные для отображения в HTML
            ?>
            <div class="acc-block_left">
                <div class="acc-block_left_title">ПЕРСОНАЛЬНЫЕ ДАННЫЕ</div>
                <div class="acc-block_left_inic">
                    <div class="acc-block_left_inic_name"><?php echo $user['name']; ?></div>
                </div>
                <p class="acc-block_left_email">E-mail:<span class="email"><?php echo $user['email_user']; ?></span></p>
               
            </div>
            <?php
            } else {
                echo "<p>Пожалуйста, <a href='autoriz.html'>войдите</a> для доступа к профилю.</p>";
            }
            ?>
        </div>

        <?php
session_start();
if ($isLoggedIn) {
    try {
        // Подключение к базе данных
        $host = 'localhost';
        $db = 'elegance';
        $user = 'root';
        $pass = '';
        $charset = 'utf8mb4';

        $dsn = "mysql:host=$host;dbname=$db;charset=$charset";
        $options = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ];

        $pdo = new PDO($dsn, $user, $pass, $options);

        // Получение роли пользователя из базы данных
        $userID = $_SESSION['id']; // Предположим, что идентификатор пользователя доступен в сессии
        $roleQuery = $pdo->prepare('SELECT role FROM users WHERE id = :id');
        $roleQuery->execute(['id' => $userID]);
        $userRole = $roleQuery->fetchColumn();

        // Проверка наличия роли администратора
        if ($userRole === 'admin') {

            // Получение списка всех таблиц в базе данных
            $tablesQuery = $pdo->query('SHOW TABLES');
            $tables = $tablesQuery->fetchAll(PDO::FETCH_COLUMN);

            foreach ($tables as $table) {
                echo "<div class='table-container'>";
                echo "<h2 class='table-heading'>$table</h2>";

                $stmt = $pdo->query("SELECT * FROM $table");
                $data = $stmt->fetchAll();

                if (!empty($data)) {
                    echo "<form method='post' action='profile.php'>";
                    echo "<input type='hidden' name='table' value='$table'>";

                    foreach ($data as $row) {
                        echo "<div class='table-row'>";
                        foreach ($row as $key => $value) {
                            echo "<div class='field'>";
                            echo "<label for='$key'>$key:</label>";
                            echo "<input type='text' id='$key' name='data[$key][]' value='$value'>";
                            echo "</div>";
                        }
                        echo "</div>";
                       
                    }
                    echo "<input type='submit' value='Сохранить изменения'>";
                    echo "</form>";
                } else {
                    echo "<p class='empty-table'>Таблица $table пуста.</p>";
                }

                echo "</div>";
            }
            

            // Добавление записи
            if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['add'])) {
                $table = $_POST['table'];
                $columns = array_keys($_POST['add']);
                $values = array_values($_POST['add']);
                $insertQuery = "INSERT INTO $table (" . implode(',', $columns) . ") VALUES ('" . implode("','", $values) . "')";
                $stmt = $pdo->prepare($insertQuery);
                $stmt->execute();
                // Редирект после добавления
                header('Location: profile.php');
                exit;
            }

            // Обновление записи
            if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['data'])) {
                $table = $_POST['table'];
                $updateQuery = "UPDATE $table SET ";
                $updates = array();
                foreach ($_POST['data'] as $key => $values) {
                    $value = $values[0];
                    $updates[] = "$key = '$value'";
                }
                $updateQuery .= implode(', ', $updates);

                // Выполнение запроса на обновление данных в базе данных
                $stmt = $pdo->prepare($updateQuery);
                $stmt->execute();
                // Редирект после обновления
              
                exit;
            }
        } else {
            echo "<p></p>";
        }
    } catch (PDOException $e) {
        echo 'Ошибка: ' . $e->getMessage();
    }
}
?>


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
