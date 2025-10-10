"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Calendar, User, CheckCircle2, Globe, Code } from "lucide-react";
import { IProjectPost } from "@/types";

export default function ProjectDetailsCard({ project }: { project: IProjectPost }) {
  if (!project) {
    return (
      <div className="py-20 text-center text-gray-500 dark:text-gray-400">
        Project not found.
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto py-20 px-4">
      {/* Back to Home */}
      <div className="mb-6">
        <Link href="/">
          <Button variant="ghost" className="flex items-center gap-2">
            ⬅ Back to Home
          </Button>
        </Link>
      </div>

      {/* Project Card */}
      <Card className="shadow-lg border-none overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image Section */}
          {project.thumbnail && (
            <div className="relative w-full h-72 md:h-[500px] overflow-hidden rounded-lg">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
          )}

          {/* Content Section */}
          <div className="flex flex-col justify-center space-y-4 p-4 md:p-6">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>

            {/* Author */}
            {project.author && (
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <Image
                  src={
                    project.author.picture ||
                    "https://cdn-icons-png.flaticon.com/512/9385/9385289.png"
                  }
                  alt={project.author.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex flex-col">
                  <span className="flex items-center gap-1 font-semibold">
                    <User className="h-4 w-4 text-primary" />
                    {project.author.name}
                    {project.author.isVerified && (
                      <CheckCircle2 className="h-4 w-4 text-blue-500" />
                    )}
                  </span>
                  <span className="flex items-center gap-2 text-gray-400">
                    <Calendar className="h-4 w-4" />{" "}
                    {new Date(project.createdAt).toLocaleDateString()}
                    <Eye className="h-4 w-4" /> {project.views} views
                  </span>
                </div>
              </div>
            )}

            {/* Description */}
            <CardContent className="prose prose-lg max-w-none p-0">
              <p className="leading-relaxed">{project.description}</p>
            </CardContent>

            {/* Links */}
            <CardFooter className="flex flex-wrap gap-4 pt-4">
              {project.liveLink && (
                <Link href={project.liveLink} target="_blank">
                  <Button variant="default" className="flex items-center gap-1">
                    <Globe className="h-4 w-4" /> Live Preview
                  </Button>
                </Link>
              )}

              {project.frontendRepoLink && (
                <Link href={project.frontendRepoLink} target="_blank">
                  <Button variant="secondary" className="flex items-center gap-1">
                    <Code className="h-4 w-4" /> Frontend Code
                  </Button>
                </Link>
              )}

              {project.backendRepoLink && (
                <Link href={project.backendRepoLink} target="_blank">
                  <Button variant="outline" className="flex items-center gap-1">
                    <Code className="h-4 w-4" /> Backend Code
                  </Button>
                </Link>
              )}
            </CardFooter>
          </div>
        </div>
      </Card>
    </main>
  );
}
