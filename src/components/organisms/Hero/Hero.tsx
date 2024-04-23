import Image from 'next/image'
import React from 'react'

export const Hero = () => {
  return (
    <section className="md-5:px-20 md-6:px-10 md-7:px-4 md-8:flex-col md-8:gap-6 flex w-full items-center justify-center px-24 py-16">
      <div className="md-8:w-full flex w-1/2 flex-col items-start justify-center gap-4">
        <h1 className="md-5:text-5xl md-7:text-4xl text-6xl font-normal">
          A TURMA DO BAIRRO
        </h1>
        <p className="md-5:text-sm md-7:text-xs w-[77%]">
          Se você é apaixonado por animais e sente o chamado para proteger os
          mais vulneráveis, você vai adorar fazer parte do nosso time de{' '}
          <strong>heróis peludos!</strong>
        </p>
        <p className="md-5:text-sm md-7:text-xs w-[77%]">
          Dos cãezinhos abandonados aos gatinhos sem lar, cada patinha merece{' '}
          <strong>amor</strong> e um <strong>lar</strong> seguro. Junte-se a nós
          e seja a voz dos que não podem falar.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button className="md-5:text-sm md-7:text-xs rounded-2xl border-2 border-secondary bg-transparent p-4 transition hover:scale-105">
            Faça uma doação!
          </button>
          <button className="md-5:text-sm md-7:text-xs rounded-2xl border-2 border-secondary bg-secondary p-4 text-black-100 transition hover:scale-105">
            Faça uma doação!
          </button>
        </div>
      </div>
      <div className="md-8:w-full md-8:justify-start flex w-1/2 flex-wrap items-center justify-end gap-4 bg-primary">
        <Image
          alt=""
          src="/heroDog1.png"
          className="md-5:w-32 md-5:h-44"
          width={175}
          height={226}
        ></Image>
        <Image
          alt=""
          className="md-5:w-32 md-5:h-44"
          src="/heroDog2.png"
          width={175}
          height={226}
        ></Image>
        <Image
          alt=""
          className="md-5:w-32 md-5:h-44"
          src="/heroDog3.png"
          width={175}
          height={226}
        ></Image>
        <Image
          alt=""
          className="md-5:w-32 md-5:h-44 md-8:hidden -z-20"
          src="/heroDog2.png"
          width={175}
          height={226}
        ></Image>
      </div>
    </section>
  )
}
