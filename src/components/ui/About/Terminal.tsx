import { AnimatedSpan, Terminal, TypingAnimation } from "../terminal";

export function TerminalDemo() {
  return (
    <Terminal>
      <TypingAnimation>&gt; npm run portfolio:init</TypingAnimation>

      <AnimatedSpan className="text-green-500">
        ✔ Setting up Full-Stack environment
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Detecting MERN stack (MongoDB, Express.js, React.js, Node.js)
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Configuring Next.js + Redux for state management
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Integrating PostgreSQL via Prisma ORM
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Setting up Tailwind CSS and global theme
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Implementing responsive design and reusable components
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Adding authentication & secure backend APIs
      </AnimatedSpan>

      <AnimatedSpan className="text-blue-500">
        <span>ℹ Skills applied:</span>
        <span className="pl-2">React, Redux, Next.js, Node.js, Express.js, MongoDB, Prisma, PostgreSQL, Tailwind CSS</span>
      </AnimatedSpan>

      <TypingAnimation className="text-muted-foreground">
        Success! Full-Stack Portfolio setup completed.
      </TypingAnimation>

      <TypingAnimation className="text-muted-foreground">
        You may now showcase your projects and blogs.
      </TypingAnimation>
    </Terminal>
  );
}
