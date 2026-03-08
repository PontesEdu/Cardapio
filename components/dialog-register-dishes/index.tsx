"use client"
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useState } from "react";
import { CreateDishDialog } from "./create-dish-dialog";


export function DialogRegisterDishes() {
  const [isCardOpen, setIsCardOpen] = useState(false)

  return (
    <Dialog open={isCardOpen} onOpenChange={setIsCardOpen}>
      <DialogTrigger asChild>
        <Button>
          Criar Prato
        </Button>
      </DialogTrigger>
      <CreateDishDialog/>
    </Dialog>
  )
}