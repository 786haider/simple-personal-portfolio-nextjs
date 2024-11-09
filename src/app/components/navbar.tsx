"use client"

import Typewriter from 'typewriter-effect';
import ProfilePic from '../../../public/profile.jpg'
import Image from 'next/image'


export default function Navbar(){
    return (
        <div className="bg-cyan-500 " >
        <nav className="mt-0 flex" style={{height:'80px'}}>
            <Image
            src={ProfilePic}
            alt='Profile Picture'
            width={50}
            height={0}
            className='border rounded-full mt-1 ml-3'
            />
<h1 className='text-3xl mt-5 ml-3 font-extrabold'>
   
   <i>
    <u>
         
<Typewriter
  options={{
    strings: ['Haider Hussain`s Portfolio'],
    autoStart: true,
    loop: true,
  }}
/>
    </u>
   </i>
</h1>
      
        </nav>
        </div>
    )
}