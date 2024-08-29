import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["query"],  // class instance
});

export default prisma;
