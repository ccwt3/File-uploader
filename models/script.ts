import prisma from "../prisma/lib/prisma";

async function main() {
  const user = await prisma.user.create({
    data: {
      username: "josepe",
      password: "12345",
      isAuth: false,
    },
  });

  return console.log("user created", user);
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("succesfully closed");
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
