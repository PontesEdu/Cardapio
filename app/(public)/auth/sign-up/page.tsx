import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LoginForm } from "./login-form";



export default function SignUp() {

  return (
    <div className="">

      <div className="flex justify-between sm:px-20 h-20 items-center ">

        <h1 className="text-2xl font-bold">LOGO</h1>


        <div>
          <Button>
            
            <Link href="/auth/sign-in">Sign in</Link>
          </Button>
        </div>

      </div>

      <div className="flex mt-20 w-full flex-col items-center justify-center gap-5">

        <h1 className="text-4xl font-semibold text-center tracking-tight">Create account</h1>

        <div
          className="w-full rounded-xl border-2 p-5 shadow-xl sm:w-87.5"
        >
          <LoginForm/>
        </div>
      </div>
    </div>
    
  )
}