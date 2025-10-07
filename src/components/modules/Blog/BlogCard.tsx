"use client";

import Link from "next/link";
import Image from "next/image";
import { IBlogPost } from "@/types";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BlogCard({ post }: { post: IBlogPost }) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      {/* Thumbnail */}
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

      <CardContent className="p-6 space-y-4">
        <CardHeader className="p-0">
          <CardTitle className="text-xl font-bold">{post.title}</CardTitle>
        </CardHeader>

        <CardDescription className="text-gray-700 dark:text-gray-300 line-clamp-3">
          {post.content}
        </CardDescription>

        <CardFooter className="p-0 mt-2 flex justify-end">
          <Link href={`/blogs/${post.id}`}>
            <Button variant="link" size="sm">
              Read More →
            </Button>
          </Link>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
