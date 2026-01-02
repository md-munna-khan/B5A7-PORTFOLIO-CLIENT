

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
import { Button } from "@/components/ui/button";

export default function BlogCard({ post }: { post: IBlogPost }) {
  return (
   
      <Card
        className="
          relative h-full flex flex-col overflow-hidden
          border border-border bg-card text-card-foreground
          transition-all duration-300
          hover:scale-[1.02]
          hover:shadow-xl hover:shadow-primary/20
          pt-0
        "
      >
        {/* 🖼️ Image */}
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
              No Image
            </div>
          )}

          {post.isFeatured && (
            <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-md flex items-center gap-1">
              <Star size={14} /> Featured
            </div>
          )}

          <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
            <Eye size={14} />
            {post.views} views
          </div>
        </div>

        {/* 📝 Content */}
        <CardContent className="flex flex-col flex-1 p-6">
          <CardHeader className="p-0 mb-3">
            <CardTitle className="text-lg font-bold line-clamp-2">
              {post.title}
            </CardTitle>
          </CardHeader>


          <CardDescription className="text-muted-foreground line-clamp-3 min-h-[72px] mb-4">
            {post.content}
          </CardDescription>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4 min-h-[28px]">
            {post.tags?.map((tag, i) => (
              <span
                key={i}
                className="text-xs font-medium bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

      
          <div className="mt-auto flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarDays size={16} />
            {new Date(post.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </div>
        </CardContent>

        <BorderBeam duration={10} size={100} />
        <Button>
          <Link href={`/blogs/${post.id}`} className="stretched-link">
            Read More
          </Link>
        </Button>
      </Card>

  );
}
