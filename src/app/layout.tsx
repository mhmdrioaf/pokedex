import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import Provider from "@/lib/query-provider";
import { PokemonContextProvider } from "@/lib/context/context";
import Footer from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokedex",
  description: "A simple pokedex app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full h-[125vh] fixed top-0 left-0 noise bg-blend-screen pointer-events-none z-[60] opacity-50" />
        <Header />
        <Provider>
          <PokemonContextProvider>{children}</PokemonContextProvider>
        </Provider>
        <Footer />
      </body>
    </html>
  );
}
