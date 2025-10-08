/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import Swal from "sweetalert2";
import { Edit, Trash2 } from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,

  DialogClose,
} from "@/components/ui/dialog";

import { IProjectPost } from "@/types";
import { ProjectDelete } from "@/actions/create";
import UpdateProjectForm from "./UpdateProjectform";

export default function ProjectDashCard({ post }: { post: IProjectPost }) {
  const [isPending, startTransition] = useTransition();
  const [showModal, setShowModal] = useState(false);

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
        await ProjectDelete(post.id.toString());
        toast.success("🗑️ Blog deleted successfully!");
      } catch (error: any) {
        console.error(error);
        toast.error(error.message || "Failed to delete blog");
      }
    });
  };

  return (
    <>
      <Card className="group hover:shadow-xl transition-shadow duration-300">
        {post.thumbnail ? (
          <div className="relative h-56 w-full overflow-hidden rounded-t-xl">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ) : (
          <div className="h-56 w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-300 rounded-t-xl">
            No Image
          </div>
        )}

        <CardHeader className="p-4">
          <CardTitle className="text-lg font-bold group-hover:text-blue-600 transition-colors">
            {post.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="p-4">
          <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
            {post.description}
          </p>
        </CardContent>

        <CardFooter className="flex justify-between items-center p-4">
          <Link
            href={`/blogs/${post.id}`}
            className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline"
          >
            Read More →
          </Link>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowModal(true)}
              className="flex items-center gap-1"
            >
              <Edit className="w-4 h-4" />
              Edit
            </Button>

            <Button
              variant="destructive"
              size="sm"
              onClick={handleDelete}
              disabled={isPending}
              className="flex items-center gap-1"
            >
              <Trash2 className="w-4 h-4" />
              {isPending ? "..." : "Delete"}
            </Button>
          </div>
        </CardFooter>
      </Card>

      {/* Update Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className=" sm:max-w-[700px] max-w-[95%] rounded-xl p-6">
          <DialogHeader>
            <DialogTitle>Edit Project</DialogTitle>
          </DialogHeader>
          <UpdateProjectForm project={post} onClose={() => setShowModal(false)} />
          <DialogClose className="absolute top-3 right-3 text-gray-500 hover:text-red-500" />
        </DialogContent>
      </Dialog>
    </>
  );
}
