"use client";

import { useState } from "react";
import Link from "next/link";
import { MenuIcon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="apify-header flex items-center justify-between px-6 md:px-10 py-4 bg-white z-20">
      <div className="flex items-center gap-3">
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-blue-700 hover:underline">Hypehour</Link>
      </div>

      <nav>
        <ul className="hidden md:flex gap-6 text-zinc-700 font-medium items-center">
          <li><a href="/ia-para-imagens" className="hover:text-blue-600 transition-colors">IA para imagens</a></li>
          <li><a href="/ia-para-vibe-coding" className="hover:text-blue-600 transition-colors">Vibe Coding</a></li>
          <li><a href="/ia-para-desenvolvedores" className="hover:text-blue-600 transition-colors">Desenvolvedores</a></li>
          <li><a href="#ultimas-ias" className="hover:text-blue-600 transition-colors">Últimas IAs</a></li>
          <li><a href="#depoimentos" className="hover:text-blue-600 transition-colors">Depoimentos</a></li>
        </ul>

        <div className="md:hidden">
          <button
            aria-label="Abrir menu"
            onClick={() => setOpen((s) => !s)}
            className="p-2 rounded-md text-zinc-700 hover:bg-zinc-100"
          >
            {open ? <XMarkIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-md p-4 md:hidden">
            <ul className="flex flex-col gap-3 text-zinc-700 font-medium">
              <li><a href="/ia-para-imagens" className="block py-2">IA para imagens</a></li>
              <li><a href="/ia-para-vibe-coding" className="block py-2">Vibe Coding</a></li>
              <li><a href="/ia-para-desenvolvedores" className="block py-2">Desenvolvedores</a></li>
              <li><a href="#ultimas-ias" className="block py-2">Últimas IAs</a></li>
              <li><a href="#depoimentos" className="block py-2">Depoimentos</a></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
