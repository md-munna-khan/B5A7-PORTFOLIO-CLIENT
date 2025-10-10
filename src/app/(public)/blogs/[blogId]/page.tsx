
import BlogDetailsCard from "@/components/modules/Blog/BlogDetailsCard";
import { getBlogById } from "@/services/BlogServices";
import { IBlogPost } from "@/types";
import React from "react";

// ✅ Generate static params
export const generateStaticParams = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`);
    if (!res.ok) {
      console.error("Failed to fetch blogs:", res.statusText);
      return [];
    }

    const json = await res.json();
    const blogs: IBlogPost[] = json?.data ?? [];

    if (!Array.isArray(blogs) || blogs.length === 0) return [];

    return blogs.map((blog) => ({
      blogId: String(blog.id),
    }));
  } catch (error) {
    console.error("Error in generateStaticParams:", error);
    return [];
  }
};


const BlogDetailsPage = async ({
  params,
}: {
  params: { blogId: string };
}) => {
  try {
    const blog = await getBlogById(params.blogId);

    if (!blog) {
      return (
        <div className="text-center py-20 text-red-500">
          Blog not found.
        </div>
      );
    }

    return (
      <div className="max-w-7xl mx-auto py-30 px-4">
        <BlogDetailsCard blog={blog} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog:", error);
    return (
      <div className="text-center py-20 text-red-500">
        Failed to load blog.
      </div>
    );
  }
};

export default BlogDetailsPage;
