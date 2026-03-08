import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LoginFormSignIn } from "./login-form-sign-in";



export default function SignIn() {

  return (
    <div className="relative">

      <div className="flex absolute inset-x-0 top-0 z-10 justify-between sm:px-20 h-20 items-center ">

        <h1 className="text-2xl font-bold">MenuGo</h1>


        <div>
          <Button>
            <Link href="/auth/sign-up">Create account</Link>
          </Button>
        </div>
        


      </div>

      <div className="flex h-screen w-full flex-col items-center justify-center gap-5">

        <h1 className="text-5xl font-semibold text-center tracking-tight">Access account</h1>

        <div
          className="w-full rounded-xl border-2 p-5 shadow-xl sm:w-87.5"
        >
          <LoginFormSignIn/>
        </div>
      </div>
    </div>
    
  )
}