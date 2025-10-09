
// import BlogDetailsCard from "@/components/modules/Blog/BlogDetailsCard";
// import { getBlogById } from "@/services/BlogServices";
// import { IBlogPost } from "@/types";
// import React from "react";

// export const generateStaticParams = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`);
//   const { data: blogs } = await res.json();
//   return blogs.slice(0,2).map((blog:IBlogPost)=>({
// blogId:String(blog.id)
//   }))
// };


// // dynamic metadata
// export const generateMetadata=async ({
//   params,
// }: {
//   params: Promise<{ blogId: string }>;
// }) => {
//   const { blogId } = await params;
// const blog= await getBlogById(blogId)

// return {
//     title:blog?.title,
//     description:blog?.content
// }
// }

// const BlogDetailsPage = async ({
//   params,
// }: {
//   params: Promise<{ blogId: string }>;
// }) => {
//   const { blogId } = await params;

// const blog= await getBlogById(blogId)

//   return (
//     <div className="max-w-7xl mx-auto py-30 px-4">
//       <BlogDetailsCard blog={blog} />
//     </div>
//   );
// };

// export default BlogDetailsPage;




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

// ✅ Dynamic metadata
// export const generateMetadata = async ({
//   params,
// }: {
//   params: { blogId: string };
// }) => {
//   try {
//     const blog = await getBlogById(params.blogId);
//     return {
//       title: blog?.title || "Blog Details",
//       description: blog?.content?.slice(0, 160) || "Blog details page",
//     };
//   } catch (error) {
//     console.error("Error in generateMetadata:", error);
//     return {
//       title: "Blog Details",
//       description: "Blog details page",
//     };
//   }
// };

// ✅ Main Page
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
