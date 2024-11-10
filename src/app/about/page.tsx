"use client"
import Typewriter from "typewriter-effect"

export default function About(){
    return(
        <div className="flex-col flex justify-center items-center h-auto bg-slate-400">
         <h1 className="font-extrabold text-6xl text-indigo-950 " > 
<i>
<Typewriter
  options={{
    strings: ['About Me'],
    autoStart: true,
    loop: true,
  }}
/>
</i>
</h1>
<h1 className="mt-6 text-4xl text-black"><b><i><u>As Web Developer</u></i></b></h1>
<p className="mt-3 text-4xl text-black">
Hi, I`m Haider Hussain,  a frontend web developer <br/> with two years of experience in creating dynamic and <br/> responsive websites. Over the  past two years, I`ve honed my <br/> skills as a freelancer, building user-friendly interfaces and <br/> optimizing web performance. I’m passionate about turning <br/> design concepts into engaging  web experiences.
</p>
<h1 className="mt-6 text-4xl text-black"><b><i><u>As UX/UI Designer</u></i></b></h1>
<p className="mt-3 text-4xl text-black">
I’m also a UX/UI designer with two years of experience <br/> in creating intuitive, visually  compelling interfaces. As a <br/> freelancer, I work with clients  to design user experiences <br/> that are both engaging and efficient, ensuring each project <br/> is tailored to user needs and business goals.
</p>
        </div>
    )
}
