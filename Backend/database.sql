-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.33 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for happyprogramming
DROP DATABASE IF EXISTS `happyprogramming`;
CREATE DATABASE IF NOT EXISTS `happyprogramming` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `happyprogramming`;

-- Dumping structure for table happyprogramming.confirmation_token
DROP TABLE IF EXISTS `confirmation_token`;
CREATE TABLE IF NOT EXISTS `confirmation_token` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `confirmed_at` datetime(6) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `expires_at` datetime(6) NOT NULL,
  `token` varchar(255) NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKhjrtky9wbd6lbk7mu9tuddqgn` (`user_id`),
  CONSTRAINT `FKhjrtky9wbd6lbk7mu9tuddqgn` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table happyprogramming.confirmation_token: ~3 rows (approximately)
INSERT INTO `confirmation_token` (`id`, `confirmed_at`, `created_at`, `expires_at`, `token`, `user_id`) VALUES
	(1, '2023-06-24 14:22:03.869640', '2023-06-24 14:21:41.840574', '2023-06-24 14:36:41.840574', '65e15c79-09b8-492f-9c97-a813e777a951', 1),
	(2, '2023-06-24 14:26:02.510077', '2023-06-24 14:25:29.756537', '2023-06-24 14:40:29.756537', '0444748b-7723-4676-aa6a-bf9d311aa7c9', 1),
	(3, '2023-06-24 21:54:42.498890', '2023-06-24 21:54:09.935076', '2023-06-24 22:09:09.935076', 'a75f3dcf-5c62-4be8-a9d8-d2cd25b4d3bb', 4);

-- Dumping structure for table happyprogramming.mentor_profile
DROP TABLE IF EXISTS `mentor_profile`;
CREATE TABLE IF NOT EXISTS `mentor_profile` (
  `mentorid` int NOT NULL AUTO_INCREMENT,
  `git_hub` varchar(255) DEFAULT NULL,
  `linked_in` varchar(255) DEFAULT NULL,
  `profession` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `introduction` varchar(255) DEFAULT NULL,
  `userid` int DEFAULT NULL,
  PRIMARY KEY (`mentorid`),
  KEY `FKggsxu0vvlx7txmcyl555cl68i` (`userid`),
  CONSTRAINT `FKggsxu0vvlx7txmcyl555cl68i` FOREIGN KEY (`userid`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table happyprogramming.mentor_profile: ~0 rows (approximately)

-- Dumping structure for table happyprogramming.mentor_regist
DROP TABLE IF EXISTS `mentor_regist`;
CREATE TABLE IF NOT EXISTS `mentor_regist` (
  `registid` int NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `status` int DEFAULT NULL,
  `menteeid` int DEFAULT NULL,
  PRIMARY KEY (`registid`),
  KEY `FKi9s84d1qmwanvw05dwpl3w68q` (`menteeid`),
  CONSTRAINT `FKi9s84d1qmwanvw05dwpl3w68q` FOREIGN KEY (`menteeid`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table happyprogramming.mentor_regist: ~0 rows (approximately)

-- Dumping structure for table happyprogramming.mentor_skill
DROP TABLE IF EXISTS `mentor_skill`;
CREATE TABLE IF NOT EXISTS `mentor_skill` (
  `mentor_skillid` int NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `years_of_exp` int DEFAULT NULL,
  `mentorid` int DEFAULT NULL,
  `skillid` int DEFAULT NULL,
  PRIMARY KEY (`mentor_skillid`),
  KEY `FKb98gpwcltccf0sm3xbh2wtxa7` (`mentorid`),
  KEY `FKt6dxo1q5n9ubs3ki577tpux7r` (`skillid`),
  CONSTRAINT `FKb98gpwcltccf0sm3xbh2wtxa7` FOREIGN KEY (`mentorid`) REFERENCES `mentor_profile` (`mentorid`),
  CONSTRAINT `FKt6dxo1q5n9ubs3ki577tpux7r` FOREIGN KEY (`skillid`) REFERENCES `skill_category` (`skillid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table happyprogramming.mentor_skill: ~0 rows (approximately)

-- Dumping structure for table happyprogramming.password_reset_token
DROP TABLE IF EXISTS `password_reset_token`;
CREATE TABLE IF NOT EXISTS `password_reset_token` (
  `id` int NOT NULL AUTO_INCREMENT,
  `confirmed_at` datetime(6) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `expires_at` datetime(6) NOT NULL,
  `token` varchar(255) NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table happyprogramming.password_reset_token: ~5 rows (approximately)
INSERT INTO `password_reset_token` (`id`, `confirmed_at`, `created_at`, `expires_at`, `token`, `user_id`) VALUES
	(1, '2023-06-23 18:06:12.312661', '2023-06-23 18:04:07.831124', '2023-06-23 18:19:07.831124', '0a74de67-89d9-4653-bdf4-f1f40dd1099a', 1),
	(2, NULL, '2023-06-23 18:08:27.721701', '2023-06-23 18:23:27.721701', '90b8b709-3b36-4f9f-bf2c-82a013b347dc', 1),
	(3, '2023-06-23 18:09:12.479043', '2023-06-23 18:08:59.786426', '2023-06-23 18:23:59.786426', 'a89f421b-775c-4c73-85d5-f0d1a725cee4', 1),
	(4, '2023-06-23 18:11:00.855736', '2023-06-23 18:10:03.815292', '2023-06-23 18:25:03.815292', '34671dda-2b4c-4dc8-a8f4-3ef27e8615fc', 1),
	(5, '2023-06-23 18:12:09.326391', '2023-06-23 18:11:48.361348', '2023-06-23 18:26:48.361348', 'e028bdc7-ed1c-46b6-bf80-e501a1f62fdd', 1);

-- Dumping structure for table happyprogramming.rating
DROP TABLE IF EXISTS `rating`;
CREATE TABLE IF NOT EXISTS `rating` (
  `rateid` int NOT NULL AUTO_INCREMENT,
  `comment` varchar(255) DEFAULT NULL,
  `star` int NOT NULL,
  `menteeid` int DEFAULT NULL,
  `mentorid` int DEFAULT NULL,
  PRIMARY KEY (`rateid`),
  KEY `FKcwjjxpcsjrp6vpgw5hi7x5tbg` (`menteeid`),
  KEY `FKan2sh3n3lag675mnhhukxfyr9` (`mentorid`),
  CONSTRAINT `FKan2sh3n3lag675mnhhukxfyr9` FOREIGN KEY (`mentorid`) REFERENCES `mentor_profile` (`mentorid`),
  CONSTRAINT `FKcwjjxpcsjrp6vpgw5hi7x5tbg` FOREIGN KEY (`menteeid`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table happyprogramming.rating: ~0 rows (approximately)

-- Dumping structure for table happyprogramming.request
DROP TABLE IF EXISTS `request`;
CREATE TABLE IF NOT EXISTS `request` (
  `requestid` int NOT NULL AUTO_INCREMENT,
  `content` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `mentor_status` int DEFAULT NULL,
  `status` int DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `mentorid` int DEFAULT NULL,
  `menteeid` int DEFAULT NULL,
  PRIMARY KEY (`requestid`),
  KEY `FKnb6dhp02rlrln0nxfj6t287nv` (`mentorid`),
  KEY `FKllv8ls2vhxhn4beklso81q8kb` (`menteeid`),
  CONSTRAINT `FKllv8ls2vhxhn4beklso81q8kb` FOREIGN KEY (`menteeid`) REFERENCES `user` (`id`),
  CONSTRAINT `FKnb6dhp02rlrln0nxfj6t287nv` FOREIGN KEY (`mentorid`) REFERENCES `mentor_profile` (`mentorid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table happyprogramming.request: ~0 rows (approximately)

-- Dumping structure for table happyprogramming.request_skill
DROP TABLE IF EXISTS `request_skill`;
CREATE TABLE IF NOT EXISTS `request_skill` (
  `request_skillid` int NOT NULL AUTO_INCREMENT,
  `requestid` int DEFAULT NULL,
  `skillid` int DEFAULT NULL,
  PRIMARY KEY (`request_skillid`),
  KEY `FKbhroq7lx090jufhflw8o2ygxj` (`requestid`),
  KEY `FKb6ujbjvd4ld1op1vl6xk4mfy5` (`skillid`),
  CONSTRAINT `FKb6ujbjvd4ld1op1vl6xk4mfy5` FOREIGN KEY (`skillid`) REFERENCES `skill_category` (`skillid`),
  CONSTRAINT `FKbhroq7lx090jufhflw8o2ygxj` FOREIGN KEY (`requestid`) REFERENCES `request` (`requestid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table happyprogramming.request_skill: ~0 rows (approximately)

-- Dumping structure for table happyprogramming.roles
DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table happyprogramming.roles: ~4 rows (approximately)
INSERT INTO `roles` (`id`, `name`) VALUES
	(1, 'USER_ADMIN'),
	(2, 'USER_MENTOR'),
	(3, 'USER_MENTEE'),
	(4, 'USER_USER');

-- Dumping structure for table happyprogramming.skill_category
DROP TABLE IF EXISTS `skill_category`;
CREATE TABLE IF NOT EXISTS `skill_category` (
  `skillid` int NOT NULL AUTO_INCREMENT,
  `skill_name` varchar(255) DEFAULT NULL,
  `status` bit(1) DEFAULT NULL,
  PRIMARY KEY (`skillid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table happyprogramming.skill_category: ~7 rows (approximately)
INSERT INTO `skill_category` (`skillid`, `skill_name`, `status`) VALUES
	(1, 'JavaScript', b'1'),
	(2, 'HTML', b'1'),
	(3, 'CSS', b'1'),
	(4, 'Ruby', b'1'),
	(5, 'Java', b'1'),
	(6, 'C#', b'1'),
	(7, 'ReactJS', b'1');

-- Dumping structure for table happyprogramming.user
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `gender` bit(1) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `status` bit(1) NOT NULL,
  `username` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_sb8bbouer5wak8vyiiy4pf2bx` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table happyprogramming.user: ~4 rows (approximately)
INSERT INTO `user` (`id`, `address`, `dob`, `email`, `fullname`, `gender`, `password`, `phone`, `status`, `username`) VALUES
	(1, 'Hanoi', '2002-02-28', 'ngylduy@gmail.com', 'Admin System', b'1', '$2a$10$q8m5QCNObB95ROYiCbtBouHirSixNlD6L3EcO6ZUIH8RQ5g9XEY9K', '0587654321', b'1', 'admin'),
	(2, 'HCM', '3902-04-18', 'nlduy.it@gmail.com', 'Nguyen Luong Duy', b'1', '$2a$10$K.m0pCNH3/MmcNvqVZZjj.EtVEtLmZ3NK9w5Wv5VCLEiokqs7SuYO', '0323456789', b'1', 'duynl'),
	(3, 'Da Nang', '3902-03-11', 'huongdn@gmail.com', 'Do Ngan Huong', b'1', '$2a$10$M/Z36zZvVk9qM/3QscnYmu5WMZFX.s0cK4KlTk.UP4Z9/pXHGjnzG', '0923456789', b'1', 'huongdn'),
	(4, 'Hanoi - Viet Nam', '2012-02-21', 'duymusical@gmail.com', 'Le Minh Cuong', b'1', '$2a$10$9dE0cBTHedFb3s7tXSj0WOJt4yohPL.cNTfW6nLCekqrpg3K9VRJi', '0487654321', b'1', 'cuonglm');

-- Dumping structure for table happyprogramming.user_role
DROP TABLE IF EXISTS `user_role`;
CREATE TABLE IF NOT EXISTS `user_role` (
  `user_id` int NOT NULL,
  `role_id` int NOT NULL,
  KEY `FKt7e7djp752sqn6w22i6ocqy6q` (`role_id`),
  KEY `FK859n2jvi8ivhui0rl0esws6o` (`user_id`),
  CONSTRAINT `FK859n2jvi8ivhui0rl0esws6o` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKt7e7djp752sqn6w22i6ocqy6q` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table happyprogramming.user_role: ~4 rows (approximately)
INSERT INTO `user_role` (`user_id`, `role_id`) VALUES
	(2, 3),
	(3, 2),
	(4, 3),
	(1, 1);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
