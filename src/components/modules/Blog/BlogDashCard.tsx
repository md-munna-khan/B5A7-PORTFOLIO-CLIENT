/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import { IBlogPost } from "@/types";
import { BlogDelete } from "@/actions/create";
import { toast } from "sonner";
import Swal from "sweetalert2";
import { Edit, Trash2, X } from "lucide-react";
import UpdateBlogForm from "@/components/modules/Blog/UpdateBlogForm";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BlogDashCard({ post }: { post: IBlogPost }) {
  const [isPending, startTransition] = useTransition();
  const [showModal, setShowModal] = useState(false);

  // ✅ Handle Delete
  const handleDelete = async () => {
    const confirmDelete = await Swal.fire({
      title: "Are you sure?",
      text: "You won’t be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (!confirmDelete.isConfirmed) return;

    startTransition(async () => {
      try {
        await BlogDelete(post.id.toString());
        toast.success("🗑️ Blog deleted successfully!");
      } catch (error: any) {
        console.error(error);
        toast.error(error.message || "Failed to delete blog");
      }
    });
  };

  return (
    <>
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

        <CardContent className="space-y-4">
          <CardHeader className="p-0">
            <CardTitle className="text-xl font-bold">{post.title}</CardTitle>
          </CardHeader>

          <CardDescription className="text-gray-700 dark:text-gray-300 line-clamp-3">
            {post.content}
          </CardDescription>

          <CardFooter className="p-0 mt-2 flex justify-between items-center">
            <Link href={`/blogs/${post.id}`}>
              <Button variant="link" size="sm">
                Read More →
              </Button>
            </Link>

            <div className="flex gap-2">
              {/* Edit Button */}
              <Button
                variant="outline"
                size="icon"
                onClick={() => setShowModal(true)}
                title="Edit Blog"
              >
                <Edit className="w-4 h-4 text-yellow-500 dark:text-yellow-300" />
              </Button>

              {/* Delete Button */}
              <Button
                variant="outline"
                size="icon"
                onClick={handleDelete}
                disabled={isPending}
                title="Delete Blog"
              >
                {isPending ? (
                  <span className="text-xs text-gray-400">...</span>
                ) : (
                  <Trash2 className="w-4 h-4 text-red-600 dark:text-red-300" />
                )}
              </Button>
            </div>
          </CardFooter>
        </CardContent>
      </Card>

      {/* ✅ Update Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="relative bg-white dark:bg-gray-900 w-[95%] md:w-[700px] max-h-[90vh] overflow-y-auto rounded-xl shadow-lg p-6">
            {/* Close button */}
            <Button
              variant="ghost"
              className="absolute top-3 right-3 p-1"
              onClick={() => setShowModal(false)}
            >
              <X className="w-5 h-5" />
            </Button>

            <UpdateBlogForm post={post} onClose={() => setShowModal(false)} />
          </div>
        </div>
      )}
    </>
  );
}
