'use client'

import { useState } from 'react'

export function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <div
        className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-1 bg-zinc-700 fixed top-6 right-6 cursor-pointer z-50"
        onClick={() => setIsMenuOpen((state) => !state)}
      >
        <div className="w-7 h-1 bg-orange-500" />
        <div className="w-7 h-1 bg-orange-500" />
        <div className="w-7 h-1 bg-orange-500" />
      </div>

      <div
        className={`md:hidden fixed w-screen h-screen bg-zinc-950 ${
          !isMenuOpen && 'ml-[-100vw]'
        } z-40 transition-all flex flex-col items-center justify-center gap-5`}
      >
        <a href="/#home">
          <h1 className="text-2xl text-orange-500 font-mono uppercase tracking-wider">
            Egon Transportes
          </h1>
        </a>

        <ul className="flex flex-col items-center gap-2">
          <li onClick={() => setIsMenuOpen(false)}>
            <a href={'/#home'}>Home</a>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <a href={'/#about'}>Sobre</a>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <a href={'/#info'}>Informações</a>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <a href={'/#contact'}>Contato</a>
          </li>
        </ul>
      </div>
    </>
  )
}
