"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white/80 backdrop-blur-md shadow-sm fixed top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="HypeHour" width={200} height={50} className="h-10 w-auto" priority />
        </Link>

        {/* Desktop Menu */}
        <nav>
          <ul className="hidden md:flex gap-6 text-zinc-700 font-medium items-center">
            <li><Link href="/ia-para-imagens" className="hover:text-black transition-colors">Imagens</Link></li>
            <li><Link href="/ia-para-criar-videos" className="hover:text-black transition-colors">Vídeos</Link></li>
            <li><Link href="/pacotes-de-ferramentas-e-agregadores-ia" className="hover:text-black transition-colors">Agregadores de IA</Link></li>
            <li><Link href="/transcrever-audio" className="hover:text-black transition-colors">Transcrever Áudio</Link></li>
            <li><Link href="/ia-para-fazer-ata-reuniao" className="hover:text-black transition-colors">Ata de Reunião</Link></li>
            <li><Link href="/ferramenta-de-deteccao-de-ia" className="hover:text-black transition-colors">Detecção de IA</Link></li>

            {/* Dropdown Outras IAs */}
            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-black transition-colors focus:outline-none">
                Outras IAs
                <ChevronDownIcon className="w-4 h-4" />
              </button>
              <div className="absolute top-full right-0 w-72 max-h-[70vh] overflow-y-auto bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-zinc-100">
                <Link href="/cursos-de-ia" className="block px-4 py-2 hover:bg-blue-50 hover:text-black">Cursos de IA</Link>
                <Link href="/ia-para-vibe-coding" className="block px-4 py-2 hover:bg-blue-50 hover:text-black">Vibe Coding</Link>
                <Link href="/criacao-agentes-ia" className="block px-4 py-2 hover:bg-blue-50 hover:text-black">Criacao de Agentes</Link>
                <Link href="/assistentes-de-ia" className="block px-4 py-2 hover:bg-blue-50 hover:text-black">Assistentes de IA</Link>
                <Link href="/gerador-de-voz-ia" className="block px-4 py-2 hover:bg-blue-50 hover:text-black">Gerador de Voz IA</Link>
                <Link href="/aprender-ingles-com-ia" className="block px-4 py-2 hover:bg-blue-50 hover:text-black">IA para Inglês</Link>
                <Link href="/ia-para-atendimento" className="block px-4 py-2 hover:bg-blue-50 hover:text-black">IA para Atendimento</Link>
                <Link href="/ia-para-desenvolvedores" className="block px-4 py-2 hover:bg-blue-50 hover:text-black">Desenvolvedores</Link>
                <Link href="/ferramentas-de-ia-para-conteudo" className="block px-4 py-2 hover:bg-blue-50 hover:text-black">Conteúdo</Link>
                <Link href="/ia-para-criar-apresentacoes" className="block px-4 py-2 hover:bg-blue-50 hover:text-black">Apresentações</Link>
                <Link href="/ia-para-marketing" className="block px-4 py-2 hover:bg-blue-50 hover:text-black">Marketing</Link>
                <Link href="/ferramentas-de-ia-rh" className="block px-4 py-2 hover:bg-blue-50 hover:text-black">IA para RH</Link>
                <Link href="/ferramentas-ia-contabilidade" className="block px-4 py-2 hover:bg-blue-50 hover:text-black">Contabilidade</Link>
                <Link href="/inteligencia-artificial-para-advogados" className="block px-4 py-2 hover:bg-blue-50 hover:text-black">Advogados</Link>
                <Link href="/ia-para-professores" className="block px-4 py-2 hover:bg-blue-50 hover:text-black">Professores</Link>
                <Link href="/ia-para-medicos" className="block px-4 py-2 hover:bg-blue-50 hover:text-black">Médicos</Link>
                <Link href="/ia-para-arquitetura" className="block px-4 py-2 hover:bg-blue-50 hover:text-black">Arquitetura</Link>
                <Link href="/ia-para-musica" className="block px-4 py-2 hover:bg-blue-50 hover:text-black">Música</Link>
                <Link href="/ia-para-jogos" className="block px-4 py-2 hover:bg-blue-50 hover:text-black">IA para Jogos</Link>
                <Link href="/analise-de-dados" className="block px-4 py-2 hover:bg-blue-50 hover:text-black">Análise de dados</Link>
                <Link href="/modelos-de-llms" className="block px-4 py-2 hover:bg-blue-50 hover:text-black">Modelos de LLMs</Link>
                <Link href="/navegadores-de-ia" className="block px-4 py-2 hover:bg-blue-50 hover:text-black">Navegadores de IA</Link>
                <Link href="/newsletters-de-ia" className="block px-4 py-2 hover:bg-blue-50 hover:text-black">Newsletters</Link>
              </div>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-zinc-700">
            {open ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>

          {/* Mobile Menu Dropdown */}
          {open && (
            <div className="absolute top-16 left-0 right-0 bg-white shadow-md p-4 md:hidden border-t border-zinc-100 max-h-[calc(100vh-5rem)] overflow-y-auto">
              <ul className="flex flex-col gap-3 text-zinc-700 font-medium">
                <li><Link href="/ia-para-imagens" className="block py-2" onClick={() => setOpen(false)}>IA para imagens</Link></li>
                <li><Link href="/ia-para-criar-videos" className="block py-2" onClick={() => setOpen(false)}>Vídeos</Link></li>
                <li><Link href="/pacotes-de-ferramentas-e-agregadores-ia" className="block py-2" onClick={() => setOpen(false)}>Agregadores de IA</Link></li>
                <li><Link href="/transcrever-audio" className="block py-2" onClick={() => setOpen(false)}>Transcrever Áudio</Link></li>
                <li><Link href="/ia-para-fazer-ata-reuniao" className="block py-2" onClick={() => setOpen(false)}>Ata de Reunião</Link></li>
                <li><Link href="/ferramenta-de-deteccao-de-ia" className="block py-2" onClick={() => setOpen(false)}>Detecção de IA</Link></li>

                <li className="border-t border-zinc-100 pt-2 mt-2 font-semibold text-zinc-400 text-sm">Outras IAs</li>
                <li><Link href="/cursos-de-ia" className="block py-2 pl-4" onClick={() => setOpen(false)}>Cursos de IA</Link></li>
                <li><Link href="/ia-para-vibe-coding" className="block py-2 pl-4" onClick={() => setOpen(false)}>Vibe Coding</Link></li>
                <li><Link href="/criacao-agentes-ia" className="block py-2 pl-4" onClick={() => setOpen(false)}>Criacao de Agentes</Link></li>
                <li><Link href="/assistentes-de-ia" className="block py-2 pl-4" onClick={() => setOpen(false)}>Assistentes de IA</Link></li>
                <li><Link href="/gerador-de-voz-ia" className="block py-2 pl-4" onClick={() => setOpen(false)}>Gerador de Voz IA</Link></li>
                <li><Link href="/aprender-ingles-com-ia" className="block py-2 pl-4" onClick={() => setOpen(false)}>IA para Inglês</Link></li>
                <li><Link href="/ia-para-atendimento" className="block py-2 pl-4" onClick={() => setOpen(false)}>IA para Atendimento</Link></li>
                <li><Link href="/ia-para-desenvolvedores" className="block py-2 pl-4" onClick={() => setOpen(false)}>Desenvolvedores</Link></li>
                <li><Link href="/ferramentas-de-ia-para-conteudo" className="block py-2 pl-4" onClick={() => setOpen(false)}>IA para Conteúdo</Link></li>
                <li><Link href="/ia-para-criar-apresentacoes" className="block py-2 pl-4" onClick={() => setOpen(false)}>IA para Apresentações</Link></li>
                <li><Link href="/ia-para-marketing" className="block py-2 pl-4" onClick={() => setOpen(false)}>IA para Marketing</Link></li>
                <li><Link href="/ferramentas-de-ia-rh" className="block py-2 pl-4" onClick={() => setOpen(false)}>IA para RH</Link></li>
                <li><Link href="/ferramentas-ia-contabilidade" className="block py-2 pl-4" onClick={() => setOpen(false)}>IA para Contabilidade</Link></li>
                <li><Link href="/inteligencia-artificial-para-advogados" className="block py-2 pl-4" onClick={() => setOpen(false)}>IA para Advogados</Link></li>
                <li><Link href="/ia-para-professores" className="block py-2 pl-4" onClick={() => setOpen(false)}>Professores</Link></li>
                <li><Link href="/ia-para-musica" className="block py-2 pl-4" onClick={() => setOpen(false)}>IA para Música</Link></li>
                <li><Link href="/ia-para-jogos" className="block py-2 pl-4" onClick={() => setOpen(false)}>IA para Jogos</Link></li>
                <li><Link href="/ia-para-arquitetura" className="block py-2 pl-4" onClick={() => setOpen(false)}>IA para Arquitetura</Link></li>
                <li><Link href="/analise-de-dados" className="block py-2 pl-4" onClick={() => setOpen(false)}>Análise de dados</Link></li>
                <li><Link href="/modelos-de-llms" className="block py-2 pl-4" onClick={() => setOpen(false)}>Modelos de LLMs</Link></li>
                <li><Link href="/navegadores-de-ia" className="block py-2 pl-4" onClick={() => setOpen(false)}>Navegadores de IA</Link></li>
                <li><Link href="/newsletters-de-ia" className="block py-2 pl-4" onClick={() => setOpen(false)}>Newsletters</Link></li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
