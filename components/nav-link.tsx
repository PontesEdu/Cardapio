"use client"

import Link, { LinkProps } from "next/link"
import { usePathname } from "next/navigation"

export type NavLinkProps = LinkProps & {
  children: React.ReactNode
}

export function NavLink({ children, ...props }: NavLinkProps) {
  const pathname = usePathname()

  return (
    <Link
      data-current={pathname === props.href}
      className="text-lg text-muted-foreground hover:text-foreground data-[current=true]:text-foreground flex items-center gap-1.5 font-medium"
      {...props}
    >
      {children}
    </Link>
  )
}