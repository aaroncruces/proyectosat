--------------
-- personas --
--------------
CREATE TABLE IF NOT EXISTS `satdatabase`.`personacontacto` (
    `idpersona` INT NOT NULL,
    `idcontacto` INT NOT NULL,
    PRIMARY KEY (`idpersona`,`idcontacto`),
    CONSTRAINT `contacto_tiene_multiples_persona`
        FOREIGN KEY (`idpersona`)
        REFERENCES  `satdatabase`.`persona` (`id`)
        ON DELETE CASCADE,
    CONSTRAINT `persona_tiene_multiples_contacto`
        FOREIGN KEY (`idcontacto`)
        REFERENCES  `satdatabase`.`contacto` (`id`)
        ON DELETE CASCADE
) ENGINE = InnoDB COMMENT = '';

CREATE TABLE IF NOT EXISTS `satdatabase`.`personadocumento` (
    `idpersona` INT NOT NULL,
    `iddocumento` INT NOT NULL,
    PRIMARY KEY (`idpersona`,`iddocumento`),
    CONSTRAINT `documento_tiene_multiples_persona`
        FOREIGN KEY (`idpersona`)
        REFERENCES  `satdatabase`.`persona` (`id`)
        ON DELETE CASCADE,
    CONSTRAINT `persona_tiene_multiples_documento`
        FOREIGN KEY (`iddocumento`)
        REFERENCES  `satdatabase`.`documento` (`id`)
        ON DELETE CASCADE
) ENGINE = InnoDB COMMENT = '';

CREATE TABLE IF NOT EXISTS `satdatabase`.`personadepartamento` (
    `idpersona` INT NOT NULL,
    `iddepartamento` INT NOT NULL,
    PRIMARY KEY (`idpersona`,`iddepartamento`),
    CONSTRAINT `departamento_tiene_multiples_persona`
        FOREIGN KEY (`idpersona`)
        REFERENCES  `satdatabase`.`persona` (`id`)
        ON DELETE CASCADE,
    CONSTRAINT `persona_trabaja_en_multiples_departamento`
        FOREIGN KEY (`iddepartamento`)
        REFERENCES  `satdatabase`.`departamento` (`id`)
        ON DELETE CASCADE
) ENGINE = InnoDB COMMENT = '';

ALTER TABLE `satdatabase`.`empresa`
    ADD CONSTRAINT `empresa_es_persona`
        FOREIGN KEY (`id`)
        REFERENCES  `satdatabase`.`persona` (`id`)
        ON DELETE CASCADE;

ALTER TABLE `satdatabase`.`empleado`
    ADD CONSTRAINT `empleado_es_persona`
        FOREIGN KEY (`id`)
        REFERENCES  `satdatabase`.`persona` (`id`)
        ON DELETE CASCADE;

-- apuntar a empleado o persona?
ALTER TABLE `satdatabase`.`paquetemercaderia`
    ADD idresponsableubicaion INT,
    ADD CONSTRAINT `empleado_es_responsable_ubicacion_paquetemercaderia`
        FOREIGN KEY (`idresponsableubicaion`)
        REFERENCES  `satdatabase`.`persona` (`id`)
        ON DELETE CASCADE;

-- apuntar a cliente o persona?
-- debiera haber entidad cliente?
CREATE TABLE IF NOT EXISTS `satdatabase`.`precioespecialcompraventapersona` (
    `idpersona` INT NOT NULL,
    `idprecioespecialcompraventa` INT NOT NULL,
    PRIMARY KEY (`idpersona`,`idprecioespecialcompraventa`),
    CONSTRAINT `precioespecialcompraventa_se_ofrece_a_multiples_persona`
        FOREIGN KEY (`idpersona`)
        REFERENCES  `satdatabase`.`persona` (`id`)
        ON DELETE CASCADE,
    CONSTRAINT `persona_se_le_ofrece_multiples_precioespecialcompraventa`
        FOREIGN KEY (`idprecioespecialcompraventa`)
        REFERENCES  `satdatabase`.`precioespecialcompraventa` (`id`)
        ON DELETE CASCADE
) ENGINE = InnoDB COMMENT = 'relacion entre un precio especial de compraventa y una persona';

-- apuntar a empleado o persona?
ALTER TABLE `satdatabase`.`despacho`
    ADD idchofer INT,
    ADD CONSTRAINT `despacho_tiene_chofer`
        FOREIGN KEY (`idchofer`)
        REFERENCES  `satdatabase`.`persona` (`id`)
        ON DELETE CASCADE;

ALTER TABLE `satdatabase`.`movimientodinero`
    ADD idemisor INT,
    ADD idreceptor INT,
    ADD CONSTRAINT `movimientodinero_tiene_emisor`
        FOREIGN KEY (`idemisor`)
        REFERENCES  `satdatabase`.`persona` (`id`)
        ON DELETE CASCADE,
    ADD CONSTRAINT `movimientodinero_tiene_receptor`
        FOREIGN KEY (`idreceptor`)
        REFERENCES  `satdatabase`.`persona` (`id`)
        ON DELETE CASCADE;

ALTER TABLE `satdatabase`.`compraventa`
    ADD idcomprador INT,
    ADD idvendedor INT,
    ADD CONSTRAINT `compraventa_tiene_comprador`
        FOREIGN KEY (`idcomprador`)
        REFERENCES  `satdatabase`.`persona` (`id`)
        ON DELETE CASCADE,
    ADD CONSTRAINT `compraventa_tiene_vendedor`
        FOREIGN KEY (`idvendedor`)
        REFERENCES  `satdatabase`.`persona` (`id`)
        ON DELETE CASCADE;

ALTER TABLE `satdatabase`.`cliente`
    ADD CONSTRAINT `cliente_es_persona`
        FOREIGN KEY (`id`)
        REFERENCES  `satdatabase`.`persona` (`id`)
        ON DELETE CASCADE;

-- apuntar a empleado o persona?
ALTER TABLE `satdatabase`.`asistencia`
    ADD idpersona INT,
    ADD CONSTRAINT `asistencia_es_de_persona`
        FOREIGN KEY (`idpersona`)
        REFERENCES  `satdatabase`.`persona` (`id`)
        ON DELETE CASCADE;

ALTER TABLE `satdatabase`.`extraccionmaterial`
    ADD idresponsable INT,
    ADD CONSTRAINT `extraccionmaterial_tiene_responsable`
        FOREIGN KEY (`idresponsable`)
        REFERENCES  `satdatabase`.`persona` (`id`)
        ON DELETE CASCADE;

CREATE TABLE IF NOT EXISTS `satdatabase`.`extraccionmanterialextractor` (
    `idextractor` INT NOT NULL,
    `idextraccionmaterial` INT NOT NULL,
    PRIMARY KEY (`idextractor`,`idextraccionmaterial`),
    CONSTRAINT `extraccionmaterial_tiene_multiples_extractor`
        FOREIGN KEY (`idextractor`)
        REFERENCES  `satdatabase`.`persona` (`id`)
        ON DELETE CASCADE,
    CONSTRAINT `extractor_participa_en_multiples_extraccionmaterial`
        FOREIGN KEY (`idextraccionmaterial`)
        REFERENCES  `satdatabase`.`extraccionmaterial` (`id`)
        ON DELETE CASCADE
) ENGINE = InnoDB COMMENT = '';

-----------------
-- documentos --
-----------------
ALTER TABLE `satdatabase`.`documento`
    ADD idtipodocumento INT,
    ADD CONSTRAINT `documento_tiene_tipo`
        FOREIGN KEY (`idtipodocumento`)
        REFERENCES  `satdatabase`.`tipodocumento` (`id`)
        ON DELETE CASCADE;

ALTER TABLE `satdatabase`.`contrato`
    ADD CONSTRAINT `contrato_es_documento`
        FOREIGN KEY (`id`)
        REFERENCES  `satdatabase`.`documento` (`id`)
        ON DELETE CASCADE;

ALTER TABLE `satdatabase`.`documento`
    ADD idubicacion INT,
    ADD CONSTRAINT `documento_tiene_ubicacion`
        FOREIGN KEY (`idubicacion`)
        REFERENCES  `satdatabase`.`ubicacion` (`id`)
        ON DELETE CASCADE;

CREATE TABLE IF NOT EXISTS `satdatabase`.`documentodespacho` (
    `iddespacho` INT NOT NULL,
    `iddocumento` INT NOT NULL,
    PRIMARY KEY (`iddespacho`,`iddocumento`),
    CONSTRAINT `despacho_tiene_documento`
        FOREIGN KEY (`iddocumento`)
        REFERENCES  `satdatabase`.`documento` (`id`)
        ON DELETE CASCADE,
    CONSTRAINT `documento_puede_ser_de_despacho`
        FOREIGN KEY (`iddespacho`)
        REFERENCES  `satdatabase`.`despacho` (`id`)
        ON DELETE CASCADE
) ENGINE = InnoDB COMMENT = 'para que documento no tenga registro despacho en tabla';


CREATE TABLE IF NOT EXISTS `satdatabase`.`documentomovimientodinero` (
    `iddocumento` INT NOT NULL,
    `idmovimientodinero` INT NOT NULL,
    PRIMARY KEY (`iddocumento`,`idmovimientodinero`),
    CONSTRAINT `movimientodinero_tiene_documento`
        FOREIGN KEY (`iddocumento`)
        REFERENCES  `satdatabase`.`documento` (`id`)
        ON DELETE CASCADE,
    CONSTRAINT `documento_puede_ser_de_movimientodinero`
        FOREIGN KEY (`idmovimientodinero`)
        REFERENCES  `satdatabase`.`movimientodinero` (`id`)
        ON DELETE CASCADE
) ENGINE = InnoDB COMMENT = '';

CREATE TABLE IF NOT EXISTS `satdatabase`.`documentocompraventa` (
    `iddocumento` INT NOT NULL,
    `idcompraventa` INT NOT NULL,
    PRIMARY KEY (`iddocumento`,`idcompraventa`),
    CONSTRAINT `compraventa_tiene_documento`
        FOREIGN KEY (`iddocumento`)
        REFERENCES  `satdatabase`.`documento` (`id`)
        ON DELETE CASCADE,
    CONSTRAINT `documento_puede_ser_de_compraventa`
        FOREIGN KEY (`idcompraventa`)
        REFERENCES  `satdatabase`.`compraventa` (`id`)
        ON DELETE CASCADE
) ENGINE = InnoDB COMMENT = '';


---------------
-- ubicacion --
---------------
ALTER TABLE `satdatabase`.`despacho`
    ADD idubicacion INT,
    ADD CONSTRAINT `despacho_tiene_ubicacion`
        FOREIGN KEY (`idubicacion`)
        REFERENCES  `satdatabase`.`ubicacion` (`id`)
        ON DELETE CASCADE;

CREATE TABLE IF NOT EXISTS `satdatabase`.`ubicacionmaterial` (
    `idubicacion` INT NOT NULL,
    `idmaterial` INT NOT NULL,
    `cantidad` INT,
    PRIMARY KEY (`idubicacion`,`idmaterial`),
    CONSTRAINT `material_tiene_ubicacion`
        FOREIGN KEY (`idubicacion`)
        REFERENCES  `satdatabase`.`ubicacion` (`id`)
        ON DELETE CASCADE,
    CONSTRAINT `ubicacion_puede_ser_de_material`
        FOREIGN KEY (`idmaterial`)
        REFERENCES  `satdatabase`.`material` (`id`)
        ON DELETE CASCADE
) ENGINE = InnoDB COMMENT = '';

ALTER TABLE `satdatabase`.`sucursal`
    ADD idubicacion INT,
    ADD CONSTRAINT `sucursal_tiene_ubicacion`
        FOREIGN KEY (`idubicacion`)
        REFERENCES  `satdatabase`.`ubicacion` (`id`)
        ON DELETE CASCADE;

ALTER TABLE `satdatabase`.`extraccionmaterial`
    ADD idubicacion INT,
    ADD CONSTRAINT `extraccionmaterial_tiene_ubicacion`
        FOREIGN KEY (`idubicacion`)
        REFERENCES  `satdatabase`.`ubicacion` (`id`)
        ON DELETE CASCADE;

ALTER TABLE `satdatabase`.`ubicaciondigital`
    ADD CONSTRAINT `ubicaciondigital_es_ubicacion`
        FOREIGN KEY (`id`)
        REFERENCES  `satdatabase`.`ubicacion` (`id`)
        ON DELETE CASCADE;

ALTER TABLE `satdatabase`.`ubicacionfisica`
    ADD CONSTRAINT `ubicacionfisica_es_ubicacion`
        FOREIGN KEY (`id`)
        REFERENCES  `satdatabase`.`ubicacion` (`id`)
        ON DELETE CASCADE;

ALTER TABLE `satdatabase`.`compraventa`
    ADD idorigen INT,
    ADD iddestino INT,
    ADD CONSTRAINT `compraventa_tiene_origen`
        FOREIGN KEY (`idorigen`)
        REFERENCES  `satdatabase`.`ubicacion` (`id`)
        ON DELETE CASCADE,
    ADD CONSTRAINT `compraventa_tiene_destino`
        FOREIGN KEY (`iddestino`)
        REFERENCES  `satdatabase`.`ubicacion` (`id`)
        ON DELETE CASCADE;

ALTER TABLE `satdatabase`.`despacho`
    ADD idorigen INT,
    ADD iddestino INT,
    ADD CONSTRAINT `despacho_tiene_origen`
        FOREIGN KEY (`idorigen`)
        REFERENCES  `satdatabase`.`ubicacion` (`id`)
        ON DELETE CASCADE,
    ADD CONSTRAINT `despacho_tiene_destino`
        FOREIGN KEY (`iddestino`)
        REFERENCES  `satdatabase`.`ubicacion` (`id`)
        ON DELETE CASCADE;

---------------------
-- movimentodinero --
---------------------
CREATE TABLE IF NOT EXISTS `satdatabase`.`despachogasto` (
    `iddespacho` INT NOT NULL,
    `idgasto` INT NOT NULL,
    PRIMARY KEY (`iddespacho`,`idgasto`),
    CONSTRAINT `despacho_tiene_gasto`
        FOREIGN KEY (`idgasto`)
        REFERENCES  `satdatabase`.`movimientodinero` (`id`)
        ON DELETE CASCADE,
    CONSTRAINT `gasto_es_de_despacho`
        FOREIGN KEY (`iddespacho`)
        REFERENCES  `satdatabase`.`despacho` (`id`)
        ON DELETE CASCADE
) ENGINE = InnoDB COMMENT = '';

ALTER TABLE `satdatabase`.`despacho`
    ADD idmonto INT,
    ADD CONSTRAINT `despacho_tiene_monto`
        FOREIGN KEY (`idmonto`)
        REFERENCES  `satdatabase`.`movimientodinero` (`id`)
        ON DELETE CASCADE;

ALTER TABLE `satdatabase`.`movimientodinero`
    ADD idmotivo INT,
    ADD CONSTRAINT `movimientodinero_tiene_motivo`
        FOREIGN KEY (`idmotivo`)
        REFERENCES  `satdatabase`.`motivo` (`id`)
        ON DELETE CASCADE;

CREATE TABLE IF NOT EXISTS `satdatabase`.`movimientodinerocompraventa` (
    `idmovimientodinero` INT NOT NULL,
    `idcompraventa` INT NOT NULL,
    PRIMARY KEY (`idmovimientodinero`,`idcompraventa`),
    CONSTRAINT `compraventa_tiene_movimientodinero`
        FOREIGN KEY (`idmovimientodinero`)
        REFERENCES  `satdatabase`.`movimientodinero` (`id`)
        ON DELETE CASCADE,
    CONSTRAINT `movimientodinero_es_de_compraventa`
        FOREIGN KEY (`idcompraventa`)
        REFERENCES  `satdatabase`.`compraventa` (`id`)
        ON DELETE CASCADE
) ENGINE = InnoDB COMMENT = 'un movimiento de dinero no siemptre es de una compraventa';

ALTER TABLE `satdatabase`.`movimientodinero`
    ADD idformapago INT,
    ADD CONSTRAINT `movimientodinero_tiene_formapago`
        FOREIGN KEY (`idmotivo`)
        REFERENCES  `satdatabase`.`motivo` (`id`)
        ON DELETE CASCADE;

ALTER TABLE `satdatabase`.`movimientodinero`
    ADD idcuentabancaria INT NULL,
    ADD CONSTRAINT `movimientodinero_puede_tener_cuentabancaria`
        FOREIGN KEY (`idcuentabancaria`)
        REFERENCES  `satdatabase`.`cuentabancaria` (`id`)
        ON DELETE CASCADE;

ALTER TABLE `satdatabase`.`movimientodinero`
    ADD identradasalida INT,
    ADD CONSTRAINT `movimientodinero_puede_ser_entrada_o_salida`
        FOREIGN KEY (`identradasalida`)
        REFERENCES  `satdatabase`.`entradasalida` (`id`)
        ON DELETE CASCADE;

--------------
-- sucursal --
--------------
ALTER TABLE `satdatabase`.`caja`
    ADD idsucursal INT,
    ADD CONSTRAINT `caja_tiene_sucursal`
        FOREIGN KEY (`idsucursal`)
        REFERENCES  `satdatabase`.`sucursal` (`id`)
        ON DELETE CASCADE;

ALTER TABLE `satdatabase`.`asistencia`
    ADD idsucursal INT,
    ADD CONSTRAINT `asistencia_es_en_sucursal`
        FOREIGN KEY (`idsucursal`)
        REFERENCES  `satdatabase`.`sucursal` (`id`)
        ON DELETE CASCADE;

ALTER TABLE `satdatabase`.`sucursal`
    ADD idempresa INT,
    ADD CONSTRAINT `asistencia_es_en_sucursal`
        FOREIGN KEY (`idsucursal`)
        REFERENCES  `satdatabase`.`sucursal` (`id`)
        ON DELETE CASCADE;