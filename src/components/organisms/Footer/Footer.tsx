import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="w-full px-24 pt-4">
      <section className="flex items-center justify-center rounded-t-2xl bg-white-100 p-4">
        <Image
          src="/logoFooter.png"
          alt="Logo"
          className="h-24 w-24"
          width={160}
          height={160}
        ></Image>
        <ul className="flex flex-col items-start justify-center gap-1 p-2 text-black-100">
          <li>
            <Link href="#">
              A <strong>Organização</strong>
            </Link>
          </li>
          <li>
            <Link href="#">
              Quero ser <strong>Voluntário</strong>
            </Link>
          </li>
          <li>
            <Link href="#">
              Quero <strong>Doar</strong>
            </Link>
          </li>
          <li>
            <Link href="#">
              Quero <strong>Adotar</strong>
            </Link>
          </li>
        </ul>
      </section>
    </footer>
  )
}
