require("dotenv-flow").config();
const { PrismaClient } = require("@prisma/client");

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing at runtime");
}

// Log host/user for debugging
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

// Use a single global PrismaClient
let prisma;
if (!global.prisma) {
  global.prisma = new PrismaClient({
    log: ["error", "warn"], // optional: keep logs
  });
}
prisma = global.prisma;

module.exports = prisma;
