import { Button } from "@/components/ui/button";
import { CarouselCard } from "../../../../components/carousel";


export default function Home() {
  return (
    //HOME
    <div className="space-y-8">

      {/* BANNER 1*/}
      <div className="my-30 flex flex-col justify-center gap-4 text-center sm:text-start">
        <h1 className="text-6xl lg:text-7xl font-bold">Comida da Melhor Qualidade</h1>
        <p className="max-w-150 text-md text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo saepe ex itaque aspernatur ipsam consequatur in, laborum ipsa qui facilis tenetur? Ut repellendus numquam perferendis error fuga in, illum rem!
        </p>
        <Button className="w-40 h-11 text-lg">
          Pratos!
        </Button>
      </div>

      
      {/* BANNER 2*/}
      <div className="flex flex-col justify-center gap-5 text-center items-center bg-muted py-10">
        <h1 className="text-5xl font-bold">🍴Our Special Dishes</h1>
        <p className="max-w-150 text-md text-muted-foreground">
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, labore quasi temporibus consectetur suscipit sunt tenetur, veniam neque distinctio fugit in sint natus deserunt hic eaque dolores
        </p>
      </div>


      <div>
        <CarouselCard />
      </div>

    </div>
  );
}
