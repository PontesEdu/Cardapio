import { Dish, getDishes } from "@/http/get-dishes"
import { CarouselItem } from "../ui/carousel"
import { DishCard } from "../dish-card"

export async function DishesCarousel() {
  const dishes = await getDishes()

  if (!dishes || !dishes.length) {
    return (
      <p className="text-center text-muted-foreground">
        Ops... ainda não encontramos pratos 😢
      </p>
    )
  }

  return (
    <>
      {dishes.map((dish: Dish) => (
        <CarouselItem
          key={dish.id}
          className="basis-55 lg:basis-1/4"
        >
          <div className="p-1">
            <DishCard 
              price={dish.price} 
              title={dish.title} 
              description={dish.description} 
              id={dish.id} 
            />
          </div>
        </CarouselItem>
      ))}
    </>
  )
}