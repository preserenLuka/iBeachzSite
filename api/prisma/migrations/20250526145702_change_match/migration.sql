/*
  Warnings:

  - You are about to drop the column `lossStreak` on the `playerstats` table. All the data in the column will be lost.
  - You are about to drop the column `winStreak` on the `playerstats` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `playerstats` DROP COLUMN `lossStreak`,
    DROP COLUMN `winStreak`,
    ADD COLUMN `streak` INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE `PlayerMatch` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `matchId` INTEGER NOT NULL,
    `playerStatsId` INTEGER NOT NULL,
    `team` ENUM('BLUE', 'ORANGE') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PlayerMatch` ADD CONSTRAINT `PlayerMatch_matchId_fkey` FOREIGN KEY (`matchId`) REFERENCES `Match`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PlayerMatch` ADD CONSTRAINT `PlayerMatch_playerStatsId_fkey` FOREIGN KEY (`playerStatsId`) REFERENCES `PlayerStats`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
