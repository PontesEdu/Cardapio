import { Skeleton } from "./ui/skeleton";





export default function SkeletonCard() {
  return (
    <div className="overflow-hidden">
      {/* Imagem */}
      <Skeleton className="h-65 w-65 rounded-2xl" />

      <div className="space-y-2 p-2">
        {/* Título */}
        <Skeleton className="h-5 w-40" />
        {/* Data */}
        <Skeleton className="h-4 w-28" />
      </div>
    </div>
  )
}