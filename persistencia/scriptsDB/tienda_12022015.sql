-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         5.6.19 - MySQL Community Server (GPL)
-- SO del servidor:              Win64
-- HeidiSQL Versión:             8.3.0.4694
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Volcando estructura de base de datos para tienda
CREATE DATABASE IF NOT EXISTS `tienda` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `tienda`;


-- Volcando estructura para tabla tienda.articulo
CREATE TABLE IF NOT EXISTS `articulo` (
  `idArticulo` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `nombreArticulo` varchar(50) DEFAULT NULL,
  `descripcionArticulo` text,
  `precioArticulo` decimal(10,2) unsigned DEFAULT NULL,
  `imagenArticulo` varchar(50) DEFAULT NULL,
  `idPlataforma` int(10) unsigned DEFAULT NULL,
  `plataforma` varchar(50) DEFAULT NULL,
  `tipoArticulo` varchar(50) DEFAULT NULL,
  `ventaArticulo` int(11) DEFAULT NULL,
  `ofertaArticulo` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`idArticulo`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla tienda.articulo: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `articulo` DISABLE KEYS */;
INSERT INTO `articulo` (`idArticulo`, `nombreArticulo`, `descripcionArticulo`, `precioArticulo`, `imagenArticulo`, `idPlataforma`, `plataforma`, `tipoArticulo`, `ventaArticulo`, `ofertaArticulo`) VALUES
	(1, 'Play Station 4 Negra', 'Consola 4ª gen.', 399.00, 'ps4Negra', 1, 'PS4', 'consola', 50, NULL),
	(2, 'Xbox One Generica', 'Consola 4ª gen.', 499.99, 'xboxOneGenerica', 2, 'XONE', 'consola', 32, NULL),
	(6, 'Play Station 4 Blanca', 'Consola 4ª gen.', 419.00, 'ps4Blanca', 1, 'PS4', 'consola', 15, NULL),
	(7, 'Play Station 4 Gold', 'Consola 4ª gen.', 459.95, 'ps4Gold', 1, 'PS4', 'consola', 50, NULL),
	(8, 'Xbox One Blanca ', 'Consola 4ª gen.', 499.99, 'xboxOneBlanca', 2, 'XONE', 'consola', 32, NULL),
	(9, 'Xbox One Especial', 'Consola 4ª gen.', 550.00, 'xboxOneEspecial', 2, 'XONE', 'consola', 12, NULL),
	(10, '3DS Blanca ', 'Consola Portatil.', 199.99, '3DSBlanca', 4, '3DS', 'consola', 66, NULL),
	(11, '3DS Negra ', 'Consola Portatil.', 199.99, '3DSNegra', 4, '3DS', 'consola', 54, NULL),
	(12, '3DS Zelda ', 'Consola Portatil.', 259.99, '3DSZelda', 4, '3DS', 'consola', 20, NULL),
	(13, 'Assassins Creed Unity', 'Juego de aventura', 60.00, 'assassinsCreedUnityXboxOne', 2, 'XONE', 'videojuego', 3, 10.00),
	(14, 'Destiny', 'Juego Futurista', 62.45, 'destinyXboxOne', 2, 'XONE', 'videojuego', 3, 10.00),
	(15, 'Forza MotorSport', 'Juego de conducción', 60.00, 'forzaMotorSportXboxOne', 2, 'XONE', 'videojuego', 3, 10.00),
	(16, 'Halo Master Chief', 'Juego de Acción', 60.00, 'haloMasterXboxOne', 2, 'XONE', 'videojuego', 3, 10.00),
	(17, 'Call of Duty AdvancedWarfare', 'Juego Shooter', 45.50, 'callOfDutyAdvancedWarfarePS4', 1, 'PS4', 'videojuego', 5, 20.00),
	(18, 'Destiny', 'Juego Futurista', 49.00, 'destinyPS4', 1, 'PS4', 'videojuego', 7, 20.00),
	(19, 'Lego Marvel SuperHeroes', 'Juego de Acción', 58.00, 'legoMarvelSuperHeroesPS4', 1, 'PS4', 'videojuego', 5, 20.00),
	(20, 'Second Son', 'Juego Plataformas', 20.00, 'secondSonPS4', 4, 'PS4', 'videojuego', 3, 20.00),
	(21, 'The Last of Us', 'Juego Shooter', 39.00, 'theLastOfUsPS4', 1, 'PS4', 'videojuego', 5, 20.00),
	(22, 'Watch Dogs', 'Juego Shooter', 50.10, 'watchDogsPS4', 1, 'PS4', 'videojuego', 6, 20.00),
	(23, 'AdventureTime', 'Juego de Aventuras', 35.00, 'adventureTime3DS', 4, '3DS', 'videojuego', 5, 20.00),
	(24, 'Lego StarWarsIII', 'Juego de Plataformas', 45.00, 'legoStarWarsIII3DS', 1, '3DS', 'videojuego', 5, 20.00),
	(25, 'Pokemon Rumble Blast', 'Juego de Pokemon', 55.00, 'pokemonRumbleBlast3DS', 4, '3DS', 'videojuego', 5, 20.00),
	(26, 'Rayman', 'Juego de Aventuras', 45.00, 'rayman3DS', 4, '3DS', 'videojuego', 5, 20.00),
	(27, 'Funky', 'Juego de Aventuras', 29.30, 'funkyWIIU', 5, 'WII U', 'videojuego', 5, 20.00),
	(28, 'Super Smash Brosh U', 'Juego de Peleas', 30.65, 'superSmashWIIU', 5, 'WII U', 'videojuego', 5, 20.00),
	(29, 'Lego City UnderCover', 'Juego de Aventuras', 33.00, 'legoCityUndercoverWIIU', 5, 'WII U', 'videojuego', 5, 20.00),
	(30, 'New Super Mario Bros', 'Juego de Plataformas', 30.00, 'newSuperMarioBrosWIIU', 5, 'WII U', 'videojuego', 5, 20.00),
	(31, 'Lego City UnderCover', 'Juego de Aventuras', 45.20, 'legoCityUndercoverWIIU', 5, 'WII U', 'videojuego', 5, 20.00),
	(32, 'Mando', 'Accesorio', 49.00, 'mandoWIIU', 5, 'WII U', 'consola', 32, NULL),
	(33, 'Cascos', 'Accesorio', 499.00, 'cascosPC', 3, 'PC', 'consola', 32, NULL),
	(34, 'Mouse-Gaming', 'Accesorio', 25.10, 'mouseGamerPC', 3, 'PC', 'consola', 32, NULL),
	(35, 'Teclado-Gaming', 'Accesorio', 59.00, 'tecladoGamerPC', 3, 'PC', 'consola', 32, NULL),
	(36, 'Teclado-GamingLogitech', 'Accesorio', 72.00, 'tecladoGamerLogitechPC', 3, 'PC', 'consola', 32, NULL);
/*!40000 ALTER TABLE `articulo` ENABLE KEYS */;


-- Volcando estructura para tabla tienda.detallepedido
CREATE TABLE IF NOT EXISTS `detallepedido` (
  `idDetallePedido` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `idArticulo` int(11) unsigned DEFAULT NULL,
  `cantidadArticulo` int(11) DEFAULT NULL,
  `precioArticulo` decimal(10,2) unsigned DEFAULT NULL,
  `idPedido` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`idDetallePedido`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla tienda.detallepedido: ~6 rows (aproximadamente)
/*!40000 ALTER TABLE `detallepedido` DISABLE KEYS */;
INSERT INTO `detallepedido` (`idDetallePedido`, `idArticulo`, `cantidadArticulo`, `precioArticulo`, `idPedido`) VALUES
	(1, 2, 5, 20.00, 1),
	(2, 18, 1, 5.00, 1),
	(3, 12, 2, 12.00, 2),
	(4, 32, 2, 25.00, 2),
	(5, 18, 1, 22.00, 3),
	(6, 6, 3, 11.00, 4);
/*!40000 ALTER TABLE `detallepedido` ENABLE KEYS */;


-- Volcando estructura para tabla tienda.noticia
CREATE TABLE IF NOT EXISTS `noticia` (
  `idNoticia` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `tituloNoticia` varchar(100) DEFAULT NULL,
  `textoNoticia` text,
  `imagenNoticia` varchar(100) DEFAULT NULL,
  `autorNoticia` varchar(50) DEFAULT NULL,
  `fechaNoticia` date DEFAULT NULL,
  `plataforma` varchar(50) DEFAULT NULL,
  `videoNoticia` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idNoticia`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla tienda.noticia: ~5 rows (aproximadamente)
/*!40000 ALTER TABLE `noticia` DISABLE KEYS */;
INSERT INTO `noticia` (`idNoticia`, `tituloNoticia`, `textoNoticia`, `imagenNoticia`, `autorNoticia`, `fechaNoticia`, `plataforma`, `videoNoticia`) VALUES
	(1, 'Tierra Media : Shadow Of Mordor', 'Este juego basado en el rico universo de J.R.R. Tolkien nos sitúa en el período de tiempo que transcurre entre El Hobbit y El Señor de los Anillos, controlando a Talion, un aventurero que ha visto a su familia asesinada justo el día en el que Sauron vuelve a Mordor para preparar su ofensiva contra los hombres y los elfos. Acción, aventura y rol en la Tierra Media, con toma de decisiones que afectarán a la historia. ', 'ShadowOfMordor.jpg', 'Martin Gomez', '2014-10-01', 'PC', '4rbOTQhasnM'),
	(2, 'Minecraft tiene nuevo dueño', 'La empresa creadora del videojuego Minecraft, la sueca Mojang, ha anunciado que ha sido adquirida por el gigante estadounidense Microsoft por 2.500 millones de dólares (1.935.000.000 euros aproximadamente).Los fundadores de la empresa, grandes ganadores en esta operación, han anunciado su salida de la misma en la página web de Mojang. La operación aún está pendiente de las condiciones habituales de cierre y del análisis de los organismos reguladores, por lo que la compañía confía en que se pueda cerrar a finales de este año. Asimismo, Microsoft estima que la operación empezará a ser rentable a partir del próximo año fiscal.', 'minecraft.jpg', 'Jonathan Hidalgo', '2014-10-04', 'PC', 'kobFwRJsvQE'),
	(3, 'Destiny', 'Un videojuego de acción y aventura donde los usuarios crean y hacen evolucionar a su personaje para convertirse en leyendas de su propia historia por salvar a la Tierra.', 'Destiny.jpg', 'Francisco Alegre', '2014-11-10', 'PS4', 'dEF-HHsYk-U'),
	(4, 'Alien Isolation', 'Creative Assembly regresa a las raíces de la saga Alien en una entrega que recupera la esencia de la primera película, dirigida por Ridley Scott. Un survival horror en primera persona en el que controlamos a Amanda Ripley quince años después de la desaparición de su madre.', 'alien.jpg', 'Iván Sánchez ', '2014-11-22', 'XONE', 'lVg7lYIW5wo'),
	(5, 'Goblins vs Gnomos, llegará el 9 de diciembre', ' Desde Blizzard no han querido demorar más el momento para darnos a conocer la fecha concreta en la que llegará la esperada expansión de Goblins vs Gnomos al exitoso título Hearthstone, por lo que han anunciado que se encontrará disponible a partir del próximo 8 de diciembre. Es decir, que en tan solo unos pocos días ya podréis disfrutar de este nuevo contenido que traerá consigo grandes novedades y posibilidades a nivel jugable, ampliando la experiencia cosechada hasta el momento.En esta expansión Goblins vs Gnomos, se pueden encontrar 120 cartas nuevas, un nuevo tablero y el Modo Espectador, sin olvidarnos de las nuevas clases.', 'hearthstone.jpg', 'Laura Fernandez', '2014-12-04', 'PC', 'TKb5Btvn3jo');
/*!40000 ALTER TABLE `noticia` ENABLE KEYS */;


-- Volcando estructura para tabla tienda.pago
CREATE TABLE IF NOT EXISTS `pago` (
  `idPago` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `idCliente` int(11) unsigned DEFAULT NULL,
  `fechaPago` date DEFAULT NULL,
  `cantidadPago` decimal(10,0) unsigned DEFAULT NULL,
  PRIMARY KEY (`idPago`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla tienda.pago: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `pago` DISABLE KEYS */;
/*!40000 ALTER TABLE `pago` ENABLE KEYS */;


-- Volcando estructura para tabla tienda.pedido
CREATE TABLE IF NOT EXISTS `pedido` (
  `idPedido` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `fechaPedido` date DEFAULT NULL,
  `idCliente` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`idPedido`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla tienda.pedido: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `pedido` DISABLE KEYS */;
INSERT INTO `pedido` (`idPedido`, `fechaPedido`, `idCliente`) VALUES
	(1, '2015-01-10', 2),
	(2, '2015-01-11', 3),
	(3, '2015-01-12', 4),
	(4, '2015-01-13', 5);
/*!40000 ALTER TABLE `pedido` ENABLE KEYS */;


-- Volcando estructura para tabla tienda.plataforma
CREATE TABLE IF NOT EXISTS `plataforma` (
  `idPlataforma` int(11) NOT NULL AUTO_INCREMENT,
  `nombrePlataforma` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idPlataforma`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla tienda.plataforma: ~5 rows (aproximadamente)
/*!40000 ALTER TABLE `plataforma` DISABLE KEYS */;
INSERT INTO `plataforma` (`idPlataforma`, `nombrePlataforma`) VALUES
	(1, 'PS4'),
	(2, 'XONE'),
	(3, 'PC'),
	(4, '3DS'),
	(5, 'WII U');
/*!40000 ALTER TABLE `plataforma` ENABLE KEYS */;


-- Volcando estructura para tabla tienda.seccion
CREATE TABLE IF NOT EXISTS `seccion` (
  `idSeccion` int(11) NOT NULL AUTO_INCREMENT,
  `nombreSeccion` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idSeccion`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla tienda.seccion: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `seccion` DISABLE KEYS */;
INSERT INTO `seccion` (`idSeccion`, `nombreSeccion`) VALUES
	(1, 'Inicio'),
	(2, 'Noticias'),
	(3, 'Ranking'),
	(4, 'Consolas'),
	(5, 'Videojuegos'),
	(6, 'Ofertas');
/*!40000 ALTER TABLE `seccion` ENABLE KEYS */;


-- Volcando estructura para tabla tienda.subseccion
CREATE TABLE IF NOT EXISTS `subseccion` (
  `idSubseccion` int(11) NOT NULL AUTO_INCREMENT,
  `nombreSubseccion` varchar(50) DEFAULT '0',
  `idSeccion` int(11) DEFAULT '0',
  PRIMARY KEY (`idSubseccion`),
  KEY `seccion-idSeccion` (`idSeccion`),
  CONSTRAINT `seccion-idSeccion` FOREIGN KEY (`idSeccion`) REFERENCES `seccion` (`idSeccion`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla tienda.subseccion: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `subseccion` DISABLE KEYS */;
INSERT INTO `subseccion` (`idSubseccion`, `nombreSubseccion`, `idSeccion`) VALUES
	(1, 'PlayStation 4', 4),
	(2, 'XBOX One', 4),
	(3, 'WII U', 4),
	(4, 'N3DS', 4),
	(5, 'PC', 4),
	(6, 'PSVita', 4);
/*!40000 ALTER TABLE `subseccion` ENABLE KEYS */;


-- Volcando estructura para tabla tienda.usuario
CREATE TABLE IF NOT EXISTS `usuario` (
  `idUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `rolUsuario` varchar(50) NOT NULL,
  `nombreUsuario` varchar(50) DEFAULT NULL,
  `apellido1Usuario` varchar(50) DEFAULT NULL,
  `apellido2Usuario` varchar(50) DEFAULT NULL,
  `dniUsuario` varchar(9) NOT NULL,
  `telefonoUsuario` varchar(9) DEFAULT NULL,
  `numeroCuentaBancaria` varchar(25) DEFAULT NULL,
  `emailUsuario` varchar(50) NOT NULL,
  `loginUsuario` varchar(50) NOT NULL,
  `passwordUsuario` varchar(50) NOT NULL,
  PRIMARY KEY (`idUsuario`),
  UNIQUE KEY `loginUsuario` (`loginUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Volcando datos para la tabla tienda.usuario: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` (`idUsuario`, `rolUsuario`, `nombreUsuario`, `apellido1Usuario`, `apellido2Usuario`, `dniUsuario`, `telefonoUsuario`, `numeroCuentaBancaria`, `emailUsuario`, `loginUsuario`, `passwordUsuario`) VALUES
	(1, 'administrador', 'admin', 'admin', 'admin', '00000000T', '960000000', '', 'mail0@taronjagames.com', 'a', 'a'),
	(2, 'usuario', 'Marti', 'Gómez', 'Fabiá', '00000001R', '960000001', '0003-0005-0007', 'mail1@taronjagames.com', 'usuario1', 'password1'),
	(3, 'usuario', 'Jona', 'Hidalgo', 'Mora', '00000002W', '960000002', '0001-0003-0003', 'mail2@taronjagames.com', 'usuario2', 'password2'),
	(4, 'usuario', 'Iván', 'Sánchez', 'Castelló', '00000003A', '960000003', '0002-0004-0004', 'mail3@taronjagames.com', 'usuario3', 'password3'),
	(5, 'usuario', 'Fran', 'Navarro', 'Flores', '00000004G', '960000004', '0003-0005-0005', 'mail4@taronjagames.com', 'usuario4', 'password4'),
	(6, 'usuario', NULL, NULL, NULL, '00000005M', '960000005', '', 'mail5@taronjagames.com', 'usuario5', 'password5');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
