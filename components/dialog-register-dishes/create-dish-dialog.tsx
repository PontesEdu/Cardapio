"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"

import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const schema = z.object({
  title: z.string().min(3, "O título deve ter no mínimo 3 caracteres"),
  description: z.string().min(5, "A descrição deve ter no mínimo 5 caracteres"),
  price: z.number("Informe o preço").positive("O preço deve ser maior que 0"),
})

type FormData = z.infer<typeof schema>

export function CreateDishDialog() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  async function onSubmit(data: FormData) {
    try {
      const res = await fetch("http://localhost:3000/api/dishes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        throw new Error()
      }

      toast.success("Prato criado com sucesso!")

      reset()
    } catch {
      toast.error("Erro ao criar prato")
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Criar prato</DialogTitle>
      </DialogHeader>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        {/* TITLE */}
        <div className="space-y-1">
          <Input placeholder="Título do prato" {...register("title")} />

          {errors.title && (
            <p className="text-sm text-red-500">
              {errors.title.message}
            </p>
          )}
        </div>

        {/* DESCRIPTION */}
        <div className="space-y-1">
          <Textarea
            placeholder="Descrição"
            {...register("description")}
          />

          {errors.description && (
            <p className="text-sm text-red-500">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* PRICE */}
        <div className="space-y-1">
          <Input
            type="number"
            step="0.01"
            placeholder="Preço"
            {...register("price", { valueAsNumber: true })}
          />

          {errors.price && (
            <p className="text-sm text-red-500">
              {errors.price.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Criando..." : "Criar prato"}
        </Button>
      </form>
    </DialogContent>
  )
}