/*
  Warnings:

  - Added the required column `opponentName` to the `OpponentRecord` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teammateName` to the `TeammateRecord` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `opponentrecord` ADD COLUMN `opponentName` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `teammaterecord` ADD COLUMN `teammateName` VARCHAR(191) NOT NULL;
