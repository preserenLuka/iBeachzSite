-- AlterTable
ALTER TABLE `playermatch` ADD COLUMN `demosInflicted` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `demosTaken` INTEGER NOT NULL DEFAULT 0;
