/*
  Warnings:

  - You are about to drop the column `userId` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the `UserAnswer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Question` DROP FOREIGN KEY `Question_userId_fkey`;

-- DropForeignKey
ALTER TABLE `UserAnswer` DROP FOREIGN KEY `UserAnswer_choiceId_fkey`;

-- DropForeignKey
ALTER TABLE `UserAnswer` DROP FOREIGN KEY `UserAnswer_userId_fkey`;

-- AlterTable
ALTER TABLE `Question` DROP COLUMN `userId`;

-- DropTable
DROP TABLE `UserAnswer`;

-- CreateTable
CREATE TABLE `UserChoice` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `choiceId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserChoice` ADD CONSTRAINT `UserChoice_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserChoice` ADD CONSTRAINT `UserChoice_choiceId_fkey` FOREIGN KEY (`choiceId`) REFERENCES `Choice`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
