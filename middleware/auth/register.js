import bcrypt from "bcryptjs";
import prisma from "../../prisma/lib/prisma";

export default async function registerFunction(username, password) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        username: username,
        password: hashedPassword,
      },
    });

    await prisma.$disconnect();
    return true;
  } catch (err) {
    console.error(err);
    return err;
  }
}
