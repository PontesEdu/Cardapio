import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";



export default function SignIn() {

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-5">

      <h1 className="text-4xl font-semibold tracking-tight">Create free account</h1>

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
            />
          </div>
          <Button className="w-full" type="submit">
            Acessar Painel
          </Button>
        </form>
      </div>
    </div>
  )
}