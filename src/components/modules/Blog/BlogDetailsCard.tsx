/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Eye, Calendar, User, CheckCircle2 } from "lucide-react";

interface BlogDetailsCardProps {
  blog: any;
}

export default function BlogDetailsCard({ blog }: BlogDetailsCardProps) {
  if (!blog) {
    return (
      <div className="py-20 text-center text-gray-500">
        Blog not found.
        <div className="mt-4">
          <Link href="/blogs" passHref>
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
    <main className="w-full min-h-screen bg-background">
      {/* Back to Home Button */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link href="/blogs" passHref>
          <Button variant="ghost" className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Blog Card */}
      <Card className="shadow-lg border-none max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {/* Image Section */}
          {blog.thumbnail && (
            <div className="relative w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src={blog.thumbnail}
                alt={blog.title}
                fill
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
                sizes="100vw"
                priority
              />
            </div>
          )}

          {/* Content Section */}
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">{blog.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <User className="h-4 w-4 text-primary" />
                {blog.author?.name}
                {blog.author?.isVerified && (
                  <CheckCircle2 className="h-4 w-4 text-blue-500 ml-1" />
                )}
              </span>

              <span className="flex items-center gap-1">
                <Eye className="h-4 w-4 text-primary" /> {blog.views} views
              </span>

              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4 text-primary" />
                {new Date(blog.createdAt).toLocaleDateString()}
              </span>
            </div>

            <CardContent className="prose prose-lg max-w-none p-0">
              <p className="leading-relaxed">{blog.content}</p>
            </CardContent>
          </div>
        </div>
      </Card>
    </main>
  );
}
