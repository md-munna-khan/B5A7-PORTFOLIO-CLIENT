
import BlogCard from "@/components/modules/Blog/BlogCard";
import { IBlogPost } from "@/types";
import { Metadata } from "next";


export const metadata:Metadata = {
  title:"All Blogs Page",
  description:"Brows All blog Post on web development",

}

const AllBlogsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`,{
    cache:"no-store"
  });
  const {data:blogs} = await res.json()

  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl">All Blogs page </h2>
<div className="grid grid-cols-3 gap-4 my-4">
{
  blogs.map((blog:IBlogPost)=>(
<BlogCard key={blog.id} post={blog}/>

  ))
}
</div>
    </div>
  );
};

export default AllBlogsPage;
