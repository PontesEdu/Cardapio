
import SkeletonCard from "../skeleton-card"
import { CarouselItem } from "../ui/carousel"

export function SkeletonCarousel() {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <CarouselItem
          key={index}
          className="basis-55 lg:basis-1/4"
        >
          <div className="p-1">
            <SkeletonCard />
          </div>
        </CarouselItem>
      ))}
    </>
  )
}