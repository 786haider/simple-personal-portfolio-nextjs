
import Link from 'next/link';
import ProfilePic from '../../../public/profile.jpg'
import Image from 'next/image'

export default function Navbar() {
   

    return (
        <div className="bg-cyan-500">
            <nav className="mt-0 flex justify-between items-center" style={{ height: '80px' }}>
                <div className="flex items-center">
                    <Image
                        src={ProfilePic}
                        alt='Profile Picture'
                        width={50}
                        height={50} 
                        className='border rounded-full mt-1 ml-3'
                    />
                    <h1 className='text-xl md:text-3xl mt-5 ml-3 font-extrabold text-violet-950'>
                        <i>
                            <u>
                                Haider Hussain`s Portfolio!
                            </u>
                        </i>
                    </h1>
                </div>

                
                <ul className='flex space-x-10 mr-9'>
                <Link href={'/'}><li className="hidden md:block text-lg md:text-2xl text-white hover:text-violet-950 hover:text-3xl ">Home</li></Link>
               <Link href={'/about'}> <li className="hidden md:block text-lg md:text-2xl text-white hover:text-violet-950 hover:text-3xl ">About</li></Link>
                <Link href={'/contact'}><li className="hidden md:block text-lg md:text-2xl text-white hover:text-violet-950 hover:text-3xl ">Contact</li></Link>
                </ul>
            </nav>
        </div>
    )
}