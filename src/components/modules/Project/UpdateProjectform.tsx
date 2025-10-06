/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { toast } from "sonner";
import SingleImageUploader from "@/helpers/SingleImageUploader";
import { ProjectUpdate } from "@/actions/create";

interface UpdateProjectForm {
  project: any;
  onClose: () => void;
}

export default function UpdateProjectForm({ project, onClose }: UpdateProjectForm) {
  const [file, setFile] = useState<File | null>(null);
  const [isFeatured, setIsFeatured] = useState(project.isFeatured ? "true" : "false");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    formData.append("isFeatured", isFeatured);

    if (file) formData.append("file", file);

    try {
      await ProjectUpdate(formData, String(project.id));
      toast.success("✅ Project updated successfully!");
      onClose();
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || "❌ Failed to update project");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-2xl space-y-5 shadow-md">
      <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-100">
        Update Project
      </h2>

      {/* Title */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-1">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={project.title}
          required
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-1">Description</label>
        <textarea
          id="description"
          name="description"
          rows={5}
          required
          defaultValue={project.description}
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Tags */}
      <div>
        <label htmlFor="tags" className="block text-sm font-medium mb-1">Tags (comma separated)</label>
        <input
          type="text"
          id="tags"
          name="tags"
          defaultValue={project.tags.join(", ")}
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Featured */}
      <div>
        <p className="block text-sm font-medium mb-1">Featured</p>
        <div className="flex gap-6">
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

      {/* Live & Project Links */}
      <div>
        <label htmlFor="liveLink" className="block text-sm font-medium mb-1">Live Link</label>
        <input
          type="text"
          id="liveLink"
          name="liveLink"
          defaultValue={project.liveLink || ""}
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <div>
        <label htmlFor="projectLink" className="block text-sm font-medium mb-1">Project Repo Link</label>
        <input
          type="text"
          id="projectLink"
          name="projectLink"
          defaultValue={project.projectLink || ""}
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Thumbnail */}
      <div>
        <label className="block text-sm font-medium mb-1">Thumbnail</label>
        <SingleImageUploader onChange={setFile} />
        {project.thumbnail && !file && (
          <img src={project.thumbnail} alt="thumbnail" className="mt-2 w-48 h-28 object-cover rounded-md" />
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
      >
        {loading ? "Updating..." : "Update Project"}
      </button>
    </form>
  );
}
