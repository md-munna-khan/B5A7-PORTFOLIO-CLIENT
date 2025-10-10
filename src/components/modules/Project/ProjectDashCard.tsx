/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import Swal from "sweetalert2";
import { Edit, Trash2, ExternalLink, Github, Eye } from "lucide-react";

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
import { useRouter } from "next/navigation";

export default function ProjectDashCard({ post }: { post: IProjectPost }) {
  const [isPending, startTransition] = useTransition();
  const [showModal, setShowModal] = useState(false);
const router = useRouter()
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
        toast.success("🗑️ Project deleted successfully!");
          router.push("/dashboard/manage-project")
      } catch (error: any) {
        console.error(error);
        toast.error(error.message || "Failed to delete project");
      }
    });
  };

  return (
    <>
      <Card className="group hover:shadow-xl transition-shadow duration-300 border border-border rounded-xl overflow-hidden">
        {/* ✅ Thumbnail with Views Overlay */}
        <div className="relative h-56 w-full overflow-hidden">
          {post.thumbnail ? (
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="h-56 w-full bg-muted flex items-center justify-center text-muted-foreground">
              No Image Available
            </div>
          )}

          {/* Views Overlay */}
          <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
            <Eye size={14} /> {post.views}
          </div>
        </div>

        {/* ✅ Header */}
        <CardHeader className=" flex flex-col gap-2">
          <CardTitle className="text-lg font-bold text-foreground group-hover:text-blue-600 transition-colors">
            {post.title}
          </CardTitle>
          {post.category && (
            <p className="text-sm text-muted-foreground font-medium">
              Category: {post.category}
            </p>
          )}
        </CardHeader>

        {/* ✅ Content */}
        <CardContent className=" flex flex-col gap-2">
          <p className="text-muted-foreground mb-2 line-clamp-3">
            {post.description}
          </p>

          {/* Tags */}
          {post.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2">
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
        </CardContent>

        {/* ✅ Footer */}
        <CardFooter className="flex flex-col  justify-between items-center border-t gap-3">
          {/* Project Links */}
          <div className="flex  items-center gap-3 flex-wrap">
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

            {post.frontendRepoLink && (
              <Link
                href={post.frontendRepoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-foreground hover:underline"
              >
                <Github size={16} /> Frontend
              </Link>
            )}

            {post.backendRepoLink && (
              <Link
                href={post.backendRepoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-foreground hover:underline"
              >
                <Github size={16} /> Backend
              </Link>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-2 flex-wrap justify-end">
            {/* Read More */}
            <Link href={`/projects/${post.id}`}>
              <Button variant="default" size="sm" className="flex items-center gap-1">
                <Eye className="w-4 h-4" /> Read More
              </Button>
            </Link>

            {/* Edit */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowModal(true)}
              className="flex items-center gap-1"
            >
              <Edit className="w-4 h-4" /> 
            </Button>

            {/* Delete */}
            <Button
              variant="destructive"
              size="sm"
              onClick={handleDelete}
              disabled={isPending}
              className="flex items-center gap-1"
            >
              <Trash2 className="w-4 h-4" />
              {isPending ? "..." : ""}
            </Button>
          </div>
        </CardFooter>
      </Card>

      {/* ✅ Update Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-[700px] max-w-[95%] rounded-xl p-6">
          <DialogHeader>
            <DialogTitle>Edit Project</DialogTitle>
          </DialogHeader>
          <UpdateProjectForm
            project={post}
            onClose={() => setShowModal(false)}
          />
          <DialogClose className="absolute top-3 right-3 text-gray-500 hover:text-red-500" />
        </DialogContent>
      </Dialog>
    </>
  );
}
