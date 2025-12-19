import session from "express-session";
import "dotenv/config";
import { PrismaSessionStore } from "@quixo3/prisma-session-store";
import prisma from "../../prisma/lib/prisma.ts";

export default session({
  cookie: {
    maxAge: 15 * 60 * 1000,
  },
  secret: process.env.COOKIE_SECRET,
  resave: true,
  saveUninitialized: true,
  store: new PrismaSessionStore(prisma, {
    checkPeriod: 2 * 60 * 1000,
    dbRecordIdIsSessionId: true,
    dbRecordIdFunction: undefined,
  }),
});
