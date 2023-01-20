/*
  Warnings:

  - A unique constraint covering the columns `[rut]` on the table `Persona` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `rut` to the `Persona` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Persona` ADD COLUMN `rut` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Contacto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `personaId` INTEGER NOT NULL,
    `tipo` ENUM('TELEFONOFIJO', 'TELEFONOMOVIL', 'CORREOELECTRONICO') NOT NULL DEFAULT 'CORREOELECTRONICO',
    `detalles` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Persona_rut_key` ON `Persona`(`rut`);

-- AddForeignKey
ALTER TABLE `Contacto` ADD CONSTRAINT `Contacto_personaId_fkey` FOREIGN KEY (`personaId`) REFERENCES `Persona`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
