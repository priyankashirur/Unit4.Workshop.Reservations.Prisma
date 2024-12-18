//create and export new prisma client

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
module.exports = prisma;
