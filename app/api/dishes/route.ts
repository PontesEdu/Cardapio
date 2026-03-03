import { NextResponse } from "next/server"
import { createDish, getAllDishes } from "@/modules/dishes/service"

export async function POST(req: Request) {
  const body = await req.json()
  const dish = await createDish(body)
  return NextResponse.json(dish, { status: 201 })
}

export async function GET() {
  const dishes = await getAllDishes()
  return NextResponse.json(dishes)
}