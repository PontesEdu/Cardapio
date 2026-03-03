import { NextResponse } from "next/server"
import { createUser, getAllUsers } from "@/modules/users/service"

export async function POST(req: Request) {
  const { name } = await req.json()
  
  const user = await createUser(name)
  return NextResponse.json(user, { status: 201 })
}

export async function GET() {
  const users = await getAllUsers()
  return NextResponse.json(users)
}