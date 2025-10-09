/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { toast } from "sonner";
import SingleImageUploader from "@/helpers/SingleImageUploader";
import { ProjectUpdate } from "@/actions/create";
import { useRouter } from "next/navigation";

interface UpdateProjectForm {
  project: any;
  onClose: () => void;
}

export default function UpdateProjectForm({ project, onClose }: UpdateProjectForm) {
  const [file, setFile] = useState<File | null>(null);
  const [isFeatured, setIsFeatured] = useState(project.isFeatured ? "true" : "false");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    formData.append("isFeatured", isFeatured);

    if (file) formData.append("file", file);

    try {
      await ProjectUpdate(formData, project.id.toString());
      toast.success("✅ Project updated successfully!");
      router.push("/dashboard/manage-project");
      onClose?.();
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || "❌ Failed to update project");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-full sm:max-w-3xl mx-auto mt-4 p-4 sm:p-6 md:p-8 shadow-md rounded-2xl border flex flex-col space-y-4 sm:space-y-6 h-[90vh] overflow-y-auto"
    >
      <h2 className="text-2xl font-semibold text-center mb-4 sm:mb-6">
        Update Project
      </h2>

      {/* ✅ Title */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-1">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={project.title}
          required
          placeholder="Enter project title"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* ✅ Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-1">Description</label>
        <textarea
          id="description"
          name="description"
          rows={5}
          required
          defaultValue={project.description}
          placeholder="Write your project description..."
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200 resize-none"
        />
      </div>

      {/* ✅ Category */}
      <div>
        <label htmlFor="category" className="block text-sm font-medium mb-1">Category</label>
        <input
          type="text"
          id="category"
          name="category"
          defaultValue={project.category || ""}
          placeholder="Web App, API, Mobile App..."
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* ✅ Tags */}
      <div>
        <label htmlFor="tags" className="block text-sm font-medium mb-1">Tags (comma separated)</label>
        <input
          type="text"
          id="tags"
          name="tags"
          defaultValue={project.tags.join(", ")}
          placeholder="React, Next.js, MongoDB"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* ✅ Featured */}
      <div>
        <p className="block text-sm font-medium mb-1">Featured</p>
        <div className="flex gap-6 flex-wrap">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="isFeatured"
              value="true"
              checked={isFeatured === "true"}
              onChange={(e) => setIsFeatured(e.target.value)}
              className="text-blue-600 focus:ring-blue-500"
            />
            Yes
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="isFeatured"
              value="false"
              checked={isFeatured === "false"}
              onChange={(e) => setIsFeatured(e.target.value)}
              className="text-blue-600 focus:ring-blue-500"
            />
            No
          </label>
        </div>
      </div>

      {/* ✅ Live Link */}
      <div>
        <label htmlFor="liveLink" className="block text-sm font-medium mb-1">Live Link</label>
        <input
          type="url"
          id="liveLink"
          name="liveLink"
          defaultValue={project.liveLink || ""}
          placeholder="https://your-live-site.com"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* ✅ Frontend Repo Link */}
      <div>
        <label htmlFor="frontendRepoLink" className="block text-sm font-medium mb-1">Frontend Repo Link</label>
        <input
          type="url"
          id="frontendRepoLink"
          name="frontendRepoLink"
          defaultValue={project.frontendRepoLink || ""}
          placeholder="https://github.com/username/frontend-repo"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* ✅ Backend Repo Link */}
      <div>
        <label htmlFor="backendRepoLink" className="block text-sm font-medium mb-1">Backend Repo Link</label>
        <input
          type="url"
          id="backendRepoLink"
          name="backendRepoLink"
          defaultValue={project.backendRepoLink || ""}
          placeholder="https://github.com/username/backend-repo"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* ✅ Thumbnail */}
      <div>
        <label className="block text-sm font-medium mb-1">Thumbnail</label>
        <SingleImageUploader onChange={setFile} />
      </div>

      {/* ✅ Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition mt-4 ${
          loading ? "opacity-70 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Updating..." : "Update Project"}
      </button>
    </form>
  );
}
