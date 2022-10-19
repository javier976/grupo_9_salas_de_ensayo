-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema 1771studios
-- -----------------------------------------------------

-- -----------------------------------------------------
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
  `images` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
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
  `categoria_usuario_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `categoria_usuario_id` (`categoria_usuario_id` ASC) VISIBLE,
  CONSTRAINT `usuarios_ibfk_1`
    FOREIGN KEY (`categoria_usuario_id`)
    REFERENCES `1771studios`.`categoria_usuario` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `1771studios`.`facturas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `1771studios`.`facturas` (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `fecha_factura` DATE NOT NULL,
  `direccion_de_facturacion` TEXT NOT NULL,
  `ciudad_de_facturacion` VARCHAR(255) NOT NULL,
  `estado_provincia_de_facturacion` VARCHAR(255) NOT NULL,
  `pais_de_facturacion` VARCHAR(255) NOT NULL,
  `total` DECIMAL(10,0) NOT NULL,
  `usuarios_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `usuarios_id` (`usuarios_id` ASC) VISIBLE,
  CONSTRAINT `facturas_ibfk_1`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `1771studios`.`usuarios` (`id`))
ENGINE = InnoDB
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
  `images` TEXT NOT NULL,
  `descripcion` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `1771studios`.`items_de_factura`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `1771studios`.`items_de_factura` (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `precio` DECIMAL(10,0) NOT NULL,
  `cantidad` TINYINT(10) NOT NULL,
  `facturas_id` INT(11) NULL DEFAULT NULL,
  `cursos_id` INT(11) NULL DEFAULT NULL,
  `salas_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `facturas_id` (`facturas_id` ASC) VISIBLE,
  INDEX `cursos_id` (`cursos_id` ASC) VISIBLE,
  INDEX `salas_id` (`salas_id` ASC) VISIBLE,
  CONSTRAINT `items_de_factura_ibfk_1`
    FOREIGN KEY (`facturas_id`)
    REFERENCES `1771studios`.`facturas` (`id`),
  CONSTRAINT `items_de_factura_ibfk_2`
    FOREIGN KEY (`cursos_id`)
    REFERENCES `1771studios`.`cursos` (`id`),
  CONSTRAINT `items_de_factura_ibfk_3`
    FOREIGN KEY (`salas_id`)
    REFERENCES `1771studios`.`salas` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;