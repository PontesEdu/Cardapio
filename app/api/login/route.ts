import { findUserByEmail } from "@/modules/users/service"
import bcrypt from "bcrypt"
import { NextResponse } from "next/server"
import z from "zod"



const loginSchema = z.object({
  email: z.email({ message: "Email inválido" }),
  password: z.string().min(6, { message: "Senha obrigatória" }),
})

export async function POST(req: Request) {
  const body = req.json()

  const result = loginSchema.safeParse(body)

  if (!result.success) {
    return NextResponse.json(
      { errors: result.error.flatten },
      { status: 400 }
    )
  }

  const { email, password } = result.data

  const user = await findUserByEmail(email)

  if (!user) {
    return NextResponse.json(
      { error: "Credenciais inválidas" },
      { status: 401 }
    )
  }

  const passwordMatch = await bcrypt.compare(
    password,
    user.password_hash
  )

  if (!passwordMatch) {
    return NextResponse.json(
      { error: "Credenciais inválidas" },
      { status: 401 }
    )
  }

  return NextResponse.json(
    { message: "Login realizado com sucesso" },
    { status: 200 }
  )
}