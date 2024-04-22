import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-24 py-4">
      <Link href="/">
        <Image
          alt="Logo Petzitus"
          src="/logoHeader.png"
          width={40}
          height={40}
          aria-label="Logo Petzitus"
        ></Image>
      </Link>
      <ul className="flex items-center justify-center gap-4 text-sm font-normal">
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
          <button className="bg-secondary text-black-100 p-4 text-sm">
            Quero Adotar
          </button>
        </li>
      </ul>
    </header>
  )
}
