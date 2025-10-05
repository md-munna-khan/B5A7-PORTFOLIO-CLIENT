/* eslint-disable @typescript-eslint/no-explicit-any */


import BlogCard from "@/components/modules/Blog/BlogCard";
import Banner from "@/components/ui/Home/Banner";
import { IBlogPost } from "@/types";

export default async function HomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`,{
    next:{
      // revalidate:30
      tags:["BLOGS"]
    }
  });
  const {data:blogs} = await res.json();

  return (
    <div>
      <Banner/>
      <h2 className="text-center my-5 text-4xl">Featured Posts </h2>
      <div className=" grid grid-cols-3 gap-8 max-w-6xl text-4xl my-8 mx-auto">
        {
          blogs.slice(0,3).map((blog:IBlogPost)=>(
              <BlogCard key={blog?.id} post={blog}   />
          ))
        }
      </div>
    </div>
  );
}
