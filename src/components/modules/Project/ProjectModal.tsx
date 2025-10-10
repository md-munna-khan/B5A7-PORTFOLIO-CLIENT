"use client";


import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import CreateProjectForm from "./CreateProjectForm";

export default function ProjectModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mb-4">➕ Create New Project</Button>
      </DialogTrigger>
   <DialogContent
  className="max-w-lg sm:max-w-xl max-h-[90vh] overflow-y-auto rounded-xl p-6"
>
  <DialogHeader>
    <DialogTitle>Create a New Project</DialogTitle>
  </DialogHeader>
  <CreateProjectForm />
</DialogContent>
    </Dialog>
  );
}
