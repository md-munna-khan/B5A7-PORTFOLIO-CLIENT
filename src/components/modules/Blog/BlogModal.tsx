"use client";


import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import CreateBlogForm from "./CreateBlogform";
import { Button } from "@/components/ui/button";

export default function BlogModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mb-4">➕ Create New Blog</Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Create a New Blog</DialogTitle>
        </DialogHeader>
        <CreateBlogForm />
      </DialogContent>
    </Dialog>
  );
}
