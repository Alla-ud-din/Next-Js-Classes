import { ArrowRightSquare, Mail } from 'lucide-react'
import { Button } from '../ui/button'
import Image from 'next/image'
import bgImg from '@/assets/bgImg.jpg'

export default function Hero() {
  return (
    <main className='flex items-center justify-center min-h-screen'>
      <div className='flex flex-col gap-7 items-center justify-center'>
      <h1 className='text-[40px] text-white font-bold'>Welcome to my Blog Site</h1>
      <Button className='bg-black rounded-xl text-white'>
          <ArrowRightSquare className="mr-2 h-4 w-4" /> Learn More
      </Button>
      </div>
      <Image src={bgImg} className="opacity-90 absolute w-full h-screen z-[-1]" alt="bg"/>
    </main>
  )
}
