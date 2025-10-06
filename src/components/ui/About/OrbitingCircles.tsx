import Image from "next/image";
import { OrbitingCircles } from "../orbiting-circles";

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] w-full items-center justify-center overflow-hidden">
      {/* Outer Orbit */}
      <OrbitingCircles iconSize={70} radius={200}>
        <Icons.react />
        <Icons.nodejs />
        <Icons.nextjs />
        <Icons.redux />
        <Icons.prisma />
        <Icons.mongodb />
      </OrbitingCircles>

      {/* Inner Orbit */}
      <OrbitingCircles iconSize={60} radius={150} reverse speed={2}>
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
      width={60}
      height={60}
    />
  ),
  nodejs: () => (
    <Image
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
      alt="Node.js"
      width={60}
      height={60}
    />
  ),
  nextjs: () => (
    <Image
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
      alt="Next.js"
      width={60}
      height={60}
    />
  ),
  redux: () => (
    <Image
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
      alt="Redux"
      width={60}
      height={60}
    />
  ),
  prisma: () => (
    <Image
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg"
      alt="Prisma"
      width={60}
      height={60}
    />
  ),
  mongodb: () => (
    <Image
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
      alt="MongoDB"
      width={60}
      height={60}
    />
  ),
  javascript: () => (
    <Image
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
      alt="JavaScript"
      width={50}
      height={50}
    />
  ),
  typescript: () => (
    <Image
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
      alt="TypeScript"
      width={50}
      height={50}
    />
  ),
  postgresql: () => (
    <Image
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
      alt="PostgreSQL"
      width={50}
      height={50}
    />
  ),
  express: () => (
    <Image
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
      alt="Express"
      width={50}
      height={50}
    />
  ),
};
