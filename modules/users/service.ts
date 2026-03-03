import { prisma } from "@/lib/prisma"
import { Prisma } from "@prisma/client"


export async function createUser(data: Prisma.UserCreateInput) {
  return prisma.user.create({
    data,
  })
}

export async function getAllUsers() {
  return prisma.user.findMany({
    include: { dishes: true },
  })
}

export async function findUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email },
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