import React from "react";
import { TerminalDemo } from "./Terminal";

const AboutMe = () => {
  return (
    <section className="py-16 px-4 md:px-4" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold" style={{ color: "var(--primary)" }}>
            Web Solutions Architect
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "var(--foreground)" }}>
            I’m <span style={{ color: "var(--primary)" }}>Md Munna</span>, a passionate Full-Stack Developer and Web Solutions Architect. I specialize in the MERN stack and Next.js, leveraging React.js, Redux, Node.js, Express.js, MongoDB, Prisma, and PostgreSQL to deliver end-to-end solutions.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: "var(--foreground)" }}>
            With 2 years of hands-on experience using Redux, I excel at managing complex application states and building efficient, scalable front-end systems. I have a strong focus on clean architecture, reusable components, and optimized performance, and I enjoy crafting responsive interfaces, secure backends, and well-structured databases.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: "var(--foreground)" }}>
            I love learning new technologies and continuously improving my skills to create innovative, user-centric solutions that combine creativity with technology.
          </p>
        </div>

        {/* Right Terminal Section */}
        <div
          className="rounded-xl shadow-xl p-2 md:p-10 h-full flex items-center justify-center"
          style={{ backgroundColor: "var(--card)", color: "var(--card-foreground)" }}
        >
          <TerminalDemo />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
