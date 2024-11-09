import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export default function Contact() {
  return (
    <div className="bg-gray-300">
<div className="mb-36 bg-gray-300 ">

<h1 className="flex justify-center font-extrabold text-6xl text-indigo-950 mt-16">
        <i>Contact Info </i>
      </h1>
      <ul className="flex-col flex r mt-5">
        <li className="flex justify-center text-4xl">
          <BsWhatsapp className="text-green-600 hover:text-green-400 text-4xl" />
          <span className="ml-4 hover:text-white">+92 310-1318508</span>
        </li>
        <li className="flex justify-center text-4xl mt-5">
          <BsInstagram className="text-pink-600  hover:text-pink-400 text-4xl" />
          <span className="ml-4 hover:text-blue-800">
            <Link
              href={"https://www.instagram.com/haider_hussain_ssg/#"}
              target="_blank"
            >
              @haider Hussain
            </Link>
          </span>
        </li>
        <li className="flex justify-center text-4xl mt-5">
          <BsFacebook className="text-blue-700  hover:text-blue-500 text-4xl" />
          <span className="ml-4 hover:text-blue-800">
            <Link
              href={"https://www.facebook.com/share/p/19bSL9xhKT/"}
              target="_blank"
            >
              @haider Hussain
            </Link>
          </span>
        </li>
        <li className="flex justify-center text-4xl mt-5">
          <BsGithub className="text-black   text-4xl mr-32" />
          <span className="  hover:text-blue-800">
            <Link href={"https://github.com/786haider"} target="_blank">
              786haider
            </Link>
          </span>
        </li>
      </ul>
    </div>
    </div>
  );
}
