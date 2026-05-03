import type { Metadata } from "next";
import { Montserrat, Syne } from "next/font/google";
import "./globals.css";

// Fonte para textos corporais (elegante e limpa)
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600"],
});

// Fonte para Títulos (Moderna, larga e impactante)
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "Monumental | Estruturas e Soluções para Eventos",
  description: "Elevamos o padrão do seu evento em Brasília com tecnologia de ponta, painéis de LED, iluminação cênica e estruturas Q30.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${syne.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#050505]">
        {children}
      </body>
    </html>
  );
}