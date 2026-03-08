
export interface Dish {
  id: string
  title: string
  description: string
  price: number
}

export async function getDishes(limit = 10) {
  const response = await fetch(
    `http://localhost:3000/api/dishes?limit=${limit}`,
  )

  const data = await response.json()

  return data?.dishes ?? []
}