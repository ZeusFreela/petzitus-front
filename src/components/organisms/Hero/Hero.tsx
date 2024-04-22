import Image from 'next/image'
import React from 'react'

export const Hero = () => {
  return (
    <section className="flex w-full items-center justify-center px-24 py-20">
      <div className="flex w-1/2 flex-col items-start justify-center gap-4">
        <h1 className="text-6xl font-normal">A TURMA DO BAIRRO</h1>
        <p className="w-[77%]">
          Se você é apaixonado por animais e sente o chamado para proteger os
          mais vulneráveis, você vai adorar fazer parte do nosso time de{' '}
          <strong>heróis peludos!</strong>
        </p>
        <p className="w-[77%]">
          Dos cãezinhos abandonados aos gatinhos sem lar, cada patinha merece{' '}
          <strong>amor</strong> e um <strong>lar</strong> seguro. Junte-se a nós
          e seja a voz dos que não podem falar.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button className="border-secondary rounded-2xl border-2 bg-transparent p-4 transition hover:scale-105">
            Faça uma doação!
          </button>
          <button className="border-secondary bg-secondary text-black-100 rounded-2xl border-2 p-4 transition hover:scale-105">
            Faça uma doação!
          </button>
        </div>
      </div>
      <div className="bg-primary flex w-1/2 flex-wrap items-center justify-end gap-4">
        <Image alt="" src="/heroDog1.png" width={175} height={226}></Image>
        <Image alt="" src="/heroDog2.png" width={175} height={226}></Image>
        <Image alt="" src="/heroDog3.png" width={175} height={226}></Image>
        <Image
          alt=""
          className="-z-20"
          src="/heroDog2.png"
          width={175}
          height={226}
        ></Image>
      </div>
    </section>
  )
}
