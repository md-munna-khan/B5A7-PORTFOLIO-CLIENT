
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
import { Eye, Star } from "lucide-react";
import { ShineBorder } from "@/components/ui/shine-border";

export default function ProjectCard({ post }: { post: IProjectPost }) {
  return (
    <Card className="bg-card text-card-foreground border border-border rounded-xl hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col relative w-full max-w-[350px">
       <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
      {/* Thumbnail */}
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

        {/* Featured Badge */}
        {post.isFeatured && (
          <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-md flex items-center gap-1">
            <Star size={14} /> Featured
          </div>
        )}

        {/* Views */}
        <div className="absolute bottom-3 left-3 bg-primary/70 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
          <Eye size={14} /> {post.views} views
        </div>
      </div>

      {/* Content */}
      <CardContent className=" flex-1 flex flex-col justify-between">
        <CardHeader className="p-0 mb-2">
          <CardTitle className="text-lg md:text-xl font-semibold line-clamp-2">
            {post.title}
          </CardTitle>
        </CardHeader>

        <CardDescription className="text-muted-foreground line-clamp-3 mb-3">
          {post.description}
        </CardDescription>

        {/* Category */}
        <div className=" text-sm font-medium ">Category : {post.category} </div>

        {/* Actions */}
    
 {/* Actions */}
<CardFooter className="flex  sm:flex-row justify-center justify-between items-center gap-3 mt-auto  p-2 rounded-b-lg shadow-inner">
  {/* View Details Button */}
  <Link href={`/projects/${post.id}`} passHref>
    <Button
      size="sm"
      variant="outline"
      className="flex items-center gap-2 transition-transform hover:scale-105 hover:shadow-md"
    >
      View Details
    </Button>
  </Link>

  {/* Live Link Button */}
  {post.liveLink && (
    <Link href={post.liveLink} target="_blank" rel="noopener noreferrer">
      <Button
        size="sm"
        variant="default"
        className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:scale-105 hover:shadow-lg transition-transform"
      >
        Live Link
      </Button>
    </Link>
  )}
</CardFooter>

  
      </CardContent>
    </Card>
  );
}
