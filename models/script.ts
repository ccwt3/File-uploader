import prisma from "../prisma/lib/prisma";

async function main() {
  const user = await prisma.user.findMany({
    where: {
      id: 1,
    },
  });

  return console.log("user: ", user);
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
