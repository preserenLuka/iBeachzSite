/*
  Warnings:

  - You are about to alter the column `playerId` on the `opponentrecord` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `opponentId` on the `opponentrecord` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to drop the column `playerId` on the `playerstats` table. All the data in the column will be lost.
  - You are about to alter the column `playerId` on the `teammaterecord` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `teammateId` on the `teammaterecord` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `opponentrecord` DROP FOREIGN KEY `OpponentRecord_playerId_fkey`;

-- DropForeignKey
ALTER TABLE `teammaterecord` DROP FOREIGN KEY `TeammateRecord_playerId_fkey`;

-- DropIndex
DROP INDEX `OpponentRecord_playerId_fkey` ON `opponentrecord`;

-- DropIndex
DROP INDEX `PlayerStats_playerId_key` ON `playerstats`;

-- DropIndex
DROP INDEX `TeammateRecord_playerId_fkey` ON `teammaterecord`;

-- AlterTable
ALTER TABLE `opponentrecord` MODIFY `playerId` INTEGER NOT NULL,
    MODIFY `opponentId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `playerstats` DROP COLUMN `playerId`;

-- AlterTable
ALTER TABLE `teammaterecord` MODIFY `playerId` INTEGER NOT NULL,
    MODIFY `teammateId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `TeammateRecord` ADD CONSTRAINT `TeammateRecord_playerId_fkey` FOREIGN KEY (`playerId`) REFERENCES `PlayerStats`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TeammateRecord` ADD CONSTRAINT `TeammateRecord_teammateId_fkey` FOREIGN KEY (`teammateId`) REFERENCES `PlayerStats`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OpponentRecord` ADD CONSTRAINT `OpponentRecord_playerId_fkey` FOREIGN KEY (`playerId`) REFERENCES `PlayerStats`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OpponentRecord` ADD CONSTRAINT `OpponentRecord_opponentId_fkey` FOREIGN KEY (`opponentId`) REFERENCES `PlayerStats`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
