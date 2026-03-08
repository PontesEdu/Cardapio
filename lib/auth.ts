import jwt from "jsonwebtoken"

import { cookies } from "next/headers"

type TokenPayload = {
  userId: string
}

export async function getUserFromCookie(): Promise<TokenPayload | null> {
  const cookieStore = await cookies()

  const token = cookieStore.get("token")?.value

  if (!token) return null

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as TokenPayload

    return decoded
  } catch {
    return null
  }
}