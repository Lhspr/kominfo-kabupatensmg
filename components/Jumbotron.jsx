import Image from 'next/image'
import React from 'react'
import gambar from '@/assets/bg1.jpg'
const Jumbotron = () => {
  return (
    <div className='min-h-screen min-w-screen'>
        <Image src={gambar} className='w-screen'/>
    </div>
    
  )
}

export default Jumbotron