import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Contato from "./contato/page";

const nunito_Sans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lista de países",
  description: "Lista de países criada com NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito_Sans.className}>
        
        <main className="bg-gray-100  min-h-screen flex flex-col items-center">
          <nav className="w-full bg-white h-16 flex justify-center items-center">
            <section className="container flex items-center gap-3">
              <Image width={48} height={48} src ="/logo.svg"
              alt="Logo da aplicação"/>
              <h1 className="font-bold text-2xl">Lista de Países</h1>
            </section>
          </nav>
          
        {children}
        </main>
        
        </body>
    </html>
  );
}
