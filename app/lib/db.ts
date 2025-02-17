import { PrismaClient } from "@prisma/client/extension";

export const prismaCLient = new PrismaClient();
//whenever u create ur schema, migrate your database and create your client