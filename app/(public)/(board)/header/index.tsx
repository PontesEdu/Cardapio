import { NavLink } from "@/components/nav-link";
import { Home, Utensils } from "lucide-react";



export function Header(){

  return (
    <header className="h-20 px-6 flex justify-between items-center bg-muted">
      <h1 className="text-2xl font-bold">MenuGo</h1>


      <nav className="flex gap-6 items-center">
        <NavLink href="/">
          <Home className="h-6 w-6" />
          home
        </NavLink>

        <NavLink href="/dishes">
          <Utensils className="h-5 w-5" />
          dishes
        </NavLink>
      </nav>
    </header>
  )
}