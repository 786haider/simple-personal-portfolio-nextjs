

// import Typewriter from 'typewriter-effect';
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
<h1 className='text-xl md:text-3xl mt-5 ml-3 font-extrabold text-violet-950'>
   
   <i>
    <u>
    Haider Hussain`s Portfolio !
         
{/* <Typewriter
  options={{
    strings: ['Haider Hussain`s Portfolio !'],
    autoStart: true,
    loop: true,
  }}
/> */}
    </u>
   </i>
</h1>

<ul className='flex justify-center text-xl md:text-2xl mt-6 ml-80 font-semibold space-x-16 '>
  <li className='hover:text-3xl hover:text-wrap hover:text-pink-500'>Home</li>
  <li className='hover:text-3xl hover:text-wrap hover:text-pink-500'>Contact</li>
  <li className='hover:text-3xl hover:text-wrap hover:text-pink-500'>About</li>
</ul>
      
        </nav>
        </div>
    )
}