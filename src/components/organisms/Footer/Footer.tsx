import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="md-5:px-20 md-6:px-10 md-7:px-4 w-full px-24 pt-4">
      <section className="flex items-center justify-center rounded-t-2xl bg-white-100 p-4">
        <Image
          src="/logoFooter.png"
          alt="Logo"
          className="md-5:h-20 md-5:w-20 h-24 w-24"
          width={160}
          height={160}
        ></Image>
        <ul className="md-5:text-xs md-5:gap-2 flex flex-col items-start justify-center gap-1 p-2 text-black-100">
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
