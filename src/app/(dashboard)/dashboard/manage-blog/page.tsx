



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
import CreateBlogForm from "@/components/modules/Blog/CreateBlogform";
import { PenSquare } from "lucide-react";
import BlogDashCard from "@/components/modules/Blog/BlogDashCard";
import { IBlogPost } from "@/types";

export default function CreateBlog() {
  const [blogs, setBlogs] = useState<IBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  // ✅ Fetch blogs client-side
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
          cache: "no-store",
        });
        const json = await res.json();
        setBlogs(json.data || []);
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
        ✍️ Create Your Blog
      </h1>

      {/* Create Blog Button + Modal */}
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

        <DialogContent className="sm:max-w-[600px] w-[90%] max-h-[90vh] overflow-y-auto rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-semibold">
              Create a New Blog
            </DialogTitle>
          </DialogHeader>
          <CreateBlogForm />
        </DialogContent>
      </Dialog>

      {/* Blog List */}
      <div className="py-10 px-4 max-w-7xl w-full mx-auto  ">
        <h2 className="text-center text-4xl font-semibold mb-6">
          ALL BLOGS PAGE
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading blogs...</p>
        ) : blogs.length === 0 ? (
          <p className="text-center text-gray-500">No blogs found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-4">
            {blogs.map((blog: IBlogPost) => (
              <BlogDashCard key={blog.id} post={blog} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
