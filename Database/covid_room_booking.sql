-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 21, 2021 at 01:36 PM
-- Server version: 10.3.15-MariaDB
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `covid_room_booking`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookingtable`
--

CREATE TABLE `bookingtable` (
  `bookingId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `roomId` int(11) NOT NULL,
  `roomName` varchar(50) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bookingtable`
--

INSERT INTO `bookingtable` (`bookingId`, `userId`, `userName`, `roomId`, `roomName`, `date`) VALUES
(1, 2, 'aminul', 1, 'Office 1', '2021-02-20'),
(2, 1, 'saqib', 4, 'Big office', '2021-02-20'),
(3, 1, 'aminul', 4, 'Big office', '2021-02-20'),
(4, 1, 'saqib', 4, 'Big office', '2021-02-20'),
(5, 1, 'saqib', 3, 'office 3', '2021-02-21'),
(6, 1, 'saqib', 4, 'Big office', '2021-02-21'),
(7, 1, 'saqib', 4, 'Big office', '2021-02-22'),
(8, 1, 'saqib', 4, 'Big office', '2021-02-22'),
(9, 1, 'saqib', 4, 'Big office', '2021-02-22'),
(10, 1, 'saqib', 2, 'office 2', '2021-02-21'),
(11, 1, 'saqib', 4, 'Big office', '2021-02-21'),
(12, 1, 'saqib', 4, 'Big office', '2021-02-21'),
(13, 1, 'saqib', 5, 'Boss office', '2021-02-21'),
(14, 1, 'saqib', 5, 'Boss office', '2021-02-26'),
(15, 1, 'saqib', 2, 'office 2', '2021-02-16'),
(16, 8, 'angel', 1, 'office 1', '2021-02-21');

-- --------------------------------------------------------

--
-- Table structure for table `roomtable`
--

CREATE TABLE `roomtable` (
  `roomId` int(11) NOT NULL,
  `roomName` varchar(50) NOT NULL,
  `roomCapacity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `roomtable`
--

INSERT INTO `roomtable` (`roomId`, `roomName`, `roomCapacity`) VALUES
(1, 'office 1', 1),
(2, 'office 2', 1),
(3, 'office 3', 2),
(4, 'Big office', 3),
(5, 'Boss office', 1),
(6, 'Additional office', 2);

-- --------------------------------------------------------

--
-- Table structure for table `usertable`
--

CREATE TABLE `usertable` (
  `userId` int(11) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usertable`
--

INSERT INTO `usertable` (`userId`, `userName`, `password`) VALUES
(1, 'saqib', '12356#'),
(2, 'aminul', '123456'),
(3, 'islam', '123456'),
(4, 'saqib29', '123456#'),
(5, 'aminul69', '123456#'),
(6, 'frankaiz', '123456#'),
(7, 'fardin', '14725#'),
(8, 'angel', '12345#'),
(9, 'aishem', '12365#');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookingtable`
--
ALTER TABLE `bookingtable`
  ADD PRIMARY KEY (`bookingId`),
  ADD KEY `roomId` (`roomId`);

--
-- Indexes for table `roomtable`
--
ALTER TABLE `roomtable`
  ADD PRIMARY KEY (`roomId`);

--
-- Indexes for table `usertable`
--
ALTER TABLE `usertable`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookingtable`
--
ALTER TABLE `bookingtable`
  MODIFY `bookingId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `roomtable`
--
ALTER TABLE `roomtable`
  MODIFY `roomId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `usertable`
--
ALTER TABLE `usertable`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bookingtable`
--
ALTER TABLE `bookingtable`
  ADD CONSTRAINT `bookingtable_ibfk_1` FOREIGN KEY (`roomId`) REFERENCES `roomtable` (`roomId`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
