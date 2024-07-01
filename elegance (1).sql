-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 27 2024 г., 11:36
-- Версия сервера: 5.7.39
-- Версия PHP: 8.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `elegance`
--

-- --------------------------------------------------------

--
-- Структура таблицы `appointment`
--

CREATE TABLE `appointment` (
  `id_appointment` int(11) NOT NULL,
  `service` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `master` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `email` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `appointment`
--

INSERT INTO `appointment` (`id_appointment`, `service`, `master`, `date`, `email`) VALUES
(1, 'Мужская стрижка', 'Егорова Марина Егоровна', '2024-06-04', 'qwer@mail.ru'),
(2, 'Эпиляция ноги полностью', 'Леонтьева Рита Геннадьевна', '2024-06-02', 'aleksa@mail.ru'),
(3, 'Эпиляция глубокое бикини', 'Леонтьева Рита Геннадьевна', '2024-06-05', 'aleksa@mail.ru'),
(4, 'Эпиляция классическое бикини', 'Егорова Марина Егоровна ', '2024-05-31', 'dabykhanova@gmail.com'),
(5, 'Мужской педикюр', 'Леонтьева Рита Геннадьевна', '2024-05-07', 'dabykhanova@gmail.com'),
(6, 'Мужской педикюр', 'Балашова Яна Александровна', '2024-06-15', 'lox@mail.ru');

-- --------------------------------------------------------

--
-- Дублирующая структура для представления `clientzapic`
-- (См. Ниже фактическое представление)
--
CREATE TABLE `clientzapic` (
`email` varchar(150)
);

-- --------------------------------------------------------

--
-- Структура таблицы `feedback`
--

CREATE TABLE `feedback` (
  `id_feedback` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `datatime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `feedback`
--

INSERT INTO `feedback` (`id_feedback`, `name`, `email`, `message`, `datatime`) VALUES
(1, 'даша', 'da@mail.ru', 'ага', '2024-06-22 13:47:08'),
(2, 'Дарья', 'dabykhanova@gmail.com', 'приветик', '2024-06-22 13:54:15'),
(3, 'Даша', 'dabykhanova@gmail.com', 'приветик', '2024-06-25 11:34:55');

-- --------------------------------------------------------

--
-- Дублирующая структура для представления `haveproducts`
-- (См. Ниже фактическое представление)
--
CREATE TABLE `haveproducts` (
`name` varchar(150)
,`price` float(10,2)
,`quantity` int(5)
);

-- --------------------------------------------------------

--
-- Дублирующая структура для представления `liclients`
-- (См. Ниже фактическое представление)
--
CREATE TABLE `liclients` (
`Имя` varchar(100)
,`Почта` varchar(150)
);

-- --------------------------------------------------------

--
-- Дублирующая структура для представления `limasters`
-- (См. Ниже фактическое представление)
--
CREATE TABLE `limasters` (
`ФИО` varchar(150)
,`Специализация` varchar(100)
,`Стаж_работы` int(2)
,`Образование` varchar(255)
);

-- --------------------------------------------------------

--
-- Дублирующая структура для представления `liservices`
-- (См. Ниже фактическое представление)
--
CREATE TABLE `liservices` (
`name` varchar(150)
);

-- --------------------------------------------------------

--
-- Дублирующая структура для представления `mastappok7`
-- (См. Ниже фактическое представление)
--
CREATE TABLE `mastappok7` (
`FIO` varchar(150)
,`количество_услуг` bigint(21)
);

-- --------------------------------------------------------

--
-- Структура таблицы `master`
--

CREATE TABLE `master` (
  `id_master` int(11) NOT NULL,
  `FIO` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `specialization` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `experience` int(2) NOT NULL,
  `education` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `master`
--

INSERT INTO `master` (`id_master`, `FIO`, `specialization`, `experience`, `education`) VALUES
(1, 'Колесникова Марина Сергеевна', 'Мастер эпиляции', 15, 'В 2010 г.  окончила  ФГБОУ СПО «Электростальский медицинский колледж Федерального медико-биологического агентства» по специальности «Сестринское дело».'),
(2, 'Леонтьева Рита Геннадьевна', 'Мастер эпиляции', 5, 'В 2018 г. окончила Московский государственный университет путей сообщения. Медицинская сестра специальность сестринское дело'),
(3, 'Сергеева Анна Николаевна', 'Парикмахер-стилист', 5, 'В 2019 г. окончила Межрегиональный центр косметологии и парикмахерского искусства.'),
(4, 'Егорова Марина Егоровна ', 'Парикмахер-стилист', 5, 'Специалист по стрижкам сложных и непослушных волос. Выпускник курса: Выдающийся мастер парикмахер \"Академии Правильной стрижки\", Школа парикмахерского искусства \"Планета Красоты\"'),
(5, 'Балашова Яна Александровна', 'Мастер ногтевого сервиса', 9, 'Сертифицированный специалист ногтевого сервиса с 2015г. Яна быстрый и аккуратный мастер. Всегда поможет определиться с цветом ногтей, а если такого не оказалось в палитре, то сможет создать его сама.'),
(6, 'Балашова Кристина Алексеевна', 'Мастер ногтевого сервиса', 3, 'Сертифицированный мастер ногтевого сервиса с 2021г. Внимательный и чуткий мастер, очень любит дизайн \"стемпинг\" и будет рада воплотить его в жизнь.'),
(7, 'Ульянова Ульяна Андреевна', 'Мастер ногтевого сервиса', 7, 'Сертифицированный мастер ногтевого сервиса с 2015 года, призер Чемпионата Сибири в моделировании ногтей'),
(8, 'Егорова Анна Валерьевна', 'Мастер по массажу', 15, 'Специалист имеет медицинское образование, а так же опыт работы более 15-ти лет, 5 из которых проработала в медучреждении на должности медицинская сестра по массажу терапевтического отделения.'),
(9, 'Григорьева Светлана Витальевна', 'Мастер SPA-процедур', 5, 'Сертифицированный массажист с обширным опытом и профессиональной квалификацией.\r\nКроме того, Светлана владеет различными техниками обертываний и пилингов.'),
(10, 'Мальцева Ева Евгеньевна', 'Визажист', 5, 'Окончила курс \"Basic Make-up\" и курс повышения квалификации \"Commercial Make-up\" в Московской школы визажистов Make-up School Moscow'),
(11, 'Урывская Вероника Юрьевна', 'Визажист', 8, 'Окончила курс \"Basic Make-up\" и курс повышения квалификации \"Commercial Make-up\" в Московской школы визажистов Make-up School Moscow ');

-- --------------------------------------------------------

--
-- Дублирующая структура для представления `money`
-- (См. Ниже фактическое представление)
--
CREATE TABLE `money` (
`Доход` double(19,2)
);

-- --------------------------------------------------------

--
-- Структура таблицы `payment`
--

CREATE TABLE `payment` (
  `id_payment` int(11) NOT NULL,
  `id_appointment` int(11) NOT NULL,
  `price` float(10,2) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `payment`
--

INSERT INTO `payment` (`id_payment`, `id_appointment`, `price`, `date`) VALUES
(1, 3, 2200.00, '2024-06-11'),
(2, 2, 2900.00, '2024-06-05');

-- --------------------------------------------------------

--
-- Структура таблицы `product`
--

CREATE TABLE `product` (
  `id_product` int(11) NOT NULL,
  `name` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` float(10,2) NOT NULL,
  `quantity` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `product`
--

INSERT INTO `product` (`id_product`, `name`, `price`, `quantity`) VALUES
(1, 'Ночной питательный увлажняющий крем с витамином Е «Аква 24» 250 мл', 970.00, 50),
(2, 'Крем-корректор фигуры 3 в1 Beauty Style Thalasso, 500 мл', 2100.00, 120),
(3, 'Омолаживающая сыворотка с пептидами \"Revitalization & Rejuvenation\"', 840.00, 82),
(4, 'Гидрирующий распаривающий гель для чистки Hydration Gel, 700 мл', 1120.00, 43),
(5, 'Очищающий пилинг-гель «Холодное гидрирование» «Аква 24» Beauty Style, 100 мл.', 1100.00, 2),
(6, 'Масло для тела имбирное «Тонус + Антицеллюлит» с разогревающим эффектом, 250 мл.', 850.00, 0),
(7, 'Антицеллюлитное водорослевое обертывание с зеленым кофе Beauty Style Thalasso, 600 гр', 3290.00, 0),
(8, 'Маска для термолифтинга на гипсовой основе', 1494.00, 1);

-- --------------------------------------------------------

--
-- Дублирующая структура для представления `products`
-- (См. Ниже фактическое представление)
--
CREATE TABLE `products` (
`Название` varchar(150)
,`Цена` float(10,2)
);

-- --------------------------------------------------------

--
-- Структура таблицы `promotion`
--

CREATE TABLE `promotion` (
  `id_promotion` int(11) NOT NULL,
  `name` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `id_service` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `promotion`
--

INSERT INTO `promotion` (`id_promotion`, `name`, `description`, `start_date`, `end_date`, `id_service`) VALUES
(6, 'скидка -1о% для новых клиентов!', 'суммируется с имеющимися скидками', '2024-02-04', '2024-07-20', 27),
(7, 'скидка -15% в честь дня рождения!', 'при себе иметь документ, подтверждающий это', '2024-02-04', '2025-01-30', 1),
(8, 'Приведи друга и получи скидку 5%', 'скидка действует на обоих друзей', '2024-06-03', '2024-11-22', 10),
(9, 'Скидка 50% при покупке абонемента', 'от 5 и более сеансов', '2024-04-01', '2024-09-30', 16),
(10, 'СЧАСТЛИВЫЕ ЧАСЫ', 'следите за вечерними сторис в нашем VK и Telegram', '2024-05-01', '2024-07-01', 24);

-- --------------------------------------------------------

--
-- Структура таблицы `service`
--

CREATE TABLE `service` (
  `id_service` int(11) NOT NULL,
  `name` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` float(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `service`
--

INSERT INTO `service` (`id_service`, `name`, `price`) VALUES
(1, 'Стрижка', 4000.00),
(2, 'Мужская стрижка', 4000.00),
(3, 'Стрижка одним срезом', 2000.00),
(4, 'Стрижка челки', 1000.00),
(7, 'Окрашивание корней', 6500.00),
(8, 'Окрашивание в один тон', 7500.00),
(9, 'Сложное окрашивание', 15000.00),
(10, 'Маникюр + покрытие гель-лак\r\n', 2900.00),
(11, 'Снятие гель-лака', 300.00),
(12, 'Мужской маникюр', 2000.00),
(13, 'Педикюр + гель-лак', 3400.00),
(14, 'Мужской педикюр', 2800.00),
(15, 'Smart педикюр', 2700.00),
(16, 'Эпиляция глубокое бикини', 2200.00),
(17, 'Эпиляция классическое бикини', 1500.00),
(18, 'Эпиляция ноги полностью', 2900.00),
(19, 'Эпиляция голени/бедра', 1800.00),
(20, 'Эпиляция руки полностью', 1700.00),
(21, 'Эпиляция руки до локтя', 1400.00),
(22, 'Эпиляция подмешенные впадины', 700.00),
(23, '\"Экспресс\" макияж', 1400.00),
(24, 'Дневной макияж', 1900.00),
(25, 'Вечерний макияжик', 2400.00),
(26, 'Сложный макияж', 3000.00),
(27, 'Обертывания водорослевые', 3500.00),
(28, 'Шоколадное обертывание', 3500.00),
(29, 'Скрабирование + холодное обертывание + общий массаж', 5000.00),
(30, 'Скрабирование + шоколадное обертывание + антицеллюлитный массаж', 5500.00),
(31, 'Общий массаж тела', 2500.00),
(32, 'Медовый массаж', 3000.00),
(33, 'Антицеллюлитный массаж', 2200.00),
(34, 'Массаж спины', 1500.00),
(35, 'Массаж ног', 1200.00);

-- --------------------------------------------------------

--
-- Дублирующая структура для представления `topclient`
-- (См. Ниже фактическое представление)
--
CREATE TABLE `topclient` (
`id_user` int(11)
,`email` varchar(150)
,`Визиты` bigint(21)
);

-- --------------------------------------------------------

--
-- Дублирующая структура для представления `topservice`
-- (См. Ниже фактическое представление)
--
CREATE TABLE `topservice` (
`name` varchar(150)
,`count_appointments` bigint(21)
);

-- --------------------------------------------------------

--
-- Структура таблицы `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `user`
--

INSERT INTO `user` (`id_user`, `name`, `email`, `password`, `role`) VALUES
(1, 'Дарья', 'dabyk@mail.ru', 'ParolOk123', 'admin'),
(6, 'Дарья', 'dabykhanova@gmail.com', '$2y$10$FmY1Wl2ERiEzl2DGuAtL3OL.sLFoLg0XPfN3P/iMDsu73juC1UAe2', 'client'),
(7, 'Дарья', 'dabykhanova@gmail.com', '$2y$10$Bn5Z/9r.hovn4XSQboMaFuSkb9LnGotNkH7eifRc8GnQVfV46.yuC', 'client'),
(8, 'Алекса', 'aleksa@mail.ru', '$2y$10$rHhF9u6gw8ZUoCoCtpT2a.SH4Pd18.EV.tVCagQ7qvhPIK0kpmBxy', 'client'),
(9, 'oioioioio', 'oioioio@mail.ru', '$2y$10$k0gUWoE/V640UehH7OI0cuQEuAGxlfdoDvPNNlr.DVYus0ySPkE8O', 'client'),
(10, 'Даша', 'dabykla@gmail.com', '$2y$10$fLVdDb0yl7df/EIzKFB17uFnNFZNqoZNiqH1AMI.kQDU2Y44UD3e6', 'client'),
(11, 'Карина', 'Rakin@mail.ri', '$2y$10$cUc1C8ACjnfERucVTZuz5.RLYVy9VKqrRfQV/RKGDQARh20pZ18Cq', 'client'),
(12, 'Карина', 'Rakin@mail.ri', '$2y$10$LBi.y3OTAnsUgRE/kHUdEO4yW1Xm7ZldzwOWtiFuhPxhMMKyezumS', 'client'),
(13, 'Сашка', 'sasha@mail.ru', '$2y$10$zN3DBWIkIbNS9CLHeyG9eewkMP3txOcmWBErBDaP6pULBAbCqNM/m', 'client'),
(14, 'Катя', 'katya@gmail.com', '$2y$10$xFH6vp5OvzCtFpwEvqmPEuwPr9zUVAo3AxKd.6MRQJaUWIuFms/ry', 'client'),
(15, 'Darya', 'da@mail.ru', '$2y$10$Wy6R76JYj638Fyga./HI4.eK5JSG2rzeln7AuU9q/CHiJnOdVNSh.', 'client'),
(16, 'Игорь', 'vxod@mail.ru', 'VoiditePzh123', 'client'),
(17, 'qwer', 'qwer@mail.ru', '$2y$10$X4UhOhaBiP93ilFIrzlQ2uBPOxZGT7VUX5gRUjYOobAJqiZTzn.6W', 'client'),
(18, 'Олег', 'oleg@mail.ru', '$2y$10$I2FS5rN9Fxa/OjHwuVlVquKFNTGhwu/7alZ0OQCyRw0inV8eLhkoi', 'client'),
(20, 'Никита', 'lox@mail.ru', 'Nikitalox123', 'client'),
(21, '', '', '$2y$10$m1rtu1lp8nYnd/4z5gTnAu4ltbdLnTXIWmDdmnuu2Yf6Eb7PclIeO', 'client');

-- --------------------------------------------------------

--
-- Структура для представления `clientzapic`
--
DROP TABLE IF EXISTS `clientzapic`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`%` SQL SECURITY DEFINER VIEW `clientzapic`  AS SELECT `appointment`.`email` AS `email` FROM `appointment` WHERE (`appointment`.`date` = '2024-06-04')  ;

-- --------------------------------------------------------

--
-- Структура для представления `haveproducts`
--
DROP TABLE IF EXISTS `haveproducts`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`%` SQL SECURITY DEFINER VIEW `haveproducts`  AS SELECT `product`.`name` AS `name`, `product`.`price` AS `price`, `product`.`quantity` AS `quantity` FROM `product` WHERE (`product`.`quantity` > 0)  ;

-- --------------------------------------------------------

--
-- Структура для представления `liclients`
--
DROP TABLE IF EXISTS `liclients`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`%` SQL SECURITY DEFINER VIEW `liclients`  AS SELECT `user`.`name` AS `Имя`, `user`.`email` AS `Почта` FROM `user` WHERE (`user`.`role` = 'client')  ;

-- --------------------------------------------------------

--
-- Структура для представления `limasters`
--
DROP TABLE IF EXISTS `limasters`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`%` SQL SECURITY DEFINER VIEW `limasters`  AS SELECT `master`.`FIO` AS `ФИО`, `master`.`specialization` AS `Специализация`, `master`.`experience` AS `Стаж_работы`, `master`.`education` AS `Образование` FROM `master``master`  ;

-- --------------------------------------------------------

--
-- Структура для представления `liservices`
--
DROP TABLE IF EXISTS `liservices`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`%` SQL SECURITY DEFINER VIEW `liservices`  AS SELECT `service`.`name` AS `name` FROM `service``service`  ;

-- --------------------------------------------------------

--
-- Структура для представления `mastappok7`
--
DROP TABLE IF EXISTS `mastappok7`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`%` SQL SECURITY DEFINER VIEW `mastappok7`  AS SELECT `master`.`FIO` AS `FIO`, count(`appointment`.`id_appointment`) AS `количество_услуг` FROM ((`master` left join `appointment` on((`master`.`FIO` = `appointment`.`master`))) left join `payment` on((`appointment`.`id_appointment` = `payment`.`id_appointment`))) WHERE (`payment`.`date` between '2023-01-01' and '2024-09-30') GROUP BY `master`.`FIO` ORDER BY `количество_услуг` AS `DESCdesc` ASC  ;

-- --------------------------------------------------------

--
-- Структура для представления `money`
--
DROP TABLE IF EXISTS `money`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`%` SQL SECURITY DEFINER VIEW `money`  AS SELECT sum(`payment`.`price`) AS `Доход` FROM `payment` WHERE (`payment`.`date` between '2024-01-01' and '2024-09-01')  ;

-- --------------------------------------------------------

--
-- Структура для представления `products`
--
DROP TABLE IF EXISTS `products`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`%` SQL SECURITY DEFINER VIEW `products`  AS SELECT `product`.`name` AS `Название`, `product`.`price` AS `Цена` FROM `product``product`  ;

-- --------------------------------------------------------

--
-- Структура для представления `topclient`
--
DROP TABLE IF EXISTS `topclient`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`%` SQL SECURITY DEFINER VIEW `topclient`  AS SELECT `user`.`id_user` AS `id_user`, `user`.`email` AS `email`, count(`appointment`.`id_appointment`) AS `Визиты` FROM (`user` join `appointment` on((`user`.`email` = `appointment`.`email`))) GROUP BY `user`.`id_user` HAVING (count(`appointment`.`id_appointment`) > 1) ORDER BY `Визиты` AS `DESCdesc` ASC  ;

-- --------------------------------------------------------

--
-- Структура для представления `topservice`
--
DROP TABLE IF EXISTS `topservice`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`%` SQL SECURITY DEFINER VIEW `topservice`  AS SELECT `service`.`name` AS `name`, count(`appointment`.`id_appointment`) AS `count_appointments` FROM (`appointment` join `service` on((`appointment`.`service` = `service`.`name`))) GROUP BY `service`.`name` ORDER BY `count_appointments` DESC LIMIT 0, 55  ;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`id_appointment`);

--
-- Индексы таблицы `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id_feedback`);

--
-- Индексы таблицы `master`
--
ALTER TABLE `master`
  ADD PRIMARY KEY (`id_master`);

--
-- Индексы таблицы `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`id_payment`),
  ADD KEY `pay_ap` (`id_appointment`);

--
-- Индексы таблицы `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id_product`);

--
-- Индексы таблицы `promotion`
--
ALTER TABLE `promotion`
  ADD PRIMARY KEY (`id_promotion`),
  ADD KEY `servprom` (`id_service`);

--
-- Индексы таблицы `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`id_service`);

--
-- Индексы таблицы `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `appointment`
--
ALTER TABLE `appointment`
  MODIFY `id_appointment` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `feedback`
--
ALTER TABLE `feedback`
  MODIFY `id_feedback` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `master`
--
ALTER TABLE `master`
  MODIFY `id_master` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT для таблицы `payment`
--
ALTER TABLE `payment`
  MODIFY `id_payment` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `product`
--
ALTER TABLE `product`
  MODIFY `id_product` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблицы `promotion`
--
ALTER TABLE `promotion`
  MODIFY `id_promotion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `service`
--
ALTER TABLE `service`
  MODIFY `id_service` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT для таблицы `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `payment`
--
ALTER TABLE `payment`
  ADD CONSTRAINT `pay_ap` FOREIGN KEY (`id_appointment`) REFERENCES `appointment` (`id_appointment`);

--
-- Ограничения внешнего ключа таблицы `promotion`
--
ALTER TABLE `promotion`
  ADD CONSTRAINT `servprom` FOREIGN KEY (`id_service`) REFERENCES `service` (`id_service`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
