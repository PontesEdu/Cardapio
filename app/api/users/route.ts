import { NextResponse } from "next/server"
import { createUser } from "@/modules/users/service"
import bcrypt from "bcrypt"
import z from "zod"

const createUserSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.email({ message: "Email inválido" }),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { name, email, password } = createUserSchema.parse(body)

    const password_hash = await bcrypt.hash(password, 10)

    const user = await createUser({
      name,
      email,
      password_hash,
    })

    return NextResponse.json(user, { status: 201 })

  } catch (error) {
    return NextResponse.json(
      { message: "Dados inválidos" },
      { status: 400 }
    )
  }
}