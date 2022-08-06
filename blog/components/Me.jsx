import Link from "next/link";
import React from "react";

import { MdExpandMore } from "react-icons/md";

const Me = () => {
  return (
    <div id="me" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-base md:text-3xl uppercase text-blue-500 font-bold">
          about me
        </h2>

        <div className="shadow-xl shadow-blue-300 my-8 px-8">
          <p className="py-4 max-w-2xl mx-auto">
          I graduated from the University of North Carolina at Charlotte with major in Mathematics at May'21. 
          I enjoy innovation and love to experiment with different ideas. I was fascinated with computers from a young age, 
          so I decided to continue in that direction. Overall, it has been a great choice for me as my 
          biggest passion lies in learning about software and technology and being a software developer, I get to shape how the internet is 
          progressing and how websites are evolving, and that’s exciting to me.
          </p>
          <p className="py-4 max-w-2xl mx-auto">
           Besides working full time I love hiking or exploring some green place for fun. 
           Nature is like an escape to me, so mostly on weekends, I like to go for a mini-vacation anywhere near town.
           I also love exploring new games and go crazy for puzzles.
           Lately I've gotten really interested in personal finance, so I read a lot of books as well.
          </p>
        </div>

        <div className="flex items-center justify-center gap-10">
          <Link href="/resume.pdf" download={true}>
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              resume
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>

          <Link href="/#portfolio">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              my portfolio
              <span className="-rotate-90 duration-100 ease-in group-hover:-rotate-180">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Me;
