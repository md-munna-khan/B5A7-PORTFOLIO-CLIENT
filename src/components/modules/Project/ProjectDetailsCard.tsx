"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,

  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
    <main className="max-w-4xl mx-auto py-20 px-4 space-y-8">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>

      {/* Author Section */}
      {project.author && (
        <div className="flex items-center gap-4">
          <Image
            src={
              project.author.picture ||
              "https://cdn-icons-png.flaticon.com/512/9385/9385289.png"
            }
            alt={project.author.name}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <p className="font-semibold flex items-center gap-1">
              {project.author.name}
              {project.author.isVerified && (
                <span className="text-blue-500">✔</span>
              )}
            </p>
            <p className="text-gray-500 text-sm">
              {new Date(project.createdAt).toLocaleDateString()} • {project.views} views
            </p>
          </div>
        </div>
      )}

      {/* Project Card */}
      <Card className="rounded-xl shadow-lg overflow-hidden">
        {/* Thumbnail */}
        {project.thumbnail && (
          <div className="relative h-80 w-full">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <CardContent className="space-y-6">
          {/* Description */}
          <article className="prose dark:prose-invert prose-lg max-w-none">
            <p>{project.description}</p>
          </article>

          {/* Links */}
          <CardFooter className="flex flex-wrap gap-4">
            {project.liveLink && (
              <Link href={project.liveLink} target="_blank">
                <Button variant="default">🌐 Live Preview</Button>
              </Link>
            )}
            {project. projectLink && (
              <Link href={project. projectLink} target="_blank">
                <Button variant="secondary">💻 View Code</Button>
              </Link>
            )}
          </CardFooter>
        </CardContent>
      </Card>

      {/* Back to Home */}
      <div className="pt-4">
        <Link href="/">
          <Button variant="outline">⬅ Back to Home</Button>
        </Link>
      </div>
    </main>
  );
}
