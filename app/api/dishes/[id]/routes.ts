import { NextResponse } from "next/server"
import { updateDish, deleteDish } from "@/modules/dishes/service"

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const body = await req.json()
  const dish = await updateDish(params.id, body)
  return NextResponse.json(dish)
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await deleteDish(params.id)
  return NextResponse.json({ message: "Dish deleted" })
}