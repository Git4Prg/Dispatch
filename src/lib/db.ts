import { PrismaClient } from '@prisma/client'
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

// declare global {
//   var prisma: PrismaClient | undefined
// }

// const db = globalThis.prisma || new PrismaClient({
//   log: ['query', 'info', 'warn', 'error'], 
// })

// if (process.env.NODE_ENV === 'development') {
//   globalThis.prisma = db
// }

// export default db

// import { PrismaClient } from "./generated/prisma/client";

const pool = new Pool({ connectionString: process.env.DATABASE_URL! });
const adapter = new PrismaPg(pool);

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const db = globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;