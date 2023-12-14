import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'
import Image from 'next/image'
import bgImg from '@/assets/bgImg.jpg'
import Hero from '@/components/custom/Hero'
import { Montserrat } from 'next/font/google'
import { CardWithForm } from '@/components/custom/Cards'
import Blogs from '@/components/custom/Blogs'

const mont = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

export default function Home() {
  return (
    <>
    <Hero/>
    {/* Cards */}
    <Blogs />
    {/* Footer */}
    <footer>
        <div className="flex justify-center items-center h-12 bg-gray-700 text-white">
          <p>Copyright &copy; 2023 Blog Site, Inc. All rights reserved.</p>
        </div>
    </footer>
    </>
  )
}
