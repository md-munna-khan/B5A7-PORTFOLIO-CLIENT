
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { PenSquare } from "lucide-react";

import { IProjectPost } from "@/types";
import ProjectDashCard from "@/components/modules/Project/ProjectDashCard";
import CreateProjectForm from "@/components/modules/Project/CreateProjectForm";

export default function CreateProject() {
  const [projects, setProjects] = useState<IProjectPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  // ✅ Fetch blogs client-side
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
          cache: "no-store",
        });
        const json = await res.json();
        setProjects(json.data || []);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // ✅ Auto close modal after blog creation
  useEffect(() => {
    const handleClose = () => setOpen(false);
    window.addEventListener("close-blog-modal", handleClose);
    return () => window.removeEventListener("close-blog-modal", handleClose);
  }, []);

  return (
    <div className="w-full flex flex-col items-center border-2 p-4">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
        ✍️ Create Your Project
      </h1>

      {/* Create Blog Button + Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            size="lg"
            className="flex items-center gap-2 px-6 py-3 rounded-full text-lg font-medium shadow-md"
          >
            <PenSquare className="w-5 h-5" />
            Create Project
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[600px] w-[90%] max-h-[90vh] overflow-y-auto rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-semibold">
              Create a New Project
            </DialogTitle>
          </DialogHeader>
          <CreateProjectForm/>
        </DialogContent>
      </Dialog>

      {/* Blog List */}
      <div className="py-10 px-4 max-w-7xl w-full mx-auto">
        <h2 className="text-center text-4xl font-semibold mb-6">
          ALL PROJECTS
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading Projects...</p>
        ) : projects.length === 0 ? (
          <p className="text-center text-gray-500">No blogs found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-4">
       {
         projects.map((blog:IProjectPost)=>(
       <ProjectDashCard key={blog.id} post={blog}/>
       
         ))
       }
          </div>
        )}
      </div>
    </div>
  );
}
