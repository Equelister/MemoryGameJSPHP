-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 23 Sty 2021, 16:04
-- Wersja serwera: 10.4.14-MariaDB
-- Wersja PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `tiwpmemorygame`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `scoreboard`
--

CREATE TABLE `scoreboard` (
  `id_scoreboard` int(11) NOT NULL,
  `nickname` text NOT NULL,
  `score` int(11) NOT NULL,
  `difficulty` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `scoreboard`
--

INSERT INTO `scoreboard` (`id_scoreboard`, `nickname`, `score`, `difficulty`) VALUES
(1, '', 0, 0),
(2, 'Zuzio', 2, 4),
(3, 'Hyzio', 6, 4),
(4, 'Juzio', 6, 4),
(5, 'Misio', 5, 4),
(6, 'Hyzio', 123, 16),
(7, 'NieUmiemWToGrac', 999999, 16),
(8, 'NotAdmin', 45, 16),
(9, 'Hyzio', 153, 36),
(10, 'Hyzio', 149, 36),
(11, 'Adam Stoch', 99, 36),
(12, 'SlabyAlgorytm', 98765, 36),
(13, 'testestest', 3, 4),
(14, 'Im Awesome', 13, 16),
(15, 'ImAwesomeToo', 46, 36),
(16, 'linus', 3, 4),
(17, 'Player', 4, 4);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `scoreboard`
--
ALTER TABLE `scoreboard`
  ADD PRIMARY KEY (`id_scoreboard`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `scoreboard`
--
ALTER TABLE `scoreboard`
  MODIFY `id_scoreboard` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
