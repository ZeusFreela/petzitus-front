import { FoundersCard } from '@/components/molecules/FoundersCard/FoundersCard'
import Image from 'next/image'
import React from 'react'

export const MeetTheFounders = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-12 px-24 py-16">
      <h1 className="text-5xl">Conheça os Fundadores</h1>
      <div className="flex w-full items-center justify-between">
        <FoundersCard
          imgPath="/maisa.png"
          name="Maísa Almeida"
          content="32 anos, Assistente social"
        />
        <FoundersCard
          imgPath="/helena.png"
          name="Helena Almeida"
          content="23 anos, historiadora e
          fotógrafa"
        />
        <FoundersCard
          imgPath="/donizete.png"
          name="Donizete"
          content="Comerciante e pai."
        />
      </div>
    </section>
  )
}
