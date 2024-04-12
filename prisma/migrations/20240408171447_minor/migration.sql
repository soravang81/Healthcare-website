/*
  Warnings:

  - You are about to drop the column `userId` on the `Appointments` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[buid]` on the table `Appointments` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `buid` to the `Appointments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Appointments" DROP CONSTRAINT "Appointments_userId_fkey";

-- DropIndex
DROP INDEX "Appointments_userId_key";

-- AlterTable
ALTER TABLE "Appointments" DROP COLUMN "userId",
ADD COLUMN     "buid" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Appointments_buid_key" ON "Appointments"("buid");

-- AddForeignKey
ALTER TABLE "Appointments" ADD CONSTRAINT "Appointments_buid_fkey" FOREIGN KEY ("buid") REFERENCES "BookedUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;
