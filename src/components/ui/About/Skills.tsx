

"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, Paintbrush, Database, Cpu, Cloud, 
  ShieldCheck, Lock, Terminal, Globe, Zap 
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { FaReact, FaNodeJs, FaGitAlt, FaLinux } from "react-icons/fa";
import {
  SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript,
  SiMongodb, SiPostgresql, SiPrisma, SiExpress,
  SiRedux, SiFirebase, SiVercel, SiRedis,
  SiPostman, SiRender, SiJsonwebtokens, SiClerk, SiAuth0
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";

/* ================= TYPES ================= */

interface SkillItem {
  name: string;
  icon: React.ReactNode;
  color?: string;
}

interface SkillCategory {
  icon: LucideIcon;
  title: string;
  skills: SkillItem[];
}

/* ================= SKILL CARD ================= */

const SkillCard: React.FC<SkillCategory> = ({ icon: Icon, title, skills }) => {
  return (
    <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
      {/* Background Glow */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 blur-3xl transition-all duration-500 group-hover:bg-primary/20" />
      
      <CardContent className="relative z-10 p-6">
        <div className="mb-8 flex items-center gap-4">
          <div className="relative">
            <div className="absolute inset-0 animate-pulse rounded-xl bg-primary/20 blur-lg" />
            <div className="relative rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 p-3 text-primary ring-1 ring-inset ring-primary/20 transition-transform duration-500 group-hover:scale-110">
              <Icon className="h-7 w-7" />
            </div>
          </div>
          <h3 className="text-xl font-bold tracking-tight text-foreground">{title}</h3>
        </div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="flex items-center gap-2.5 border-border/50 bg-secondary/50 px-3 py-2 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-accent hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-background/80 p-1 shadow-inner ring-1 ring-border/50 group-hover/badge:rotate-12">
                {skill.icon}
              </div>
              <span className="text-foreground/90">{skill.name}</span>
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

/* ================= MAIN SECTION ================= */

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      icon: Code2,
      title: "Frontend Development",
      skills: [
        { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-foreground" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-[#38B2AC]" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
        { name: "Shadcn UI", icon: <Zap className="text-[#2563EB]" /> },
        { name: "HTML5", icon: <BsFileEarmarkCode className="text-[#E34F26]" /> },
      ],
    },
    {
      icon: Database,
      title: "Backend & Database",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
        { name: "Express", icon: <SiExpress className="text-foreground" /> },
        { name: "Prisma", icon: <SiPrisma className="text-[#2D3748]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "Redis", icon: <SiRedis className="text-[#DC382D]" /> },
        { name: "REST APIs", icon: <BsGrid1X2 className="text-primary" /> },
      ],
    },
    {
      icon: Lock,
      title: "Auth & Security",
      skills: [
        { name: "JWT", icon: <SiJsonwebtokens className="text-foreground" /> },
        { name: "Clerk", icon: <SiClerk className="text-[#6C47FF]" /> },
        { name: "NextAuth", icon: <ShieldCheck className="text-foreground" /> },
        { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
        { name: "Auth0", icon: <SiAuth0 className="text-[#EB5424]" /> },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: [
        { name: "Vercel", icon: <SiVercel className="text-foreground" /> },
        { name: "Render", icon: <SiRender className="text-[#46E3B7]" /> },
        { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
        { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
        { name: "Linux", icon: <FaLinux className="text-foreground" /> },
      ],
    },
    {
      icon: Terminal,
      title: "Tools & Workflow",
      skills: [
        { name: "VS Code", icon: <TbBrandVscode className="text-[#007ACC]" /> },
        { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
        { name: "GitHub", icon: <Globe className="text-foreground" /> },
        { name: "Docker", icon: <Cpu className="text-[#2496ED]" /> },
      ],
    },
    {
      icon: Paintbrush,
      title: "Creative & Motion",
      skills: [
        { name: "UI Animation", icon: <MdAnimation className="text-[#FF4081]" /> },
        { name: "Framer Motion", icon: <Zap className="text-[#0055FF]" /> },
        { name: "SVG Design", icon: <Paintbrush className="text-[#00C853]" /> },
      ],
    },
  ];

  return (
    <main className="relative  min-h-screen overflow-hidden bg-background py-12">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.05),transparent_50%)]" />
      
      <section className="container  relative z-10 mx-auto px-4 md:px-6">
        <div className="mb-16 flex flex-col items-center">
        
          <h1 className="bg-gradient-to-b  from-foreground to-foreground/70 bg-clip-text text-center text-2xl font-extrabold tracking-tight text-transparent md:text-4xl ">
            MY SKILLS AND EXPERTISE
          </h1>
          <div className="mt-4 h-1 w-20 rounded-full bg-primary/50" />
        </div>

        <div className="grid  grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} {...category} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Skills;