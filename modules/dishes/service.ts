import { prisma } from "@/lib/prisma"

type CreateDishDTO = {
  title: string
  description: string
  price: number
  userId: string
}

export async function createDish(data: CreateDishDTO) {
  return prisma.dish.create({
    data,
  })
}

export async function getAllDishes() {
  return prisma.dish.findMany({
    include: { user: true },
  })
}

export async function updateDish(id: string, data: Partial<CreateDishDTO>) {
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