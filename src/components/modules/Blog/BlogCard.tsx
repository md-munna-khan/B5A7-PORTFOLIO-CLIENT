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
 
} from "@/components/ui/card";
import { Eye, Star, CalendarDays } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";

export default function BlogCard({ post }: { post: IBlogPost }) {
  return (
    <Link href={`/blogs/${post.id}`}>
      <Card className="bg-card relative flex flex-col h-full  text-card-foreground border border-border rounded-lg hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        {/* 🖼️ Thumbnail Section */}
        {post.thumbnail ? (
          <div className="relative h-56 w-full overflow-hidden">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />

            {/* ⭐ Featured Badge */}
            {post.isFeatured && (
              <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-md flex items-center gap-1">
                <Star size={14} /> Featured
              </div>
            )}

            {/* 👁️ Views Badge on Image */}
            <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs font-medium px-2 py-1 rounded-md flex items-center gap-1">
              <Eye size={14} />
              {post.views} views
            </div>
          </div>
        ) : (
          <div className="h-56 w-full bg-muted flex items-center justify-center text-muted-foreground">
            No Image Available
          </div>
        )}

        {/* 📝 Blog Content */}
        <CardContent className="p-6 flex-1">
          {/* Title */}
          <CardHeader className="p-0 mb-3">
            <CardTitle className="text-xl font-bold text-foreground">
              {post.title}
            </CardTitle>
          </CardHeader>

          {/* Short content */}
          <CardDescription className="text-muted-foreground line-clamp-3 mb-4">
            {post.content}
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

          {/* Date */}
          <div className="flex items-center justify-between text-sm text-muted-foreground mt-4">
            <div className="flex items-center gap-2">
              <CalendarDays size={16} />
              {new Date(post.createdAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </div>
          </div>
        </CardContent>

          <BorderBeam duration={10} size={100} />
      </Card>
    </Link>
  );
}
