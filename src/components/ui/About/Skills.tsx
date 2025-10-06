// import React from 'react';

// import { OrbitingCirclesDemo } from './OrbitingCircles';

 
    
// const Skills = () => {
//     return (
//         <div className=' grid grid-cols-2'>
//             <div className='md:grid-cols-1 grid-cols-2'>
// hi
//             </div>
//             <div className='md:grid-cols-1 grid-cols-2'>
//               <OrbitingCirclesDemo/>
//             </div>
//         </div>
//     );
// };

// export default Skills;



/* eslint-disable @next/next/no-img-element */
import React from "react";
import { OrbitingCirclesDemo } from "./OrbitingCircles";
import { cn } from "@/lib/utils";
import { Marquee } from "../marquee";



const techs = [
  {
    name: "React.js",
    body: "Frontend library for building UI",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    body: "Full-stack React framework",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Node.js",
    body: "Backend runtime environment",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MongoDB",
    body: "NoSQL database",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "TailwindCSS",
    body: "Utility-first CSS framework",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "TypeScript",
    body: "Typed superset of JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Prisma",
    body: "Next-gen ORM for Node.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  }

];

const firstRow = techs.slice(0, techs.length / 2);
const secondRow = techs.slice(techs.length / 2);

const TechCard = ({
  img,
  name,
  body,
}: {
  img: string;
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-fit w-40 cursor-pointer overflow-hidden rounded-xl border p-4",
     
      )}
    >
      <div className="flex flex-col items-center text-center">
        <img
          className="rounded-full mb-2"
          width="48"
          height="48"
          alt={name}
          src={img}
        />
        <figcaption className="text-sm font-semibold dark:text-white">
          {name}
        </figcaption>
        <p className="text-xs text-gray-500 dark:text-gray-300">{body}</p>
      </div>
    </figure>
  );
};

export function MarqueeDemoVertical() {
  return (
    <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden py-8">
    
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </Marquee>

  
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </Marquee>

      {/* Fade Effect */}
      <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b" />
      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t" />
    </div>
  );
}

const Skills = () => {
  return (
    <div className="py-8 "> 
        <h1 className="text-center border-2 mx-auto p-2 w-max ">SKILLS IN MY TOOLKIT</h1>
    <div className="grid md:grid-cols-2 grid-cols-1 items-center justify-center gap-6 px-4 py-4 ">
       
      <div className="">
        <MarqueeDemoVertical />
      </div>
      <div>
        <OrbitingCirclesDemo />
      </div>
    </div>
    </div>
  );
};

export default Skills;
