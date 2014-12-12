-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.0.14-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win32
-- HeidiSQL Versión:             9.1.0.4867
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
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
  `precioArticulo` decimal(10,0) unsigned DEFAULT NULL,
  `imagenArticulo` varchar(50) DEFAULT NULL,
  `idPlataforma` int(10) unsigned DEFAULT NULL,
  `plataformaArticulo` varchar(50) DEFAULT NULL,
  `tipoArticulo` varchar(50) DEFAULT NULL,
  `ventaArticulo` int(11) DEFAULT NULL,
  `ofertaArticulo` int(11) DEFAULT NULL,
  PRIMARY KEY (`idArticulo`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla tienda.articulo: ~5 rows (aproximadamente)
/*!40000 ALTER TABLE `articulo` DISABLE KEYS */;
INSERT INTO `articulo` (`idArticulo`, `nombreArticulo`, `descripcionArticulo`, `precioArticulo`, `imagenArticulo`, `idPlataforma`, `plataformaArticulo`, `tipoArticulo`, `ventaArticulo`, `ofertaArticulo`) VALUES
	(1, 'Play Station 4', 'Consola 4ª gen.', 399, 'ps4', 1, 'PS4', 'consola', 50, NULL),
	(2, 'Xbox One', 'Consola 4ª gen.', 499, 'xboxOne', 2, 'XONE', 'consola', 32, NULL),
	(3, 'HearthStone', 'Juego de cartas', 0, 'hearthStone', 3, 'PC', 'videojuego', 10, NULL),
	(4, 'Assassins Creed', 'Juego de aventura', 60, 'assassinsCreed', 2, 'XONE', 'videojuego', 3, 10),
	(5, 'SingStar', 'Juego de cantar', 30, 'singStar', 1, 'PS4', 'videojuego', 5, 20);
/*!40000 ALTER TABLE `articulo` ENABLE KEYS */;


-- Volcando estructura para tabla tienda.categoria
CREATE TABLE IF NOT EXISTS `categoria` (
  `idCategoria` int(11) NOT NULL AUTO_INCREMENT,
  `nombreCategoria` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idCategoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla tienda.categoria: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;


-- Volcando estructura para tabla tienda.cliente
CREATE TABLE IF NOT EXISTS `cliente` (
  `idCliente` int(11) NOT NULL AUTO_INCREMENT,
  `nombreCliente` varchar(50) NOT NULL,
  `dniCliente` varchar(50) DEFAULT NULL,
  `emailCliente` varchar(50) DEFAULT NULL,
  `apellido1Cliente` varchar(50) DEFAULT NULL,
  `apellido2Cliente` varchar(50) DEFAULT NULL,
  `loginCliente` varchar(50) DEFAULT NULL,
  `passwordCliente` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idCliente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla tienda.cliente: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;


-- Volcando estructura para tabla tienda.detallepedido
CREATE TABLE IF NOT EXISTS `detallepedido` (
  `idDetallePedido` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `idArticulo` int(11) unsigned DEFAULT NULL,
  `cantidadArticulo` int(11) DEFAULT NULL,
  `precioArticulo` decimal(10,0) unsigned DEFAULT NULL,
  `idPedido` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`idDetallePedido`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla tienda.detallepedido: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `detallepedido` DISABLE KEYS */;
/*!40000 ALTER TABLE `detallepedido` ENABLE KEYS */;


-- Volcando estructura para tabla tienda.noticia
CREATE TABLE IF NOT EXISTS `noticia` (
  `idNoticia` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `tituloNoticia` varchar(100) DEFAULT NULL,
  `textoNoticia` text,
  `imagenNoticia` varchar(100) DEFAULT NULL,
  `autorNoticia` varchar(50) DEFAULT NULL,
  `fechaNoticia` date DEFAULT NULL,
  PRIMARY KEY (`idNoticia`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla tienda.noticia: ~5 rows (aproximadamente)
/*!40000 ALTER TABLE `noticia` DISABLE KEYS */;
INSERT INTO `noticia` (`idNoticia`, `tituloNoticia`, `textoNoticia`, `imagenNoticia`, `autorNoticia`, `fechaNoticia`) VALUES
	(1, 'Tierra Media : Shadow Of Mordor', 'Este juego basado en el rico universo de J.R.R. Tolkien nos sitúa en el período de tiempo que transcurre entre El Hobbit y El Señor de los Anillos, controlando a Talion, un aventurero que ha visto a su familia asesinada justo el día en el que Sauron vuelve a Mordor para preparar su ofensiva contra los hombres y los elfos. Acción, aventura y rol en la Tierra Media, con toma de decisiones que afectarán a la historia. ', 'ShadowOfMordor.jpg', 'Martin Gomez', '2014-10-01'),
	(2, 'Minecraft tiene nuevo dueño', 'La empresa creadora del videojuego Minecraft, la sueca Mojang, ha anunciado que ha sido adquirida por el gigante estadounidense Microsoft por 2.500 millones de dólares (1.935.000.000 euros aproximadamente).Los fundadores de la empresa, grandes ganadores en esta operación, han anunciado su salida de la misma en la página web de Mojang. La operación aún está pendiente de las condiciones habituales de cierre y del análisis de los organismos reguladores, por lo que la compañía confía en que se pueda cerrar a finales de este año. Asimismo, Microsoft estima que la operación empezará a ser rentable a partir del próximo año fiscal.', 'minecraft.jpg', 'Jonathan Hidalgo', '2014-10-04'),
	(3, 'Destiny', 'Un videojuego de acción y aventura donde los usuarios crean y hacen evolucionar a su personaje para convertirse en leyendas de su propia historia por salvar a la Tierra.', 'Destiny.jpg', 'Francisco Alegre', '2014-11-10'),
	(4, 'Alien Isolation', 'Creative Assembly regresa a las raíces de la saga Alien en una entrega que recupera la esencia de la primera película, dirigida por Ridley Scott. Un survival horror en primera persona en el que controlamos a Amanda Ripley quince años después de la desaparición de su madre.', 'alien.jpg', 'Iván Sánchez ', '2014-11-22'),
	(5, 'Goblins vs Gnomos, llegará el 9 de diciembre', ' Desde Blizzard no han querido demorar más el momento para darnos a conocer la fecha concreta en la que llegará la esperada expansión de Goblins vs Gnomos al exitoso título Hearthstone, por lo que han anunciado que se encontrará disponible a partir del próximo 8 de diciembre. Es decir, que en tan solo unos pocos días ya podréis disfrutar de este nuevo contenido que traerá consigo grandes novedades y posibilidades a nivel jugable, ampliando la experiencia cosechada hasta el momento.En esta expansión Goblins vs Gnomos, se pueden encontrar 120 cartas nuevas, un nuevo tablero y el Modo Espectador, sin olvidarnos de las nuevas clases.', 'hearthstone.jpg', 'Laura Fernandez', '2014-12-04');
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla tienda.pedido: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `pedido` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla tienda.seccion: ~7 rows (aproximadamente)
/*!40000 ALTER TABLE `seccion` DISABLE KEYS */;
INSERT INTO `seccion` (`idSeccion`, `nombreSeccion`) VALUES
	(1, 'Inicio'),
	(2, 'Noticias'),
	(3, 'Ranking'),
	(4, 'Consolas'),
	(5, 'Videojuegos'),
	(6, 'Ofertas'),
	(7, 'Hoy Hablamos de ...');
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

-- Volcando datos para la tabla tienda.subseccion: ~6 rows (aproximadamente)
/*!40000 ALTER TABLE `subseccion` DISABLE KEYS */;
INSERT INTO `subseccion` (`idSubseccion`, `nombreSubseccion`, `idSeccion`) VALUES
	(1, 'PlayStation 4', 4),
	(2, 'XBOX One', 4),
	(3, 'WII U', 4),
	(4, 'N3DS', 4),
	(5, 'PC', 4),
	(6, 'PSVita', 4);
/*!40000 ALTER TABLE `subseccion` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
