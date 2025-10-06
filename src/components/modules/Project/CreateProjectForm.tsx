"use client";

import { useState } from "react";
import SingleImageUploader from "@/helpers/SingleImageUploader";
import { toast } from "sonner";
import { ProjectCreate } from "@/actions/create";

export default function CreateProjectForm() {
  const [file, setFile] = useState<File | null>(null);
  const [isFeatured, setIsFeatured] = useState("false");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    formData.append("isFeatured", isFeatured);

    if (file) formData.append("file", file);

    try {
      await ProjectCreate(formData);
      toast.success("✅ Project published successfully!");
      window.dispatchEvent(new Event("close-blog-modal"));
      setFile(null);
      setIsFeatured("false");
    } catch (error) {
      console.error(error);
      toast.error("❌ Failed to publish project");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto mt-10 p-8 bg-white shadow-md rounded-2xl border space-y-6"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Publish a New Project
      </h2>

      {/* Title */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-1">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          placeholder="Enter project title"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-1">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          required
          placeholder="Write project description..."
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Tags */}
      <div>
        <label htmlFor="tags" className="block text-sm font-medium mb-1">
          Tags (comma separated)
        </label>
        <input
          type="text"
          id="tags"
          name="tags"
          placeholder="React, Next.js, Tailwind"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Live Link */}
      <div>
        <label htmlFor="liveLink" className="block text-sm font-medium mb-1">
          Live Link
        </label>
        <input
          type="url"
          id="liveLink"
          name="liveLink"
          placeholder="https://live-project.com"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Project Repo Link */}
      <div>
        <label htmlFor="projectLink" className="block text-sm font-medium mb-1">
          Project Repository Link
        </label>
        <input
          type="url"
          id="projectLink"
          name="projectLink"
          placeholder="https://github.com/username/project"
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

      {/* Thumbnail */}
      <div>
        <label className="block text-sm font-medium mb-1">Thumbnail</label>
        <SingleImageUploader onChange={setFile} />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition ${
          loading ? "opacity-70 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Publishing..." : "Publish Project"}
      </button>
    </form>
  );
}
