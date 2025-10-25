
// components/TerminalDemo.tsx
import { AnimatedSpan, Terminal, TypingAnimation } from "../terminal";

export function TerminalDemo() {
  return (
 
    <div className="w-full max-w-lg mx-auto overflow-y-auto rounded-lg border  border-gray-700 bg-black  p-2 shadow-lg">
  <Terminal>
    <TypingAnimation>&gt; npm run portfolio:init</TypingAnimation>

    <AnimatedSpan className="text-green-500">✔ Fetching profile data...</AnimatedSpan>
    <AnimatedSpan className="text-blue-400">Name: Munna Khan</AnimatedSpan>
    <AnimatedSpan className="text-blue-400">Title: Full-Stack Developer</AnimatedSpan>
    <AnimatedSpan className="text-green-500">✔ Loading skills...</AnimatedSpan>

    {[
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Firebase",
      "Git & GitHub",
    ].map((skill) => (
      <AnimatedSpan key={skill} className="text-green-400">- {skill}</AnimatedSpan>
    ))}
  </Terminal>
</div>

  );
}
