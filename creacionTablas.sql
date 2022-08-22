--1. primitivas, tablas que se valen por si mismas
CREATE TABLE `satdatabase`.`personas` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `rut` INT NULL COMMENT 'toda parsona deberia tenerlo.',
    `nombre` VARCHAR(255) NULL,
    `apellido1` VARCHAR(255) NULL,
    `apellido2` VARCHAR(255) NULL,
    `otrosnombres` VARCHAR(255) NULL,
    PRIMARY KEY (`id`),
    UNIQUE (`id`, `rut`)
) ENGINE = InnoDB COMMENT = 'se define a una persona con sus atributos mas basicos';
--2. tipos, constantes requeriads por otras tablas
--tipos contacto. pueden ser 
--  numero telefónico movil
--  numero telefónico fijo
--  correo electrónico
--  whatsapp
--  telegram
--  etc
CREATE TABLE `satdatabase`.`tiposcontacto` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(255) NOT NULL ,
    PRIMARY KEY (`id`),
    UNIQUE (`id`, `nombre`)
) ENGINE = InnoDB COMMENT = 'lista de tipos de contactos, como <<telefono>> o <<email>>';
--
--tipos ubicaciones. pueden ser 
--  servidor
--  url
--  correo electrónico
--  fisica
--  etc
CREATE TABLE `satdatabase`.`tiposcontacto` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(255) NOT NULL ,
    PRIMARY KEY (`id`),
    UNIQUE (`id`, `nombre`)
) ENGINE = InnoDB COMMENT = 'lista de tipos de contactos, como <<telefono>> o <<email>>';
--
--tablas que usan tipos 
--
CREATE TABLE `satdatabase`.`contactos` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `idtipo` INT NOT NULL,
    `contacto` VARCHAR(255) NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`idtipo`) REFERENCES `satdatabase`.`tiposcontacto`(`id`),
    UNIQUE (`id`)
) ENGINE = InnoDB COMMENT = 'un contacto especifico como <<aaron@cruces.cac>>';
--tablas derivadas, sus PK son referencias
--
CREATE TABLE `satdatabase`.`personacontacto` (:
    `id` INT NOT NULL AUTO_INCREMENT,
    `idpersona` INT NOT NULL,
    `idcontacto` INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`idpersona`) REFERENCES `satdatabase`.`personas`(`id`),
    FOREIGN KEY (`idcontacto`) REFERENCES `satdatabase`.`contactos`(`id`),
    UNIQUE (`id`)
) ENGINE = InnoDB COMMENT = 'relacion muchos contactos a muchas personas';
--
CREATE TABLE `satdatabase`.`tiposdocumento` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `tipo` VARCHAR(255) NOT NULL ,
    PRIMARY KEY (`id`),
    UNIQUE (`id`, `tipo`)
) ENGINE = InnoDB COMMENT = 'lista de tipos de documento, como <<carnet>> o <<boleta>>';
--
CREATE TABLE `satdatabase`.`documento` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `idtipo` INT NOT NULL,
    `contacto` VARCHAR(255) NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`idtipo`) REFERENCES `satdatabase`.`tiposcontacto`(`id`),
    UNIQUE (`id`)
) ENGINE = InnoDB COMMENT = 'un contacto especifico como <<aaron@cruces.cac>>';
--
CREATE TABLE `satdatabase`.`empleados` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `idpersona` INT NOT NULL,
    --todo
    `iddepartamento` INT NOT NULL,
    --
    `idsucursal` INT NOT NULL,
    --
    `idempresa` INT NOT NULL,
    --
    
    `idcontratotrabajo` INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`idpersona`) REFERENCES `satdatabase`.`personas`(`id`),
    UNIQUE (`id`, `idpersona`)
) ENGINE = InnoDB COMMENT = 'relacion muchos contactos a muchas personas';