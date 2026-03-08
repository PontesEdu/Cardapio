
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
        src={"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"}
        alt={title}
        width={400}
        height={260}
        className="w-full h-65 object-cover"
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