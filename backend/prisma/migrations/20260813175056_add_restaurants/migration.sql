-- Multi-restaurant support: partner kitchens + meal attribution.

-- Create the Restaurant table.
CREATE TABLE "Restaurant" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cuisine" TEXT,
    "neighborhood" TEXT,
    "postalPrefixes" TEXT[],
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "Restaurant_pkey" PRIMARY KEY ("id")
);

-- Seed the three demo partner kitchens.
INSERT INTO "Restaurant" ("id", "name", "cuisine", "neighborhood", "postalPrefixes", "isActive") VALUES
    ('rest_oak_ash',    'Oak & Ash Kitchen',   'Grill & bowls',       'Downtown / Bay',      ARRAY['M5J','M5K'], true),
    ('rest_sweet_basil', 'Sweet Basil',         'Mediterranean & veg', 'Harbourfront',        ARRAY['M5V','M5J'], true),
    ('rest_kobu',       'Kobu Noodle & Rice',  'Asian bowls',         'Financial District',  ARRAY['M5K','M5H'], true);

-- Add restaurantId to Meal with a temporary default so existing rows satisfy
-- the NOT NULL constraint, then assign each meal to its kitchen and drop the default.
ALTER TABLE "Meal" ADD COLUMN "restaurantId" TEXT;

UPDATE "Meal" SET "restaurantId" = CASE "id"
    WHEN 'meal_shawarma_1' THEN 'rest_oak_ash'
    WHEN 'meal_steak_5'    THEN 'rest_oak_ash'
    WHEN 'meal_chili_8'    THEN 'rest_oak_ash'
    WHEN 'meal_salmon_2'   THEN 'rest_sweet_basil'
    WHEN 'meal_falafel_4'  THEN 'rest_sweet_basil'
    WHEN 'meal_caesar_7'   THEN 'rest_sweet_basil'
    WHEN 'meal_teriyaki_3' THEN 'rest_kobu'
    WHEN 'meal_padthai_6'  THEN 'rest_kobu'
END;

ALTER TABLE "Meal" ALTER COLUMN "restaurantId" SET NOT NULL;

-- Foreign key + index.
ALTER TABLE "Meal" ADD CONSTRAINT "Meal_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
CREATE INDEX "Meal_restaurantId_idx" ON "Meal"("restaurantId");
