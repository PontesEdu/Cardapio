import { prisma } from "@/lib/prisma"

export async function createUser(name: string) {
  return prisma.user.create({
    data: { name },
  })
}

export async function getAllUsers() {
  return prisma.user.findMany({
    include: { dishes: true },
  })
}

export async function updateUser(id: string, name: string) {
  return prisma.user.update({
    where: { id },
    data: { name },
  })
}

export async function deleteUser(id: string) {
  return prisma.user.delete({
    where: { id },
  })
}