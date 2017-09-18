-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: 17-Set-2017 às 14:39
-- Versão do servidor: 5.7.19-log
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `encurtadordelinks`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `tabela1`
--

CREATE TABLE `tabela1` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `hits` int(11) DEFAULT NULL,
  `url` text COLLATE utf8_unicode_520_ci NOT NULL,
  `shortUrl` text COLLATE utf8_unicode_520_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_520_ci;

--
-- Extraindo dados da tabela `tabela1`
--

INSERT INTO `tabela1` (`id`, `hits`, `url`, `shortUrl`) VALUES
(10743, 0, 'http://uol.com.br', 'http://chr.dc/y81xc'),
(19122, 2, 'http://chaordic.com.br', 'http://chr.dc/qy5k9'),
(21220, 2, 'http://diariocatarinense.com.br', 'http://chr.dc/87itr'),
(23094, 5, 'http://globo.com', 'http://chr.dc/9dtr4'),
(55324, 4, 'http://youtube.com', 'http://chr.dc/1w5tg'),
(66761, 7, 'http://terra.com.br', 'http://chr.dc/u9jh3'),
(70001, 1, 'http://facebook.com', 'http://chr.dc/qy61p'),
(70931, 5, 'http://twitter.com', 'http://chr.dc/7tmv1'),
(76291, 4, 'http://google.com', 'http://chr.dc/aUx71'),
(87112, 2, 'http://bing.com', 'http://chr.dc/9opw2');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tabela1`
--
ALTER TABLE `tabela1`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tabela1`
--
ALTER TABLE `tabela1`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87113;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
