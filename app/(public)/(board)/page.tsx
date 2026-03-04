import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    //HOME
    <div className="px-6">

      {/* BANNER 1*/}
      <div className="my-30 flex flex-col justify-center gap-4 text-center sm:text-start">
        <h1 className="text-6xl lg:text-7xl font-bold">Best Quality Food</h1>
        <p className="max-w-150 text-md text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo saepe ex itaque aspernatur ipsam consequatur in, laborum ipsa qui facilis tenetur? Ut repellendus numquam perferendis error fuga in, illum rem!
        </p>
        <Button className="w-45 h-12">
          book a table
        </Button>
      </div>

      
      {/* BANNER 2*/}
      <div className="mt-30 flex flex-col justify-center gap-5 text-center items-center bg-muted py-10">
        <h1 className="text-5xl font-bold">🍴Our Special Dishes</h1>
        <p className="max-w-150 text-md text-muted-foreground">
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, labore quasi temporibus consectetur suscipit sunt tenetur, veniam neque distinctio fugit in sint natus deserunt hic eaque dolores
        </p>
      </div>

    </div>
  );
}
