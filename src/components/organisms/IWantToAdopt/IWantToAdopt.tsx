import { AdoptCard } from '@/components/molecules/AdoptCard/AdoptCard'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const IWantToAdopt = () => {
  return (
    <section className="hg-1:py-28 flex w-full flex-col items-start justify-center gap-6 px-24 py-8 md-5:px-20 md-6:px-10 md-7:px-4">
      <h1 className="text-5xl md-5:text-4xl md-7:text-3xl">Quero Adotar</h1>
      <div className="flex flex-wrap items-center justify-start gap-6">
        <AdoptCard />
        <AdoptCard />
        <AdoptCard />
        <AdoptCard />
      </div>
    </section>
  )
}
