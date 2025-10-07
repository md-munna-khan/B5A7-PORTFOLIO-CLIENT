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

export default function ProjectCard({ post }: { post: IProjectPost }) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      {/* Image Section */}
      {post.thumbnail ? (
        <div className="relative h-56 w-full overflow-hidden rounded-t-lg">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : (
        <div className="h-56 w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-300 rounded-t-lg">
          No Image
        </div>
      )}

      {/* Content Section */}
      <CardContent className="p-6">
        <CardHeader className="p-0 mb-2">
          <CardTitle className="text-xl font-bold">{post.title}</CardTitle>
        </CardHeader>

        <CardDescription className="text-gray-700 dark:text-gray-300 line-clamp-3 mb-4">
          {post.description}
        </CardDescription>

        <CardFooter className="p-0 mt-2 flex justify-end">
          <Link href={`/projects/${post.id}`}>
            <Button variant="link" size="sm">
              Read More →
            </Button>
          </Link>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
