-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "batchTiming" INTEGER NOT NULL,
    CONSTRAINT age_restriction CHECK (age >= 18 and age<=65)
);
