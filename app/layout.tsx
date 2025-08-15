import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "DevOps Portfolio | Dennys Cedeño",
  description: "Portafolio DevOps: CI/CD, Infraestructura como Código, Cloud y Seguridad.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="container py-10">{children}</main>
          <footer className="container py-10 text-sm opacity-70">
            © {new Date().getFullYear()} Dennys Cedeño — Singularity Box LLC
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
