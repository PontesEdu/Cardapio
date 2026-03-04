import { Header } from "./header";


export default function BoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-7xl flex flex-col min-h-screen mx-auto">
      <Header />

      <main className="container mx-auto mb-10">
        {children}
      </main>
    </div>
  )
}