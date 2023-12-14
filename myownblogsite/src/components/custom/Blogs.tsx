import React from 'react'
import { CardWithForm } from './Cards'
import { Montserrat } from 'next/font/google'
const mont = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})
export default function Blogs() {
  return (
    <section className='flex justify-center shadow-lg min-h-screen'>
      <div className='w-11/12 m-4 rounded-sm bg-white'>
        <h1 className={`${mont.className} text-center mt-3 font-bold text-3xl`}>Our Featured Blog</h1>
        <div className='flex justify-center items-center flex-wrap mt-3 gap-4'>
          <CardWithForm title="Our First Blog" Description={'My first Blog description'}/>
          <CardWithForm title="Our Second Blog" Description={''}/>
          <CardWithForm title="Our Third Blog" Description={''}/>
          <CardWithForm title="Our Fourth Blog" Description={''}/>
        </div>
      </div>
    </section>
  )
}
