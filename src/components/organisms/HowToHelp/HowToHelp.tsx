import { ButtonToHelp } from '@/components/molecules/ButtonToHelp/ButtonToHelp'
import React from 'react'

export const HowToHelp = () => {
  return (
    <section className="w-ful flex flex-col items-center justify-center gap-12 px-24 py-16">
      <h1 className="text-5xl">Como ajudar?</h1>
      <div className="flex w-full items-center justify-center gap-10">
        <ButtonToHelp path="/" content="Adote" />
        <ButtonToHelp path="/" content="Doe" />
        <ButtonToHelp path="/" content="Seja Voluntário(a)" />
      </div>
    </section>
  )
}
