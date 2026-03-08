import { findUserByEmail } from "@/modules/users/service"
import bcrypt from "bcrypt"
import { NextResponse } from "next/server"
import z from "zod"
import jwt from "jsonwebtoken"

const loginSchema = z.object({
  email: z.email({ message: "Email inválido" }),
  password: z.string().min(6, { message: "Senha deve ter pelo menos 6 caracteres" }),
})

export async function POST(req: Request) {
  const body = await req.json()

  const result = loginSchema.safeParse(body)

  if (!result.success) {
    return NextResponse.json(
      { message: result.error.flatten() },
      { status: 400 }
    )
  }

  const { email, password } = result.data

  const user = await findUserByEmail(email)

  if (!user) {
    return NextResponse.json(
      { message: "Credenciais inválidas" },
      { status: 401 }
    )
  }

  const passwordMatch = await bcrypt.compare(
    password,
    user.password_hash
  )

  if (!passwordMatch) {
    return NextResponse.json(
      { message: "Credenciais inválidas" },
      { status: 401 }
    )
  }

  const token = jwt.sign(
    {
      userId: user.id,
    },
    process.env.JWT_SECRET!,
    {
      expiresIn: "7d"
    }
  )

  const response = NextResponse.json(
    { message: "Login realizado com sucesso",
      token
    },
    { status: 200 }
  )

  response.cookies.set("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 7
  })

  return response
}
