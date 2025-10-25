


"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { OrbitingCircles } from "../orbiting-circles";

export function OrbitingCirclesDemo() {
  const [radius, setRadius] = useState(220);
  const [innerRadius, setInnerRadius] = useState(130);

  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setRadius(140);
        setInnerRadius(80);
      } else if (width < 1024) {
        setRadius(180);
        setInnerRadius(100);
      } else {
        setRadius(220);
        setInnerRadius(130);
      }
    };

    updateRadius(); // initial call
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <div className="relative flex h-[350px] sm:h-[380px] md:h-[480px] lg:h-[580px] xl:h-[600px] w-full items-center justify-center overflow-hidden ">
      {/* Outer Orbit */}
      <OrbitingCircles iconSize={45} radius={radius}>
        <Icons.react />
        <Icons.nodejs />
        <Icons.nextjs />
        <Icons.redux />
        <Icons.prisma />
        <Icons.mongodb />
      </OrbitingCircles>

      {/* Inner Orbit */}
      <OrbitingCircles iconSize={35} radius={innerRadius} reverse speed={2}>
        <Icons.typescript />
        <Icons.javascript />
        <Icons.postgresql />
        <Icons.express />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  react: () => (
    <Image
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      alt="React"
      width={50}
      height={50}
    />
  ),
  nodejs: () => (
    <Image
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
      alt="Node.js"
      width={50}
      height={50}
    />
  ),
  nextjs: () => (
    <Image
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
      alt="Next.js"
      width={50}
      height={50}
    />
  ),
  redux: () => (
    <Image
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
      alt="Redux"
      width={50}
      height={50}
    />
  ),
  prisma: () => (
    <Image
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg"
      alt="Prisma"
      width={50}
      height={50}
    />
  ),
  mongodb: () => (
    <Image
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
      alt="MongoDB"
      width={50}
      height={50}
    />
  ),
  javascript: () => (
    <Image
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
      alt="JavaScript"
      width={45}
      height={45}
    />
  ),
  typescript: () => (
    <Image
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
      alt="TypeScript"
      width={45}
      height={45}
    />
  ),
  postgresql: () => (
    <Image
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
      alt="PostgreSQL"
      width={45}
      height={45}
    />
  ),
  express: () => (
    <Image
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
      alt="Express"
      width={45}
      height={45}
    />
  ),
};
