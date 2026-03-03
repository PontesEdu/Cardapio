import { NextResponse } from "next/server"
import { updateUser, deleteUser } from "@/modules/users/service"

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { name } = await req.json()
  const user = await updateUser(params.id, name)
  return NextResponse.json(user)
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await deleteUser(params.id)
  return NextResponse.json({ message: "User deleted" })
}