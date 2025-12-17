import prisma from "../../prisma/lib/prisma";
import bcrypt from "bcryptjs";
import LocalStrategy from "passport-local";

export default new LocalStrategy(async (username, password, done) => {
  const user = await prisma.user.findFirst({
    where: {
      username: username,
    },
  });

  if (user === null) {
    return done(null, false, { message: "Username or password Incorrect" });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return done(null, false, { message: "Incorrect Username or password" });
  }

  return done(null, user);
});
