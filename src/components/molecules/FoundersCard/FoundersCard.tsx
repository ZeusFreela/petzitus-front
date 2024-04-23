import { FoundersCardProps } from '@/@types'
import Image from 'next/image'
import React from 'react'

export const FoundersCard = ({ imgPath, name, content }: FoundersCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Image
        className="h-[23rem] w-48 rounded-2xl"
        src={imgPath}
        alt=""
        width={160}
        height={360}
      ></Image>
      <h3 className="text-2xl font-semibold">{name}</h3>
      <p className="text-base font-light">{content}</p>
    </div>
  )
}
