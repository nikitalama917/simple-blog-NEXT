import React from "react";
import hello from "../public/assets/hello.png";
import { MdExpandMore } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div id="home" className="h-screen w-full text-center">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center">
        <div className="w-80 h-120 mx-auto overflow-hidden rounded-xl">
          <Image src={hello} alt="me" />
        </div>

        <h1 className="uppercase font-bold text-gray-700 text-3xl">
          Hey, I'm Nikita <span className="wave">👋🏾</span>
        </h1>

        <p className="text-gray-600 text-base max-w-sm mx-auto">
          I have 3 years of experience building and desgining software.
          Currently, I work at Verizon and love working on web application using technologies like
          ReactJS, jQuery, HTML, CSS, Next JS and Java.
        </p>

        <Link href="/#me">
          <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
            know more
            <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
              <MdExpandMore size={25} />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
