-- Schema 1771studios
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `1771studios` DEFAULT CHARACTER SET utf8mb4 ;
USE `1771studios` ;

-- -----------------------------------------------------
-- Table `1771studios`.`categoria_usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `1771studios`.`categoria_usuario` (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `categoria` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `1771studios`.`cursos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `1771studios`.`cursos` (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(255) NOT NULL,
  `duracion` TEXT NOT NULL,
  `precio` DECIMAL(10,0) NOT NULL,
  `images` BLOB NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `1771studios`.`salas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `1771studios`.`salas` (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(255) NOT NULL,
  `metros_cuadrados` TEXT NOT NULL,
  `turno_sala` VARCHAR(30) NOT NULL,
  `precio` DECIMAL(10,0) NOT NULL,
  `images` BLOB NOT NULL,
  `descripcion` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `1771studios`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `1771studios`.`usuarios` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(128) NOT NULL,
  `apellido` VARCHAR(128) NOT NULL,
  `direccion` TEXT NOT NULL,
  `ciudad` VARCHAR(255) NOT NULL,
  `estado_provincia` VARCHAR(255) NOT NULL,
  `pais` VARCHAR(255) NOT NULL,
  `codigo_postal` VARCHAR(10) NOT NULL,
  `telefono` VARCHAR(20) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` TEXT NOT NULL,
  `profile_image` BLOB NOT NULL,
  `categoria_usuario_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `categoria_usuario_id` (`categoria_usuario_id` ASC) VISIBLE,
  CONSTRAINT `usuarios_ibfk_1`
    FOREIGN KEY (`categoria_usuario_id`)
    REFERENCES `1771studios`.`categoria_usuario` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4;