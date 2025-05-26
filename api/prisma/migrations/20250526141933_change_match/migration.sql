/*
  Warnings:

  - You are about to drop the `matchparticipation` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `bluePlayers` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orangePlayers` to the `Match` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `matchparticipation` DROP FOREIGN KEY `MatchParticipation_matchId_fkey`;

-- AlterTable
ALTER TABLE `match` ADD COLUMN `bluePlayers` JSON NOT NULL,
    ADD COLUMN `orangePlayers` JSON NOT NULL;

-- DropTable
DROP TABLE `matchparticipation`;
