

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">

      <main className="px-5">
        {children}
      </main>
    </div>
  )
}