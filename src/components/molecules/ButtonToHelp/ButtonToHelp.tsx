import { ButtonToHelpProps } from '@/@types'
import Link from 'next/link'
import React from 'react'

export const ButtonToHelp = ({ path, content }: ButtonToHelpProps) => {
  return (
    <>
      <Link
        href={path}
        className="md-5:text-xl md-7:text-base rounded-2xl bg-secondary px-8 py-3 text-2xl text-black-100"
      >
        {content}
      </Link>
    </>
  )
}
