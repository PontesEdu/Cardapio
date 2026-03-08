import { Suspense } from "react"
import { DishesCarousel } from "./dishes-carousel"
import { SkeletonCarousel } from "./skeleton-carousel"
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "../ui/carousel"

export function CarouselCard() {
  return (
    <div className="space-y-3">
      <h2 className="text-3xl font-semibold tracking-tighter">
        Pratos
      </h2>

      <Carousel
        opts={{ align: "start" }}
        className="relative w-full px-6 md:px-12"
      >
        <CarouselContent>

          <Suspense fallback={<SkeletonCarousel />}>
            <DishesCarousel />
          </Suspense>

        </CarouselContent>

        <CarouselPrevious className="-left-2" />
        <CarouselNext className="-right-2" />
      </Carousel>
    </div>
  )
}