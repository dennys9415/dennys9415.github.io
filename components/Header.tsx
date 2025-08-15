"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header className="border-b border-slate-200 dark:border-slate-800">
      <div className="container py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">
          DevOps Portfolio
        </Link>
        <nav className="flex gap-6 items-center">
          <Link href="/projects" className="hover:text-primary-500">Proyectos</Link>
          {mounted && (
            <button
              aria-label="Cambiar tema"
              onClick={() => setTheme((resolvedTheme === "dark") ? "light" : "dark")}
              className="px-3 py-1 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-primary-400 dark:hover:border-primary-400"
            >
              {resolvedTheme === "dark" ? "☀️ Claro" : "🌙 Oscuro"}
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
