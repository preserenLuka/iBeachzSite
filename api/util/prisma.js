require("dotenv-flow").config();

const { PrismaClient } = require("@prisma/client");
const { PrismaMariaDb } = require("@prisma/adapter-mariadb");

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing at runtime");
}

// Log what host/user it’s REALLY using (safe-ish masking)
try {
  const u = new URL(process.env.DATABASE_URL);
  console.log("[prisma] connecting to:", {
    host: u.host,
    user: u.username,
    db: u.pathname?.replace("/", "") || null,
  });
} catch {
  console.log("[prisma] DATABASE_URL not parseable");
}

const adapter = new PrismaMariaDb({ url: process.env.DATABASE_URL });
module.exports = new PrismaClient({ adapter, log: ["error", "warn"] });
