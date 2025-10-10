

import BlogDashCard from "@/components/modules/Blog/BlogDashCard";
import BlogModal from "@/components/modules/Blog/BlogModal"; // import modal
import { IBlogPost } from "@/types";

async function getBlogs(): Promise<IBlogPost[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
    next: { tags: ["BLOGS"] }
  });
  const data = await res.json();
  return data?.data || [];
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <div className="w-full flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        ✍️ All Blogs Dashboard
      </h1>

      {/* Modal Button */}
      <BlogModal />

      {blogs.length === 0 ? (
        <p className="text-center text-gray-500">No blogs found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-4">
          {blogs.map((blog: IBlogPost) => (
            <BlogDashCard key={blog.id} post={blog} />
          ))}
        </div>
      )}
    </div>
  );
}
