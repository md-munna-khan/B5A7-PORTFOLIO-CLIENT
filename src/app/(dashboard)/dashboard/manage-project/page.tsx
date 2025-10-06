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

import CreateProjectForm from "@/components/modules/Project/CreateProjectForm";

export default function CreateProject() {
  const [open, setOpen] = useState(false);

  // ✅ Auto close modal when blog is created successfully
  useEffect(() => {
    const handleClose = () => setOpen(false);
    window.addEventListener("close-blog-modal", handleClose);
    return () => window.removeEventListener("close-blog-modal", handleClose);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
        ✍️ Create Your Project
      </h1>

      {/* Create Blog Button */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            size="lg"
            className="flex items-center gap-2 px-6 py-3 rounded-full text-lg font-medium shadow-md"
          >
            <PenSquare className="w-5 h-5" />
            Create Blog
          </Button>
        </DialogTrigger>

        {/* Modal Content */}
        <DialogContent className="sm:max-w-[600px] w-[90%] max-h-[90vh] overflow-y-auto rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-semibold">
              Create a New Project
            </DialogTitle>
          </DialogHeader>

    <CreateProjectForm/>
        </DialogContent>
      </Dialog>
    </div>
  );
}
