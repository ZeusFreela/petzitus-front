import Image from 'next/image'
import React from 'react'

export const About = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-12 px-24 py-16">
      <h1 className="text-5xl">Conheça a História</h1>
      <section className="flex w-full items-center justify-center">
        <div className="flex w-1/2 flex-col items-center justify-center gap-6">
          <p>
            A história começa assim, blablabl. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut nec auctor purus. Cras bibendum
            porttitor augue sit amet congue. Aliquam dictum turpis nulla, ut
            rutrum mi pellentesque in. Integer at vestibulum magna. Vestibulum
            at leo urna. Mauris eu dolor orci. Nulla ultricies est non dignissim
            sollicitudin.
          </p>
          <p>
            Etiam sed dictum diam. Mauris porta, mi et dignissim malesuada,
            mauris nisl finibus nisi, quis varius elit ipsum eu nunc. Aenean
            porta enim suscipit sapien vulputate pharetra. Fusce placerat mattis
            urna eget interdum. Duis consectetur consequat imperdiet. Sed urna
            metus, lobortis vel felis in, tristique sollicitudin ligula.
          </p>
        </div>
        <div className="flex w-1/2 items-center justify-center">
          <Image
            alt=""
            src="/donizete.png"
            width={220}
            height={220}
            className="h-96 w-64 object-cover"
          ></Image>
        </div>
      </section>
    </section>
  )
}
