-- CreateEnum
CREATE TYPE "BoxMode" AS ENUM ('SINGLE_RESTAURANT', 'MIXED');

-- DropIndex
DROP INDEX "Meal_restaurantId_idx";

-- AlterTable
ALTER TABLE "Subscription" ADD COLUMN     "boxMode" "BoxMode" NOT NULL DEFAULT 'MIXED',
ADD COLUMN     "preferredRestaurantId" TEXT;
