import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";



export default function SignIn() {

  return (
    <div className="">

      <div className="flex justify-between sm:px-20 h-20 items-center ">

        <h1 className="text-2xl font-bold">LOGO</h1>


        <div>
          <Button>
            <Link href="/auth/sign-up">Create account</Link>
          </Button>
        </div>
        


      </div>

      <div className="flex mt-30 w-full flex-col items-center justify-center gap-5">

        <h1 className="text-4xl font-semibold text-center tracking-tight">Access account</h1>

        <div
          className="w-full rounded-xl border-2 p-5 shadow-xl sm:w-87.5"
        >
          <form className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail:</Label>
              <Input
                type="email"
                id="email"
                placeholder="Digite seu e-mail"
                className="shadow-md"
                required
                // {...register('email')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">senha:</Label>
              <Input
                type="password"
                id="password"
                placeholder="digite sua senha"
                className="shadow-md"
                required
                // {...register('password')}
              />
            </div>
            <Button className="w-full" type="submit">
              Acessar Painel
            </Button>
          </form>
        </div>
      </div>
    </div>
    
  )
}