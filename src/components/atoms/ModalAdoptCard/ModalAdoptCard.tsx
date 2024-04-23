import { InputModalAdoptForm } from '../InputModalAdoptForm/InputModalAdoptForm'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const ModalAdoptCard = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 rounded-2xl bg-white-100 p-8 text-black-100">
      <h1 className="text-2xl font-semibold">Doguinho Te Espera!</h1>
      <section className="flex items-center justify-center gap-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <Image src="/heroDog2.png" width={176} height={240} alt=""></Image>
          <Link href="#" className="flex items-center justify-center gap-2">
            <Image
              alt=""
              src="/whatsapp.png"
              height={72}
              width={72}
              className="h-9 w-8"
            ></Image>
            +35 99999-9999
          </Link>
        </div>
        <div>
          <form
            action="#"
            className="flex flex-col items-center justify-center gap-4"
          >
            <InputModalAdoptForm placeholder="Nome" />
            <InputModalAdoptForm placeholder="Horários disponíveis" />
            <InputModalAdoptForm placeholder="Cidade" />
            <InputModalAdoptForm placeholder="Idade" />
            <button
              type="submit"
              className="w-full rounded-xl border-2 border-secondary bg-secondary p-4 font-semibold text-black-100 duration-300 hover:scale-105 md-7:p-2 md-7:text-xs"
            >
              Adotar
            </button>
          </form>
        </div>
      </section>
    </section>
  )
}
