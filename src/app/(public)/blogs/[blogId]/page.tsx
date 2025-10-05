
import BlogDetailsCard from "@/components/modules/Blog/BlogDetailsCard";
import { getBlogById } from "@/services/BlogServices";
import { IBlogPost } from "@/types";
import React from "react";

export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`);
  const { data: blogs } = await res.json();
  return blogs.slice(0,2).map((blog:IBlogPost)=>({
blogId:String(blog.id)
  }))
};


// dynamic metadata
export const generateMetadata=async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
const blog= await getBlogById(blogId)

return {
    title:blog?.title,
    description:blog?.content
}
}

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;

const blog= await getBlogById(blogId)

  return (
    <div className="max-w-7xl mx-auto py-30 px-4">
      <BlogDetailsCard blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
