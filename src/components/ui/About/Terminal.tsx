


// components/TerminalDemo.tsx
import { AnimatedSpan, Terminal, TypingAnimation } from "../terminal";

export function TerminalDemo() {
  return (
    <div className="w-full max-w-lg mx-auto overflow-hidden rounded-lg border border-gray-700 bg-black/90 p-2 shadow-lg">
      <Terminal>
        <TypingAnimation>&gt; npm run portfolio:init</TypingAnimation>

        <AnimatedSpan className="text-green-500">
          ✔ Fetching profile data...
        </AnimatedSpan>
        <AnimatedSpan className="text-blue-400">Name: Munna Khan</AnimatedSpan>
        <AnimatedSpan className="text-blue-400">
          Title: Full-Stack Developer
        </AnimatedSpan>
        <AnimatedSpan className="text-green-500">
          ✔ Loading skills...
        </AnimatedSpan>
        <AnimatedSpan className="text-green-400">- JavaScript (ES6+)</AnimatedSpan>
        <AnimatedSpan className="text-green-400">- TypeScript</AnimatedSpan>
        <AnimatedSpan className="text-green-400">- React.js</AnimatedSpan>
        <AnimatedSpan className="text-green-400">- Next.js</AnimatedSpan>
        <AnimatedSpan className="text-green-400">- Redux Toolkit</AnimatedSpan>
        <AnimatedSpan className="text-green-400">- Node.js</AnimatedSpan>
        <AnimatedSpan className="text-green-400">- Express.js</AnimatedSpan>
        <AnimatedSpan className="text-green-400">- MongoDB</AnimatedSpan>
        <AnimatedSpan className="text-green-400">- Prisma</AnimatedSpan>
        <AnimatedSpan className="text-green-400">- PostgreSQL</AnimatedSpan>
        <AnimatedSpan className="text-green-400">- Tailwind CSS</AnimatedSpan>
        <AnimatedSpan className="text-green-400">- Firebase</AnimatedSpan>
        <AnimatedSpan className="text-green-400">- Git & GitHub</AnimatedSpan>
      </Terminal>
    </div>
  );
}
