import { Header } from "./header";


export default function BoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-405 flex flex-col min-h-screen mx-auto">
      <Header />

      <main className="container mx-auto mb-10 px-5">
        {children}
      </main>
    </div>
  )
}