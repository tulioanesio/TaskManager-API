import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const createMany = await prisma.task.createMany({
    data: [
      { task: "Lavar a louça" },
      { task: "Aspirar a casa" },
      { task: "Lavar roupa" },
      { task: "Regar as plantas" },
    ],
  });

  console.log(`Inserted ${createMany.count} tasks`);
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
