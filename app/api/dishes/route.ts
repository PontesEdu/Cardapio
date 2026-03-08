import { NextResponse } from "next/server"
import { createDish, getDishesServices } from "@/modules/dishes/service"
import z from "zod"
import { getUserFromCookie } from "@/lib/auth"


export const createDishSchema = z.object({
  title: z.string().min(3, "O título deve ter no mínimo 3 caracteres"),
  description: z.string().min(5, "A descrição deve ter no mínimo 5 caracteres"),
  price: z.coerce.number().positive("O preço deve ser maior que 0")
})

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const result = createDishSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.flatten() },
        { status: 400 }
      )
    }

    const user = await getUserFromCookie()

    if (!user) {
      return NextResponse.json(
        { error: "Usuário não autenticado" },
        { status: 401 }
      )
    }

    const dish = await createDish({
      ...result.data,
      userId: user.userId
    })

    return NextResponse.json(dish, { status: 201 })
  } catch {
    return NextResponse.json(
      { error: "Erro ao criar prato" },
      { status: 500 }
    )
  }
}


export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)

    const limit = Number(searchParams.get("limit") ?? 10)

    const dishes = await getDishesServices({ limit })

    return NextResponse.json({
      dishes,
    })
  } catch {
    return NextResponse.json(
      { message: "Erro ao buscar pratos" },
      { status: 500 }
    )
  }
}
