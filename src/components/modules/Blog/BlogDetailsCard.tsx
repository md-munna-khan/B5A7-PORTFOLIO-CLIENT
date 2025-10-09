/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface BlogDetailsCardProps {
  blog: any;
}

export default function BlogDetailsCard({ blog }: BlogDetailsCardProps) {
  if (!blog) {
    return (
      <div className="py-20 text-center text-gray-500">
        Blog not found.
        <div className="mt-4">
          <Link href="/" passHref>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="w-full min-h-screen bg-background text-foreground">
      {/* Back to Home Button */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link href="/" passHref>
          <Button variant="ghost" className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Blog Card */}
      <Card className="shadow-lg border-none max-w-7xl mx-auto">
        {/* Thumbnail with overlay */}
        {blog.thumbnail && (
          <div className="relative h-[500px] w-full">
            <Image
              src={blog.thumbnail}
              alt={blog.title}
              fill
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
              <h1 className="text-4xl md:text-5xl font-bold">{blog.title}</h1>
              <p className="mt-2 text-sm flex items-center gap-4">
                <span>Author: {blog.author.name}</span>
                {blog.author.isVerified && <span className="text-blue-400">✔ Verified</span>}
                <span>{blog.views} views</span>
                <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
              </p>
            </div>
          </div>
        )}

        {/* Blog Content */}
        <CardContent className="prose prose-lg max-w-none mt-6 px-6">
          <p>{blog.content}</p>
        </CardContent>

        
      </Card>
    </main>
  );
}
