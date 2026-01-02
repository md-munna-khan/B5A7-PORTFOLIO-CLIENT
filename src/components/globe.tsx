"use client";

import { IconCloud } from "./ui/icon-cloud";

const slugs = [
  // Frontend
  "typescript",
  "javascript",
  "react",
  "nextdotjs",
  "tailwindcss",
  "redux",
  "threedotjs", // For 3D Modeling/Creative
  "framer",     // For UI Animation
  "html5",
  "css3",
  
  // Backend & DB
  "nodedotjs",
  "express",
  "prisma",
  "postgresql",
  "mongodb",
  "redis",
  "mongoose",
  
  // Auth & Security
  "jsonwebtokens",
  "clerk",
  "firebase",
  "auth0",
  "passport",

  // Cloud & Tools
  "vercel",
  "render",
  "git",
  "github",
  "visualstudiocode",
  "postman",
  "linux",
  "figma",
];

export function IconCloudDemo() {
  // Using the same logic: simpleicons.org/slug/color
  // Note: Some icons look better with their brand colors
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}`
  );

  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 ">
      <IconCloud images={images} />
    </div>
  );
}