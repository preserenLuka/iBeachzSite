/*
  Warnings:

  - You are about to drop the column `demos` on the `playerstats` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `playerstats` DROP COLUMN `demos`,
    ADD COLUMN `demosInflicted` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `demosTaken` INTEGER NOT NULL DEFAULT 0;
