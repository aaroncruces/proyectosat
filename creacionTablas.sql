CREATE TABLE `satdatabase`.`persona` (
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

