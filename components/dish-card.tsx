
import Image from "next/image"


interface Dish {
  id: string
  title: string
  description: string
  price: number
}

export function DishCard({id, description, price , title}: Dish) {
  return (
    <div className="overflow-hidden rounded-2xl bg-background">
      <Image
        src={"https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        alt={title}
        width={400}
        height={260}
        className="w-full h-50 object-cover"
      />

      <div className="p-3 space-y-1">
        <h2 className="text-lg font-semibold leading-tight">
          {title}
        </h2>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>

        <span className="text-sm font-medium">
          R$ {price.toFixed(2)}
        </span>
      </div>
    </div>
  )
}