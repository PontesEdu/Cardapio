import { prisma } from "@/lib/prisma"
import { Prisma } from "@prisma/client"


export async function createDish(data: Prisma.DishUncheckedCreateInput) {
  return prisma.dish.create({
    data,
  })
}


interface GetDishesParams {
  limit?: number
}

export async function getDishesServices({ limit = 10 }: GetDishesParams) {
  const dishes = await prisma.dish.findMany({
    take: limit,
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      title: true,
      description: true,
      price: true,
    },
  })

  return dishes
}



export async function updateDish(id: string, data: Partial<Prisma.DishUncheckedCreateInput>) {
  return prisma.dish.update({
    where: { id },
    data,
  })
}

export async function deleteDish(id: string) {
  return prisma.dish.delete({
    where: { id },
  })
}