"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"


import { z } from "zod"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export const loginFormSchema = z.object({
  name: z.string(),
  email: z.email("Email inválido"),
  password: z.string().min(6, "Senha precisa ter 6 caracteres"),
})

export type LoginFormData = z.infer<typeof loginFormSchema>

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  })

  const router = useRouter()

  async function onSubmit(data: LoginFormData) {

    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const error = await response.json()
      toast.error(error.message)
      return
    }

    toast.success("Cadastro criado com sucesso!", {
      action: {
        label: "Login",
        onClick: () => router.push(`/auth/sign-in?email=${data.email}`),
      },
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

      <div className="space-y-2">
        <Label htmlFor="name">Nome:</Label>
        <Input
          type="text"
          id="name"
          placeholder="digite seu nome"
          className="shadow-md"
          required
          {...register('name')}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Seu e-mail:</Label>

        <Input
          type="email"
          id="email"
          placeholder="Digite seu e-mail"
          className="shadow-md"
          {...register("email")}
        />

        {errors.email && (
          <p className="text-red-500 text-sm">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Senha:</Label>

        <Input
          type="password"
          id="password"
          placeholder="Digite sua senha"
          className="shadow-md"
          {...register("password")}
        />

        {errors.password && (
          <p className="text-red-500 text-sm">
            {errors.password.message}
          </p>
        )}
      </div>

      <Button className="w-full" disabled={isSubmitting} type="submit">
        Acessar Painel
      </Button>
    </form>
  )
}