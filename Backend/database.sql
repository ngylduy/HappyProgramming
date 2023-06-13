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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table happyprogramming.mentor_profile: ~5 rows (approximately)
INSERT INTO `mentor_profile` (`mentorid`, `git_hub`, `linked_in`, `profession`, `avatar`, `introduction`, `userid`) VALUES
	(1, 'https://git_hub.com/ZellyFish18/HappyProgramming_SWP391', 'https://www.linked_in.com/in/pham-hong-phuc-657729255/', 'Developer', 'https://scontent.fhan3-4.fna.fbcdn.net/v/t1.6435-9/69087697_1091446437723634_8598457568051855360_n.jpg', 'Master of coding', 3),
	(2, NULL, NULL, 'AI Engineer', 'https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/100918565_1129332924115715_917140272641474560_n.jpg', 'Fullstack Dev', 2),
	(3, 'https://git_hub.com/Misaki1209', 'waiting', 'SE Engineer', 'https://scontent.fhan4-3.fna.fbcdn.net/v/t1.6435-9/105915929_1194900747569119_4328530478202858643_n.jpg', 'Graduate from FPT University', 7),
	(4, 'https://git_hub.com/huydqhe161614', 'waiting', 'Front End Developer', 'https://tse2.mm.bing.net/th?id=OIP.Ylq5JKzVFPj-cwYUZ-Z67wHaFj&pid=Api&P=0', 'Master of Front End', 9),
	(5, NULL, NULL, 'SE Engineer', 'https://yt3.ggpht.com/a/AATXAJz_IAfvnLyh9CK8Umif5Mv0FXzIuNeiLfaU8g=s900-c-k-c0xffffffff-no-rj-mo', 'Beautiful Mentor', 11);

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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table happyprogramming.mentor_regist: ~5 rows (approximately)
INSERT INTO `mentor_regist` (`registid`, `date`, `status`, `menteeid`) VALUES
	(1, '2000-01-01', 2, 7),
	(2, '2022-11-06', 2, 2),
	(3, '2022-11-08', 2, 3),
	(4, '2022-11-01', 1, 9),
	(5, '2022-11-01', 2, 11);

-- Dumping structure for table happyprogramming.mentor_skill
DROP TABLE IF EXISTS `mentor_skill`;
CREATE TABLE IF NOT EXISTS `mentor_skill` (
  `mentor_skillid` int NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `mentorid` int DEFAULT NULL,
  `skillid` int DEFAULT NULL,
  `years_of_exp` int DEFAULT NULL,
  PRIMARY KEY (`mentor_skillid`),
  KEY `FKb98gpwcltccf0sm3xbh2wtxa7` (`mentorid`),
  KEY `FKt6dxo1q5n9ubs3ki577tpux7r` (`skillid`),
  CONSTRAINT `FKb98gpwcltccf0sm3xbh2wtxa7` FOREIGN KEY (`mentorid`) REFERENCES `mentor_profile` (`mentorid`),
  CONSTRAINT `FKt6dxo1q5n9ubs3ki577tpux7r` FOREIGN KEY (`skillid`) REFERENCES `skill_category` (`skillid`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table happyprogramming.mentor_skill: ~14 rows (approximately)
INSERT INTO `mentor_skill` (`mentor_skillid`, `description`, `mentorid`, `skillid`, `years_of_exp`) VALUES
	(1, 'master of java coding', 1, 2, 11),
	(2, 'having WED201c certificate on cousera', 1, 5, 7),
	(3, 'having WED201c certificate on cousera', 1, 7, 3),
	(4, 'Fullstack Dev', 2, 5, 1),
	(5, 'Fullstack Dev', 2, 7, 1),
	(6, 'master of java coding', 1, 3, 4),
	(7, 'Certificate on Cousera', 3, 2, 5),
	(8, 'Can solve difficult problem', 3, 6, 2),
	(9, 'Master', 3, 4, 5),
	(10, 'M', 4, 1, 3),
	(11, 'M', 4, 3, 4),
	(13, 'M', 5, 2, 5),
	(14, 'M', 5, 4, 2),
	(15, 'M', 5, 6, 3);

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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table happyprogramming.rating: ~2 rows (approximately)
INSERT INTO `rating` (`rateid`, `comment`, `star`, `menteeid`, `mentorid`) VALUES
	(1, 'okay', 5, 6, 1),
	(2, 'very good', 4, 6, 2);

-- Dumping structure for table happyprogramming.request
DROP TABLE IF EXISTS `request`;
CREATE TABLE IF NOT EXISTS `request` (
  `requestid` int NOT NULL AUTO_INCREMENT,
  `content` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `menteeid` int DEFAULT NULL,
  `mentorid` int DEFAULT NULL,
  `mentor_status` int DEFAULT NULL,
  `status` int DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`requestid`),
  KEY `FKnb6dhp02rlrln0nxfj6t287nv` (`mentorid`),
  KEY `FKllv8ls2vhxhn4beklso81q8kb` (`menteeid`),
  CONSTRAINT `FKllv8ls2vhxhn4beklso81q8kb` FOREIGN KEY (`menteeid`) REFERENCES `user` (`id`),
  CONSTRAINT `FKnb6dhp02rlrln0nxfj6t287nv` FOREIGN KEY (`mentorid`) REFERENCES `mentor_profile` (`mentorid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table happyprogramming.request: ~7 rows (approximately)
INSERT INTO `request` (`requestid`, `content`, `date`, `link`, `menteeid`, `mentorid`, `mentor_status`, `status`, `title`) VALUES
	(1, 'I want a mentor who master at java so that he can help me improve my coding for my upcoming test', '2022-02-10', 'abc.com', 6, 1, 3, 2, 'Please help me inprove my coding logic'),
	(2, 'My designing skill is so bad, please help me improve it', '2002-10-15', 'https://meet.google.com/doe-rrwx-kmj', 5, 1, 1, 2, 'Web design'),
	(3, 'I have some error need to be fix immediatly', '2002-10-10', NULL, 5, 1, 0, 2, 'Check my code'),
	(4, 'test1', '2022-11-08', NULL, 6, 2, 0, 2, 'test1'),
	(5, 'test2', '2002-11-08', 'https://meet.google.com/doe-rrwx-kmj', 6, 3, 2, 0, 'test2'),
	(6, 'test3', '2022-11-08', NULL, 6, 4, 1, 1, 'test3'),
	(7, 'test5', '2022-11-08', NULL, 5, 1, 2, 2, 'test5');

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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table happyprogramming.request_skill: ~7 rows (approximately)
INSERT INTO `request_skill` (`request_skillid`, `requestid`, `skillid`) VALUES
	(1, 2, 6),
	(2, 3, 1),
	(3, 1, 1),
	(4, 4, 5),
	(5, 7, 3),
	(6, 6, 2),
	(7, 5, 4);

-- Dumping structure for table happyprogramming.skill_category
DROP TABLE IF EXISTS `skill_category`;
CREATE TABLE IF NOT EXISTS `skill_category` (
  `skillid` int NOT NULL AUTO_INCREMENT,
  `skill_name` varchar(255) DEFAULT NULL,
  `status` bit(1) DEFAULT NULL,
  PRIMARY KEY (`skillid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table happyprogramming.skill_category: ~12 rows (approximately)
INSERT INTO `skill_category` (`skillid`, `skill_name`, `status`) VALUES
	(1, 'C', b'1'),
	(2, 'C++', b'1'),
	(3, 'C#', b'1'),
	(4, 'Java', b'1'),
	(5, 'Javascript', b'1'),
	(6, 'Python', b'0'),
	(7, 'HTML/CSS', b'1'),
	(8, 'ASP.NET', b'0'),
	(9, 'NodeJS', b'0'),
	(10, 'VueJS', b'0'),
	(11, 'ReactJS', b'1'),
	(12, 'PHP', b'1');

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
  `role` int NOT NULL,
  `status` bit(1) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table happyprogramming.user: ~12 rows (approximately)
INSERT INTO `user` (`id`, `address`, `dob`, `email`, `fullname`, `gender`, `password`, `phone`, `role`, `status`, `username`) VALUES
	(1, '', '2022-01-01', 'admin@gmail.com', 'Admin', b'1', '123', '1234', 0, b'0', 'admin'),
	(2, 'Ha Noi', '2002-01-01', 'hieulv@gmail.com', 'Le Vu Hieu', b'1', '123', '0274087394', 2, b'1', 'hieulv'),
	(3, 'Ha Noi', '2002-01-01', 'khanhhg@gmail.com', 'Hoang Gia Khanh', b'1', '123', '0734086281', 2, b'0', 'khanhhg'),
	(4, NULL, '2002-01-01', 'vietbh@gmail,com', 'Bui Hoang Viet', b'1', '123', '0183047652', 3, b'1', 'vietbh'),
	(5, NULL, '1999-01-01', 'sangdt@gmail.com', 'Dao Tan Sang', b'1', '123', '0274058762', 3, b'1', 'sangdt'),
	(6, '', '2002-01-01', 'huonglm@gmail.com', 'Luu Minh Huong', b'1', '123', '63127386', 3, b'1', 'huonglm'),
	(7, 'Hai Phong', '2002-01-01', 'khaitd@gmail.com', 'Trinh Dinh Khai', b'1', '123', '08269487612', 2, b'1', 'khaitd'),
	(8, 'Ha Noi', '2002-01-01', 'landn@gmail.com', 'Dang Ngoc Lan', b'1', '123', '0862541725', 3, b'1', 'landn'),
	(9, 'Ha Noi', '2002-09-02', 'huydq@gmail.com', 'Doan Quoc Huy', b'1', '123', '08273921716', 2, b'1', 'huydq'),
	(10, 'Hai Phong', '2002-08-01', 'anhnm@gmail.com', 'Nguyen Minh Anh', b'0', '123', '0826038761', 0, b'1', 'anhnm'),
	(11, 'Bac Giang', '2002-01-01', 'ngoclh@gmail.com', 'Ly Hong Ngoc', b'0', '123', '0836472615', 2, b'1', 'ngoclh'),
	(12, 'Hai Duong', '2002-01-01', 'linhpn@gmail.com', 'Phan Nhat Linh', b'0', '123', '0937409876', 3, b'1', 'linhpn');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
