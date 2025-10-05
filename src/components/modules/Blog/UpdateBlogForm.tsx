/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { toast } from "sonner";
import SingleImageUploader from "@/helpers/SingleImageUploader";
import { BlogUpdate } from "@/actions/create";

export default function UpdateBlogForm({ post, onClose }: any) {
  const [file, setFile] = useState<File | null>(null);
  const [isFeatured, setIsFeatured] = useState(post?.isFeatured ? "true" : "false");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    formData.append("isFeatured", isFeatured);
    if (file) formData.append("file", file);

    try {
      await BlogUpdate(formData, post.id.toString());
      toast.success("✅ Blog updated successfully!");
      window.dispatchEvent(new Event("close-update-modal"));
      onClose?.();
    } catch (error) {
      console.error(error);
      toast.error("❌ Failed to update blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto mt-4 p-6 bg-white shadow-md rounded-2xl border space-y-6"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Update Blog
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
          defaultValue={post?.title}
          required
          placeholder="Enter blog title"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Content */}
      <div>
        <label htmlFor="content" className="block text-sm font-medium mb-1">
          Content
        </label>
        <textarea
          id="content"
          name="content"
          rows={5}
          required
          defaultValue={post?.content}
          placeholder="Write your content..."
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
          defaultValue={post?.tags?.join(", ")}
          placeholder="Next.js, React, Web Dev"
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
        {loading ? "Updating..." : "Update Blog"}
      </button>
    </form>
  );
}
