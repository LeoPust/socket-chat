CREATE DATABASE  IF NOT EXISTS `socket_chat` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `socket_chat`;
-- MySQL dump 10.13  Distrib 5.7.9, for Win64 (x86_64)
--
-- Host: localhost    Database: socket_chat
-- ------------------------------------------------------
-- Server version	5.7.10-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tokens`
--

DROP TABLE IF EXISTS `tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tokens` (
  `token` longtext NOT NULL,
  `userId` int(200) NOT NULL,
  `expires` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tokens`
--

LOCK TABLES `tokens` WRITE;
/*!40000 ALTER TABLE `tokens` DISABLE KEYS */;
INSERT INTO `tokens` VALUES ('74DD68D546F4AC5B55CA49798BFE87B5958ED2D02D651703339DBF2A4FEA78C612B2C56FCB28BB9E96964951FB3081E2',1,'2017-02-01 03:09:33'),('CAF9CED260B701F42946920E0B14C902073E4ACC56F7B76A7A55F66347792F0BAD27CB2DA75C41D20A2270F7A1334E07',1,'2017-02-01 03:20:18'),('E9205F7598A694697A101DFE24693B8DDD14A5FB774D5263F0F63C8B26C7A6A9C39B4B4CD882DA8F10EA926670ABC71C',1,'2017-02-01 04:07:38'),('106E04967C4EDC5CE9D1373002A7FA23DCFED870366DB3A89271400D8423A92F2AAD9EEC1D744837A474517AC18C82AF',1,'2017-02-01 04:11:39'),('F753F6BEC66FCCD2B58B02650492726DFCB8AFF30F36DD26EABCAF2F81041BE7D918B8D0C7037B495CB4D74F8D4741DB',1,'2017-02-01 04:12:20'),('347A37E456119C0E38E90D764CF2EC46B022B53D4D7FA68CEC79F8CF1D7D697E189DA886A9DDD82A14FE9C8058F3B56C',1,'2017-02-01 04:13:46'),('75C21DBA745FCC2A0EE16DB3779216A8AF4C6E04ABD1F0E1E6CE7653B5EE2EDC7176A9B26C878B8C42A300956D861601',1,'2017-02-01 04:14:29'),('BA0CC8483E7C11B7631209B30EB9E1B40B3C5A92D46801A2E812B9078137B40E613A354DE93A5FE8955B902E82AAC97A',1,'2017-02-01 04:15:23'),('641CAD2F19F25D7723B2269178FD9AC9C28D6BDCC6DC904CBEAFCF8AC598B5F274750215C69E27CA0775889AEB42BE48',1,'2017-02-01 04:25:43'),('350E37B85EE16DBC41385B93BF2B62F23E04FECA2638EFB4E7407DF6364A17C46C05968470C3E61652283F3BF0C77D64',1,'2017-02-01 04:26:52'),('06FF0CF005EB486D41883DFBC021C4184DB13AB71DEF1383744F1D2C80F847900B682233CB6F10E73670F9FF6221C7A0',1,'2017-02-01 04:28:11'),('165217A74E9BDDF644F44709E1B301257F0D0B323188B47EFBB5FA85DFDC700BBCCDC9C3F8B1811C1480BA5286F277A6',1,'2017-02-01 04:29:26'),('C5A70DE4A5F8E82121C305EA3E5370F20B9C0B8D273DECC6238620ADB082AFBCD71DC3C647C95BC0FC3B89701AD518A4',1,'2017-02-01 04:30:15'),('980D79131EEE3E4B4A8C12A07642137335815B8EB37F668F6343205E5D1D495AE411932D3FD380899E6C4F18031FBA1C',1,'2017-02-03 13:57:55'),('3BC067311F43302A8DE8E395910652642600500B42F734B5D755E974B8D0BE8618E272B30C6A2908A1583BAEBFECCBF6',1,'2017-02-03 20:38:24'),('3BC067311F43302A8DE8E3959106526488A1A9BF08490BFB0D585CC6F04577CF7D435194C92C4DA6481EF14FDE7B7BA3',1,'2017-02-03 20:38:30'),('7E8180BD07E2C67A4F20FF774764106226A81D85B5D65F7D07D6543871A2C991C3F1F57B0A8FFD28C38A1461A191B04E',1,'2017-02-03 20:39:08'),('7E8180BD07E2C67A4F20FF77476410624DEC9798160E23BF15567CDB5CB42A100769279996AC79D69C4262903423D352',1,'2017-02-03 20:39:34'),('CC28D8C99281289DB717A5C19082965F88A1A9BF08490BFB0D585CC6F04577CF81DF3449477A48133CCF1779E303DF51',1,'2017-02-03 20:40:30'),('D17DC1F892B1AF52D2F3CF2CE579A9259E59D5A93645FA2E98DA0D4CA4A6B15768E8B178E561D9AC1E32387E81CD6CE2',1,'2017-02-03 20:58:17'),('0906F1198F88B3F78FF1B639F1BC5413C6C9C9B659DF870552C9F448D988443FE539AA90519B4680F59BAD2A79A229BD',2,'2017-02-03 21:55:23');
/*!40000 ALTER TABLE `tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(200) NOT NULL AUTO_INCREMENT,
  `login` varchar(2000) NOT NULL,
  `password` longtext,
  `email` varchar(2000) NOT NULL,
  `first_name` varchar(2000) DEFAULT NULL,
  `last_name` varchar(2000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Leo','*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9','pust.leo@gmail.com','Leo',NULL),(2,'Ololo','*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9','ololo@gmail.com','Oloshka','Ololoshev'),(3,'Petrov','*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9','petrov@gmail.com','Pert','Petrov');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'socket_chat'
--
/*!50106 SET @save_time_zone= @@TIME_ZONE */ ;
/*!50106 DROP EVENT IF EXISTS `clear::tokens` */;
DELIMITER ;;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;;
/*!50003 SET character_set_client  = utf8 */ ;;
/*!50003 SET character_set_results = utf8 */ ;;
/*!50003 SET collation_connection  = utf8_general_ci */ ;;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;;
/*!50003 SET @saved_time_zone      = @@time_zone */ ;;
/*!50003 SET time_zone             = 'SYSTEM' */ ;;
/*!50106 CREATE*/ /*!50117 DEFINER=`root`@`localhost`*/ /*!50106 EVENT `clear::tokens` ON SCHEDULE EVERY 1 DAY STARTS '2017-01-25 04:56:46' ON COMPLETION NOT PRESERVE ENABLE DO call `token::clear`() */ ;;
/*!50003 SET time_zone             = @saved_time_zone */ ;;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;;
/*!50003 SET character_set_client  = @saved_cs_client */ ;;
/*!50003 SET character_set_results = @saved_cs_results */ ;;
/*!50003 SET collation_connection  = @saved_col_connection */ ;;
DELIMITER ;
/*!50106 SET TIME_ZONE= @save_time_zone */ ;

--
-- Dumping routines for database 'socket_chat'
--
/*!50003 DROP PROCEDURE IF EXISTS `room::users` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `room::users`(
  in `room::data::token` LONGTEXT,
  in `room::data::offset` int(200),
  in `room::data::limit` int(200)
  )
BEGIN
    declare usrID int(200);
    DECLARE offsetNum int(200);
    DECLARE limitNum int(200);

    SELECT userId into usrID from tokens WHERE token = `room::data::token` and expires > NOW();

    IF NOT isnull(usrID) THEN
      IF isnull(`room::data::offset`) OR isnull(`room::data::limit`) THEN
          select u.id,u.login from users as u where u.id <> usrID;
      ELSE
          BEGIN
            set limitNum = `room::data::limit`;
            set offsetNum = `room::data::offset`;
            select u.id,u.login from users as u where id <> usrID ORDER BY u.id LIMIT limitNum offset offsetNum;
          END;
      END IF;
    ELSE
      select false as 'result';
    END IF;
  END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `token::clear` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `token::clear`()
BEGIN
    DECLARE times DATETIME;
    set times = NOW();
    DELETE FROM tokens WHERE expires < times;
  END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `user::authorization` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `user::authorization`(
  in `user::data::login` VARCHAR(2000),
  in `user::data::password` LONGTEXT
)
BEGIN
    DECLARE usrID int(200);
    DECLARE usrToken LONGTEXT;
    DECLARE usrExpires DATETIME;

    select id into usrID FROM users WHERE  login = `user::data::login` AND password = PASSWORD(`user::data::password`);

    if NOT isnull(usrID) THEN
      BEGIN
        set usrExpires = NOW() + INTERVAL 1 WEEK;
        set usrToken = HEX(AES_ENCRYPT(CONCAT(NOW(),`user::data::login`,usrExpires),'SOCKET::CHAT'));
        INSERT INTO tokens (token,userId, expires) VALUES (usrToken,usrID,usrExpires);
        SELECT usrToken as 'token', usrExpires as 'expires', usrID as 'id',true as 'status';
      END;
      ELSE 
        select false as 'status';
    END IF;
  END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `user::profile` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `user::profile`(in `user::data::token` LONGTEXT)
BEGIN 
    DECLARE usrID int(200);
    
    SELECT userId INTO usrID FROM tokens WHERE token = `user::data::token` and expires > NOW();
    
    if isnull(usrID) THEN
        select false as 'result';
      else
        select login,first_name,last_name from users WHERE id = usrID;
    END IF;
  END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `user::registration` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `user::registration`(
    in `user::data::login` VARCHAR(2000),
    in `user::data::password` LONGTEXT,
    in `user::data::email` VARCHAR(2000),
    in `user::data::first_name` VARCHAR(2000),
    in `user::data::last_name` VARCHAR(2000)
  )
BEGIN 
    DECLARE usrID int(200);
    
    select id into usrID FROM users where login = `user::data::login`;
    
    if ISNULL(usrID) THEN 
      begin 
        INSERT INTO users (login, password, email, first_name, last_name)
          VALUES (`user::data::login`,PASSWORD(`user::data::password`),`user::data::email`,`user::data::first_name`,`user::data::last_name`);
        select true as 'status';
      END;
      ELSE 
        select false as 'status';
    END IF;
  END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `user::token` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `user::token`(in `user::data::token` LONGTEXT)
BEGIN

  DECLARE usrID int(200);
  select userId into usrID from tokens where token = `user::data::token` AND expires > NOW();
    
  IF isnull(usrID) THEN 
    select false as 'result';
    ELSE 
    select token,expires,usrID as 'id',true as 'result' from tokens where token = `user::data::token` AND expires > NOW();
  END IF;
  
  END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-01-29  0:47:09
