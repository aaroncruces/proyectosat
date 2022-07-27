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
CREATE TABLE `satdatabase`.`tiposcontacto` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `tipo` VARCHAR(255) NULL,
    PRIMARY KEY (`id`),
    UNIQUE (`id`, `tipo`)
) ENGINE = InnoDB COMMENT = 'lista de tipos de contactos, como <<telefono>> o <<email>>';
CREATE TABLE `satdatabase`.`contactos` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `idtipo` INT NOT NULL,
    `dato` VARCHAR(255) NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`idtipo`) REFERENCES `satdatabase`.`tiposcontacto`(`id`),
    UNIQUE (`id`)
) ENGINE = InnoDB COMMENT = 'un contacto especifico como <<aaron@cruces.cac>>';
CREATE TABLE `satdatabase`.`personacontacto` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `idpersona` INT NOT NULL,
    `idcontacto` INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`idpersona`) REFERENCES `satdatabase`.`personas`(`id`),
    FOREIGN KEY (`idcontacto`) REFERENCES `satdatabase`.`contactos`(`id`),
    UNIQUE (`id`)
) ENGINE = InnoDB COMMENT = 'relacion muchos contactos a muchas personas';