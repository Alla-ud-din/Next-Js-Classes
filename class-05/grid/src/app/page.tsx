import Image from 'next/image'

export default function Home() {
  return (
    <><div className='grid grid-cols-4'>
      <div className='bg-red-300'>Left Sidebar</div>
      <div className='bg-green-300'>Center Content</div>
      <div className='bg-blue-300'>Right Sidebar</div>
    </div>
    
    <div className='grid grid-cols-[20%,60%,20%]'>
        <div className='bg-red-300'>Left Sidebar</div>
        <div className='bg-green-300'>Center Content</div>
        <div className='bg-blue-300'>Right Sidebar</div>
    </div>

    <div className='grid grid-cols-3'>
      <div>
        <h1>Standard</h1>
        <h2>Monthly Plan</h2>
        <h1>$25</h1>
      </div>
      <div className='bg-pink-400'>
        <h1>Popular</h1>
        <h2>Monthly Plan</h2>
        <h1>$40</h1>
      </div>
      <div>
        <h1>Premium</h1>
        <h2>Monthly Plan</h2>
        <h1>$55</h1>
      </div>
    </div>
    {/* Figma */}
    </>
  )
}
