/*
  Warnings:

  - You are about to drop the column `bluePlayers` on the `match` table. All the data in the column will be lost.
  - You are about to drop the column `orangePlayers` on the `match` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `match` DROP COLUMN `bluePlayers`,
    DROP COLUMN `orangePlayers`;

-- AlterTable
ALTER TABLE `playermatch` ADD COLUMN `assists` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `goals` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `points` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `saves` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `shots` INTEGER NOT NULL DEFAULT 0;
