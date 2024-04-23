import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between px-24 py-4 md-5:px-20 md-6:px-10 md-7:px-4 md-9:flex-col md-9:gap-4">
      <Link href="/">
        <Image
          alt="Logo Petzitus"
          src="/logoHeader.png"
          width={40}
          height={40}
          aria-label="Logo Petzitus"
        ></Image>
      </Link>
      <ul className="flex items-center justify-center gap-4 text-sm font-normal md-5:text-xs md-9:flex-col">
        <li>
          <Link href="#">A Organização</Link>
        </li>
        <li>
          <Link href="#">Quero ser Voluntário(a)</Link>
        </li>
        <li>
          <Link href="#">Quero Doar</Link>
        </li>
        <li>
          <button className="bg-secondary p-4 text-sm text-black-100 md-5:p-3 md-5:text-xs">
            Quero Adotar
          </button>
        </li>
      </ul>
    </header>
  )
}
