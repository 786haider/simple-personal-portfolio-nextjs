"use client";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Hero from "../../public/profile.jpg";
import Link from "next/link";
import About from "./about/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div>
      <section className="bg-slate-300 text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="text-6xl text-black">
              <b>
                <i>Hello, Haider here !</i>
              </b>
            </h1>
            <h1 className="flex mt-5 space-x-2 text-4xl text-violet-700 mb-10">
              <span className="text-4xl text-blue-950">I am</span>
              <Typewriter
                options={{
                  strings: ["Frontend Web Developer", "UX/UI Designer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="flex justify-center">
              <Link href={"/contact"}>
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-black rounded text-2xl hover:text-indigo-500">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
          <div className="">
            <Image
              src={Hero}
              alt="hero"
              width={300}
              height={400}
              className="ml-14 object-cover object-center  border rounded-full"
            />
          </div>
        </div>
      </section>
      <About/>
      <Contact/>
    </div>
  );
}
