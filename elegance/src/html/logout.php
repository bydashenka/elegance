<?php
// Начинаем сессию
session_start();

// Разрушаем все данные связанные с текущей сессией
session_unset();
session_destroy();

// Перенаправляем пользователя на страницу авторизации
header("Location: auth.php");
exit;
?>