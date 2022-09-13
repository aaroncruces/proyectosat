CREATE  TABLE IF NOT EXISTS `satdatabase`.`persona` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `rut` INT NULL COMMENT '',
    `nombre` VARCHAR(255) NULL,
    `otrosnombres` VARCHAR(255) NULL,
    `apellido1` VARCHAR(255) NULL,
    `apellido2` VARCHAR(255) NULL,
    PRIMARY KEY (`id`),
    UNIQUE (`id`, `rut`)
) ENGINE = InnoDB COMMENT = '';

CREATE  TABLE IF NOT EXISTS `satdatabase`.`empleado` (
    `id` INT NOT NULL COMMENT 'La id de una persona',
    PRIMARY KEY (`id`),
    UNIQUE (`id`)
) ENGINE = InnoDB COMMENT = '';

CREATE  TABLE IF NOT EXISTS `satdatabase`.`departamento` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE (`id`, `nombre`)
) ENGINE = InnoDB COMMENT = '';

CREATE  TABLE IF NOT EXISTS `satdatabase`.`documento` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `codigo` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE (`id`, `codigo`)
) ENGINE = InnoDB COMMENT = 'contratos, boletas, informes, etc';

CREATE  TABLE IF NOT EXISTS `satdatabase`.`tipodocumento` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE (`id`, `nombre`)
) ENGINE = InnoDB COMMENT = '';

CREATE  TABLE IF NOT EXISTS `satdatabase`.`motivo` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE (`id`, `nombre`)
) ENGINE = InnoDB COMMENT = 'motivo de una compraventa, movimiento de dinero, etc';

CREATE  TABLE IF NOT EXISTS `satdatabase`.`asistencia` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `fechahora` DATETIME NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE (`id`)
) ENGINE = InnoDB COMMENT = 'marca la hora en la que se entra y retira un empleado';

CREATE  TABLE IF NOT EXISTS `satdatabase`.`estadoasistencia` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE (`id`, `nombre`)
) ENGINE = InnoDB COMMENT = 'entrada, salida, extraordinaria';

CREATE  TABLE IF NOT EXISTS `satdatabase`.`sucursal` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE (`id`, `nombre`)
) ENGINE = InnoDB COMMENT = 'en que sitio se encuentra el empleado (no necesariamente un edificio fisico)';

CREATE  TABLE IF NOT EXISTS `satdatabase`.`contacto` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `contacto` VARCHAR(255) NOT NULL,
    `detalles` VARCHAR(255) NULL,
    PRIMARY KEY (`id`),
    UNIQUE (`id`)
) ENGINE = InnoDB COMMENT = 'como contactar al empleado';

CREATE  TABLE IF NOT EXISTS `satdatabase`.`tipocontacto` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE (`id`, `nombre`)
) ENGINE = InnoDB COMMENT = 'telefono, email, etc';

CREATE  TABLE IF NOT EXISTS `satdatabase`.`contrato` (
    `id` INT NOT NULL,
    `sueldoporjornada` INT NULL,
    `sueldoporhoraextra` INT NULL,
    PRIMARY KEY (`id`),
    UNIQUE (`id`)
) ENGINE = InnoDB COMMENT = 'un contrato es un documento';

CREATE  TABLE IF NOT EXISTS `satdatabase`.`empresa` (
    `id` INT NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE (`id`)
) ENGINE = InnoDB COMMENT = 'una empresa es una persona';

CREATE  TABLE IF NOT EXISTS `satdatabase`.`cliente` (
    `id` INT NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE (`id`)
) ENGINE = InnoDB COMMENT = 'un cliente es una persona';

CREATE  TABLE IF NOT EXISTS `satdatabase`.`ubicacion` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `detalles` VARCHAR(255) NULL,
    PRIMARY KEY (`id`),
    UNIQUE (`id`)
) ENGINE = InnoDB COMMENT = 'una localizacion fisica o digital';

CREATE  TABLE IF NOT EXISTS `satdatabase`.`caja` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `detalles` VARCHAR(255) NULL,
    PRIMARY KEY (`id`),
    UNIQUE (`id`)
) ENGINE = InnoDB COMMENT = 'desde donde se realizan ventas y compras. debe tener un encargado';

CREATE  TABLE IF NOT EXISTS `satdatabase`.`ubicaciondigital` (
    `id` INT NOT NULL,
    `parametroconexion` VARCHAR(255) NULL COMMENT 'Una URL, por ejemplo',
    PRIMARY KEY (`id`),
    UNIQUE (`id`)
) ENGINE = InnoDB COMMENT = 'una localizacion fisica o digital';

CREATE  TABLE IF NOT EXISTS `satdatabase`.`tiposerviciodigital` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE (`id`, `nombre`)
) ENGINE = InnoDB COMMENT = 'aplicacion para acceder al dato (http,sftp,fs,etc)';

CREATE  TABLE IF NOT EXISTS `satdatabase`.`compraventa` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `detalles` VARCHAR(255) NULL,
    PRIMARY KEY (`id`),
    UNIQUE (`id`)
) ENGINE = InnoDB COMMENT = 'una tansaccion de activos (como mercaderia) por otro tipo de activo (como dinero)';

CREATE  TABLE IF NOT EXISTS `satdatabase`.`paquetemercaderia` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `cantidad` INT NULL COMMENT 'cantidad de paquetes en una venta',
    `detalles` VARCHAR(255) NULL,
    `precio` INT NULL COMMENT 'precio del paquete, puede ser derivado de sus items',
    PRIMARY KEY (`id`),
    UNIQUE (`id`)
) ENGINE = InnoDB COMMENT = 'grupo de elementos, aglomerados (aunque puede ser un unico item), destinados a venderse como una unidad';

CREATE  TABLE IF NOT EXISTS `satdatabase`.`itemmercaderia` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `cantidad` INT NULL COMMENT 'cantidad de items en una paquete',
    `detalles` VARCHAR(255) NULL,
    `precio` INT NULL COMMENT 'precio individual',
    PRIMARY KEY (`id`),
    UNIQUE (`id`)
) ENGINE = InnoDB COMMENT = 'items individuales a vender, han de agruparse en paquetes';

CREATE  TABLE IF NOT EXISTS `satdatabase`.`precioespecialcompraventa` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `cantidad` INT NULL COMMENT 'cantidad pactada ',
    `detalles` VARCHAR(255) NULL,
    `precio` INT NULL COMMENT 'precio pactado',
    PRIMARY KEY (`id`),
    UNIQUE (`id`)
) ENGINE = InnoDB COMMENT = 'precio convenido por un paquete de mercaderia, o item, entre un comprador, y un agente';

CREATE  TABLE IF NOT EXISTS `satdatabase`.`material` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `codigobarras` VARCHAR(255) NULL,
    `stock` INT NULL COMMENT 'cantidad en almacenaje',
    `valor` INT NULL COMMENT 'valor monetario intrinseco del material',
    `detalles` VARCHAR(255) NULL,
    PRIMARY KEY (`id`),
    UNIQUE (`id`)
) ENGINE = InnoDB COMMENT = 'recursos materiales destinados o no para la venta';

CREATE  TABLE IF NOT EXISTS `satdatabase`.`estadomaterial` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `estado` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE (`id`,`estado`)
) ENGINE = InnoDB COMMENT = 'estado del material, si esta listo para la venta, para desarme, etc';

CREATE  TABLE IF NOT EXISTS `satdatabase`.`unidadematerial` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `unidad` VARCHAR(255) NOT NULL,
    `alias` VARCHAR(255) NULL,
    PRIMARY KEY (`id`),
    UNIQUE (`id`)
) ENGINE = InnoDB COMMENT = 'en que unidades se designan las cantidades de material: Kilogramo (kg), Litro (Lt), etc';

CREATE  TABLE IF NOT EXISTS `satdatabase`.`cuentabancaria` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `numerocuenta` VARCHAR(255) NOT NULL,
    `detalles` VARCHAR(255) NULL,
    `alias` VARCHAR(255) NULL,
    PRIMARY KEY (`id`),
    UNIQUE (`id`)
) ENGINE = InnoDB COMMENT = '';

CREATE  TABLE IF NOT EXISTS `satdatabase`.`tipocuentabancaria` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(255) NOT NULL,
    `alias` VARCHAR(255) NULL COMMENT 'la cuenta rut es una cuenta vista',
    `detalles` VARCHAR(255) NULL,
    PRIMARY KEY (`id`),
    UNIQUE (`id`)
) ENGINE = InnoDB COMMENT = 'debito, credito, corriente, vista, etc';

CREATE  TABLE IF NOT EXISTS `satdatabase`.`banco` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(255) NOT NULL,
    `detalles` VARCHAR(255) NULL,
    PRIMARY KEY (`id`),
    UNIQUE (`id`, `nombre`)
) ENGINE = InnoDB COMMENT = '';

CREATE  TABLE IF NOT EXISTS `satdatabase`.`entradasalida` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `estado` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE (`id`, `estado`)
) ENGINE = InnoDB COMMENT = 'un movimento de dinero, debe ser diferenciado';

CREATE  TABLE IF NOT EXISTS `satdatabase`.`formapago` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE (`id`, `nombre`)
) ENGINE = InnoDB COMMENT = 'efectivo, cheque, transferencia, etc';

CREATE  TABLE IF NOT EXISTS `satdatabase`.`vehiculo` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `patente` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE (`id`, `patente`)
) ENGINE = InnoDB COMMENT = 'vehiculo que realiza despachos y transportes';

CREATE  TABLE IF NOT EXISTS `satdatabase`.`extraccionmaterial` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `detalles` VARCHAR(255) NULL,
    PRIMARY KEY (`id`),
    UNIQUE (`id`)
) ENGINE = InnoDB COMMENT = '';

CREATE  TABLE IF NOT EXISTS `satdatabase`.`ubicacionfisica` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `ciudad` VARCHAR(255) NULL,
    `direccion` VARCHAR(255) NULL,
    `oficina` VARCHAR(255) NULL,
    `cajon` VARCHAR(255) NULL,
    `coordenadas` VARCHAR(255) NULL,
    `detalles` VARCHAR(255) NULL,
    PRIMARY KEY (`id`),
    UNIQUE (`id`)
) ENGINE = InnoDB COMMENT = '';

CREATE  TABLE IF NOT EXISTS `satdatabase`.`movimientodinero` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `monto` INT NOT NULL,
    `detalles` VARCHAR(255) NULL,
    PRIMARY KEY (`id`),
    UNIQUE (`id`)
) ENGINE = InnoDB COMMENT = '';

CREATE  TABLE IF NOT EXISTS `satdatabase`.`despacho` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `detalles` VARCHAR(255) NULL,
    PRIMARY KEY (`id`),
    UNIQUE (`id`)
) ENGINE = InnoDB COMMENT = '';