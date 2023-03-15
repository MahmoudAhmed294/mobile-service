-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 06, 2022 at 05:07 PM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mobile_servicedb`
--

-- --------------------------------------------------------

--
-- Table structure for table `added_transactions`
--

DROP TABLE IF EXISTS `added_transactions`;
CREATE TABLE IF NOT EXISTS `added_transactions` (
  `id` mediumint(255) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `added_transactions`
--

INSERT INTO `added_transactions` (`id`) VALUES
(1);

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
CREATE TABLE IF NOT EXISTS `brands` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `modelName` varchar(255) NOT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `modelName`, `isActive`) VALUES
(1, 'Samsung Galaxy S21 FE', 1),
(2, 'OPPO Reno8 5G', 1),
(3, 'OnePlus Nord', 1),
(4, 'OnePlus 10R 5G', 1),
(5, 'Apple iPhone 13', 1),
(6, 'OnePlus Nord 2T', 1),
(7, 'Xiaomi Redmi Note', 1);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `typeName` varchar(255) NOT NULL,
  `totalUsed` int(11) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `typeName` (`typeName`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `typeName`, `totalUsed`, `isActive`) VALUES
(1, 'Poor battery life', 0, 1),
(2, 'Slow Phone', 0, 1),
(3, 'Overheating Phone', 0, 1),
(4, 'Freezes', 0, 1),
(5, 'Water Repair', 0, 1),
(6, 'Phone Unlocking', 0, 1),
(7, 'LCD Display', 0, 1),
(8, 'Software Problem', 0, 0),
(9, 'Broken Screen', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `deletetransactions`
--

DROP TABLE IF EXISTS `deletetransactions`;
CREATE TABLE IF NOT EXISTS `deletetransactions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `orders_details`
--

DROP TABLE IF EXISTS `orders_details`;
CREATE TABLE IF NOT EXISTS `orders_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `model` varchar(255) DEFAULT NULL,
  `serialNumber` varchar(255) DEFAULT NULL,
  `isInWarranty` tinyint(1) DEFAULT NULL,
  `cost` int(11) DEFAULT NULL,
  `costReceived` int(11) DEFAULT NULL,
  `comments` text,
  `maintenancePeriod` int(11) DEFAULT NULL,
  `spareParts` text,
  `engineerName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders_details`
--

INSERT INTO `orders_details` (`id`, `model`, `serialNumber`, `isInWarranty`, `cost`, `costReceived`, `comments`, `maintenancePeriod`, `spareParts`, `engineerName`) VALUES
(1, 'C55', '145sa4s5a4s', 1, 200, 100, 'Occaecat aliqua laboris adipisicing officia excepteur ex. Occaecat id ea cupidatat anim sunt reprehenderit cillum duis consequat est. Incididunt mollit est ex consequat irure aliquip Lorem non ex culpa tempor.\r\n\r\nDolore eiusmod deserunt irure sint in ad ut duis est consectetur proident. Aute occaecat sit irure excepteur duis sint. Pariatur fugiat mollit do aute qui voluptate excepteur dolore qui. Sunt veniam irure officia sit sit id ipsum id ut reprehenderit elit dolore anim minim. Voluptate sit culpa est ea mollit est sit fugiat officia est exercitation est proident consequat. Ea culpa do et culpa elit culpa non eiusmod adipisicing ea.\r\n\r\n\r\n', 5, 'Occaecat aliqua laboris adipisicing officia excepteur ex. Occaecat id ea cupidatat anim sunt reprehenderit cillum duis consequat est. Incididunt mollit est ex consequat irure aliquip Lorem non ex culpa tempor.', 'Mahmoud Ahmed'),
(2, 'C55', '145sa4s5a4s', 1, 200, 100, 'Occaecat aliqua laboris adipisicing officia excepteur ex. Occaecat id ea cupidatat anim sunt reprehenderit cillum duis consequat est. Incididunt mollit est ex consequat irure aliquip Lorem non ex culpa tempor.\r\n\r\nDolore eiusmod deserunt irure sint in ad ut duis est consectetur proident. Aute occaecat sit irure excepteur duis sint. Pariatur fugiat mollit do aute qui voluptate excepteur dolore qui. Sunt veniam irure officia sit sit id ipsum id ut reprehenderit elit dolore anim minim. Voluptate sit culpa est ea mollit est sit fugiat officia est exercitation est proident consequat. Ea culpa do et culpa elit culpa non eiusmod adipisicing ea.\r\n\r\n\r\n', 5, 'Occaecat aliqua laboris adipisicing officia excepteur ex. Occaecat id ea cupidatat anim sunt reprehenderit cillum duis consequat est. Incididunt mollit est ex consequat irure aliquip Lorem non ex culpa tempor.', 'Mahmoud Ahmed'),
(3, 'C55', '145sa4s5a4s', 1, 200, 100, 'Occaecat aliqua laboris adipisicing officia excepteur ex. Occaecat id ea cupidatat anim sunt reprehenderit cillum duis consequat est. Incididunt mollit est ex consequat irure aliquip Lorem non ex culpa tempor.\r\n\r\nDolore eiusmod deserunt irure sint in ad ut duis est consectetur proident. Aute occaecat sit irure excepteur duis sint. Pariatur fugiat mollit do aute qui voluptate excepteur dolore qui. Sunt veniam irure officia sit sit id ipsum id ut reprehenderit elit dolore anim minim. Voluptate sit culpa est ea mollit est sit fugiat officia est exercitation est proident consequat. Ea culpa do et culpa elit culpa non eiusmod adipisicing ea.\r\n\r\n\r\n', 5, 'Occaecat aliqua laboris adipisicing officia excepteur ex. Occaecat id ea cupidatat anim sunt reprehenderit cillum duis consequat est. Incididunt mollit est ex consequat irure aliquip Lorem non ex culpa tempor.', 'Mahmoud Ahmed'),
(4, 'C55', '145sa4s5a4s', 1, 200, 100, 'Occaecat aliqua laboris adipisicing officia excepteur ex. Occaecat id ea cupidatat anim sunt reprehenderit cillum duis consequat est. Incididunt mollit est ex consequat irure aliquip Lorem non ex culpa tempor.\r\n\r\nDolore eiusmod deserunt irure sint in ad ut duis est consectetur proident. Aute occaecat sit irure excepteur duis sint. Pariatur fugiat mollit do aute qui voluptate excepteur dolore qui. Sunt veniam irure officia sit sit id ipsum id ut reprehenderit elit dolore anim minim. Voluptate sit culpa est ea mollit est sit fugiat officia est exercitation est proident consequat. Ea culpa do et culpa elit culpa non eiusmod adipisicing ea.\r\n\r\n\r\n', 5, 'Occaecat aliqua laboris adipisicing officia excepteur ex. Occaecat id ea cupidatat anim sunt reprehenderit cillum duis consequat est. Incididunt mollit est ex consequat irure aliquip Lorem non ex culpa tempor.', 'Mahmoud Ahmed'),
(5, 'f11', 'das4d5ad5sa4', 0, 500, 200, NULL, 5, '', 'mahmoud ahmed'),
(6, 'f11', 'das4d5ad5sa4', 0, 500, 200, NULL, 5, '', 'mahmoud ahmed'),
(7, 'f11', 'das4d5ad5sa4', 0, 500, 200, 'addOrderaddOrderaddOrderaddOrderaddOrderaddOrderaddOrder', 5, '', 'mahmoud ahmed'),
(8, 'f11', 'das4d5ad5sa4', 0, 500, 200, 'addOrderaddOrderaddOrderaddOrderaddOrderaddOrderaddOrder', 5, '', 'mahmoud ahmed'),
(9, 'f11', 'das4d5ad5sa4', 0, 500, 200, 'addOrderaddOrderaddOrderaddOrderaddOrderaddOrderaddOrder', 5, '', 'mahmoud ahmed'),
(10, 'f11', 'das4d5ad5sa4', 0, 500, 200, 'addOrderaddOrderaddOrderaddOrderaddOrderaddOrderaddOrder', 5, '', 'mahmoud ahmed'),
(11, 'f11', 'das4d5ad5sa4', 0, 500, 200, 'addOrderaddOrderaddOrderaddOrderaddOrderaddOrderaddOrder', 5, '', 'mahmoud ahmed'),
(12, 'f11', 'das4d5ad5sa4', 0, 500, 200, 'addOrderaddOrderaddOrderaddOrderaddOrderaddOrderaddOrder', 5, '', 'mahmoud ahmed'),
(13, 'f11', 'das4d5ad5sa4', 0, 500, 200, 'addOrderaddOrderaddOrderaddOrderaddOrderaddOrderaddOrder', 5, '', 'mahmoud ahmed'),
(14, 'f11', 'das4d5ad5sa4', 0, 500, 200, 'addOrderaddOrderaddOrderaddOrderaddOrderaddOrderaddOrder', 5, '', 'mahmoud ahmed'),
(15, 'f11', 'das4d5ad5sa4', 0, 500, 200, 'addOrderaddOrderaddOrderaddOrderaddOrderaddOrderaddOrder', 5, '', 'mahmoud ahmed'),
(16, 'f11', 'das4d5ad5sa4', 0, 500, 200, 'addOrderaddOrderaddOrderaddOrderaddOrderaddOrderaddOrder', 5, '', 'mahmoud ahmed'),
(17, 'f11', 'das4d5ad5sa4', 0, 500, 200, 'addOrderaddOrderaddOrderaddOrderaddOrderaddOrderaddOrder', 5, '', 'mahmoud ahmed'),
(18, 'f11', 'das4d5ad5sa4', 0, 500, 200, 'addOrderaddOrderaddOrderaddOrderaddOrderaddOrderaddOrder', 5, '', 'mahmoud ahmed'),
(19, 'f11', 'das4d5ad5sa4', 0, 500, 200, 'addOrderaddOrderaddOrderaddOrderaddOrderaddOrderaddOrder', 5, '', 'mahmoud ahmed'),
(20, 'f11', 'das4d5ad5sa4', 0, 500, 200, 'addOrderaddOrderaddOrderaddOrderaddOrderaddOrderaddOrder', 5, '', 'mahmoud ahmed'),
(21, 'f11', 'das4d5ad5sa4', 0, 500, 200, 'addOrderaddOrderaddOrderaddOrderaddOrderaddOrderaddOrder', 5, '', 'mahmoud ahmed'),
(22, 'f11', 'das4d5ad5sa4', 0, 500, 200, 'addOrderaddOrderaddOrderaddOrderaddOrderaddOrderaddOrder', 5, '', 'mahmoud ahmed'),
(23, 'f11', 'das4d5ad5sa4', 0, 500, 200, 'addOrderaddOrderaddOrderaddOrderaddOrderaddOrderaddOrder', 5, '', 'mahmoud ahmed'),
(24, 'f11', 'das4d5ad5sa4', 0, 500, 200, 'addOrderaddOrderaddOrderaddOrderaddOrderaddOrderaddOrder', 5, '', 'mahmoud ahmed'),
(25, 'f11', 'das4d5ad5sa4', 0, 500, 200, 'addOrderaddOrderaddOrderaddOrderaddOrderaddOrderaddOrder', 5, '', 'mahmoud ahmed'),
(26, 'f11', 'das4d5ad5sa4', 0, 500, 200, 'addOrderaddOrderaddOrderaddOrderaddOrderaddOrderaddOrder', 5, '', 'mahmoud ahmed'),
(27, 'f11', 'das4d5ad5sa4', 0, 500, 200, 'addOrderaddOrderaddOrderaddOrderaddOrderaddOrderaddOrder', 5, '', 'mahmoud ahmed'),
(28, 'f11', 'das4d5ad5sa4', 0, 500, 200, 'addOrderaddOrderaddOrderaddOrderaddOrderaddOrderaddOrder', 5, '', 'mahmoud ahmed'),
(29, 'f11', 'das4d5ad5sa4', 0, 500, 200, 'addOrderaddOrderaddOrderaddOrderaddOrderaddOrderaddOrder', 5, '', 'mahmoud ahmed'),
(30, 'A12', 'ad4af4afbsavfnsa', 1, 500, 200, 'hello hello hello hello hello hello hello hello hello hello hello hello ', 5, '', 'mahmoud ahmed'),
(31, 'f11', 'das4d5ad5sa4', 0, 500, 100, 'mahjj asjans ansjan', 5, '', 'mahmoud ahmed'),
(32, 'f9', 'dada4da5da4', 1, 500, 200, '  kasjaksjak aksnakska   kasjaksjak aksnakska   kasjaksjak aksnakska ', 5, '', 'mahmoud ahmed'),
(33, 'f9', '5a4a5s4a54sa5', 0, 500, 200, 'bjbj jasjash jhsajsh', 5, '', 'mahmoud ahmed'),
(34, 'f9', '555555', 0, 500, 50, 'saas ', 5, '', 'mahmoud ahmed'),
(35, 'f11', '44a5s4as4a5s4a', 0, 400, 200, 'mahmoud ahmed mahmoud ahmed mahmoud ahmed', 2, 'hello there', 'mahmoud ahmed');

-- --------------------------------------------------------

--
-- Table structure for table `orders_headers`
--

DROP TABLE IF EXISTS `orders_headers`;
CREATE TABLE IF NOT EXISTS `orders_headers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ordersDetailId` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `brand` varchar(255) NOT NULL,
  `problem` varchar(255) NOT NULL,
  `cost` int(11) DEFAULT NULL,
  `status` enum('Success','Under Process','Not in stock') DEFAULT NULL,
  `customer` varchar(50) DEFAULT NULL,
  `phone` varchar(14) DEFAULT NULL,
  `paid` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ordersDetailId` (`ordersDetailId`)
) ENGINE=MyISAM AUTO_INCREMENT=119 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders_headers`
--

INSERT INTO `orders_headers` (`id`, `ordersDetailId`, `date`, `brand`, `problem`, `cost`, `status`, `customer`, `phone`, `paid`) VALUES
(73, 0, '2022-11-04', 'oppo', 'screen', 500, 'Under Process', 'mahmoud ahmed', '01228446256', 0),
(74, 0, '2022-11-04', 'oppo', 'screen', 500, 'Under Process', 'mahmoud ahmed', '01228446256', 0),
(75, 0, '2022-11-04', 'oppo', 'screen', 500, 'Under Process', 'mahmoud ahmed', '01228446256', 0),
(76, 0, '2022-11-04', 'oppo', 'screen', 500, 'Under Process', 'mahmoud ahmed', '01228446256', 0),
(77, 0, '2022-11-04', 'oppo', 'screen', 500, 'Under Process', 'mahmoud ahmed', '01228446256', 0),
(78, 0, '2022-11-04', 'oppo', 'screen', 500, 'Under Process', 'mahmoud ahmed', '01228446256', 0),
(79, 0, '2022-11-04', 'oppo', 'screen', 500, 'Under Process', 'mahmoud ahmed', '01228446256', 0),
(80, 0, '2022-11-04', 'oppo', 'screen', 500, 'Under Process', 'mahmoud ahmed', '01228446256', 0),
(81, 0, '2022-11-04', 'oppo', 'screen', 500, 'Under Process', 'mahmoud ahmed', '01228446256', 0),
(82, 0, '2022-11-04', 'oppo', 'screen', 500, 'Under Process', 'mahmoud ahmed', '01228446256', 0),
(83, 0, '2022-11-04', 'oppo', 'screen', 500, 'Under Process', 'mahmoud ahmed', '01228446256', 0),
(84, 0, '2022-11-04', 'oppo', 'screen', 500, 'Under Process', 'mahmoud ahmed', '01228446256', 0),
(85, 0, '2022-11-04', 'oppo', 'screen', 500, 'Under Process', 'mahmoud ahmed', '01228446256', 0),
(86, 0, '2022-11-04', 'oppo', 'screen', 500, 'Under Process', 'mahmoud ahmed', '01228446256', 0),
(87, 0, '2022-11-04', 'oppo', 'screen', 500, 'Under Process', 'mahmoud ahmed', '01228446256', 0),
(88, 0, '2022-11-04', 'oppo', 'screen', 500, 'Under Process', 'mahmoud ahmed', '01228446256', 0),
(89, 0, '2022-11-04', 'oppo', 'screen', 500, 'Under Process', 'mahmoud ahmed', '01228446256', 0),
(92, 0, '2022-11-04', 'oppo', 'screen', 500, 'Under Process', 'mahmoud ahmed', '01228446256', 0),
(93, 0, '2022-11-04', 'oppo', 'screen', 500, 'Under Process', 'mahmoud ahmed', '01228446256', 0),
(94, 0, '2022-11-04', 'oppo', 'screen', 500, 'Under Process', 'mahmoud ahmed', '01228446256', 0),
(95, 0, '2022-11-04', 'oppo', 'screen', 500, 'Under Process', 'mahmoud ahmed', '01228446256', 0),
(102, 0, '2022-11-04', 'oppo', 'screen', 300, 'Under Process', 'mahmoud ahmed', '01228446256', 0),
(118, 35, '2022-11-05', 'oppo', 'screen fiex', 400, 'Success', 'mohamed', '01228446256', 0);

-- --------------------------------------------------------

--
-- Table structure for table `update_transactions`
--

DROP TABLE IF EXISTS `update_transactions`;
CREATE TABLE IF NOT EXISTS `update_transactions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `ID` int(50) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `isAdmin` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID` (`ID`),
  UNIQUE KEY `username` (`username`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`ID`, `name`, `username`, `password`, `isAdmin`) VALUES
(1, 'mahmoud', 'admin1', '$2a$10$rUMFgTSBgJrNxIJ5mCTtQ.sN271i0RVHTdw4zd5eHnBlPktAfjlLS', 0),
(2, 'mahmoud ahmed ', 'admin2', '$2a$10$rUMFgTSBgJrNxIJ5mCTtQ.sN271i0RVHTdw4zd5eHnBlPktAfjlLS', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
