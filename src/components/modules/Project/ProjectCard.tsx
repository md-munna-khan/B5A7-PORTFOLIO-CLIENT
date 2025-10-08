"use client";

import Link from "next/link";
import Image from "next/image";
import { IProjectPost } from "@/types";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Star, ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ post }: { post: IProjectPost }) {
  return (
    <Card className="bg-card text-card-foreground border border-border rounded-lg hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
      {/* 🖼️ Thumbnail */}
      <div className="relative h-56 w-full overflow-hidden">
        {post.thumbnail ? (
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-muted flex items-center justify-center text-muted-foreground">
            No Image Available
          </div>
        )}

        {post.isFeatured && (
          <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-md flex items-center gap-1">
            <Star size={14} /> Featured
          </div>
        )}
      </div>
 <div className="absolute ">
    <div className="flex items-center gap-2 text-sm">
            <Eye size={16} /> {post.views}
          </div>
 </div>
      {/* 📝 Content */}
      <CardContent className="p-2 flex-1 flex flex-col justify-between">
        {/* Title */}
        <CardHeader className="p-0 mb-2">
          <CardTitle className="text-xl font-bold text-foreground line-clamp-2">
            {post.title}
          </CardTitle>
        </CardHeader>

        {/* Description */}
        <CardDescription className="text-muted-foreground line-clamp-3 mb-4">
          {post.description}
        </CardDescription>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs font-medium bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Views + Links in one line */}
        <div className="flex items-center justify-between border-2 rounded-2xl p-2   text-sm ">
          <div className="flex items-center gap-2 text-muted-foreground">
           

                <Link href={`/projects/${post.id}`}>
          <Button variant="link" size="sm" className="text-primary">
            Read More →
          </Button>
        </Link>
          </div>

          <div className="flex items-center gap-3">
            {post.liveLink && (
              <Link
                href={post.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-primary hover:underline"
              >
                <ExternalLink size={16} /> Live
              </Link>
            )}
            {post.projectLink && (
              <Link
                href={post.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-foreground hover:underline"
              >
                <Github size={16} /> Code
              </Link>
            )}
          </div>
        </div>
      </CardContent>

     
    </Card>
  );
}
