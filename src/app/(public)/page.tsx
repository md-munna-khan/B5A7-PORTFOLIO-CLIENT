/* eslint-disable @typescript-eslint/no-explicit-any */


import BlogCard from "@/components/modules/Blog/BlogCard";
import ProjectCard from "@/components/modules/Project/ProjectCard";
import Banner from "@/components/ui/Home/Banner";
import { IBlogPost, IProjectPost } from "@/types";
import AboutPage from "./about/page";
import Skills from "@/components/ui/About/Skills";



export default async function HomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`,{
    next:{
 
      tags:["BLOGS"]
    }
  });
  const {data:blogs} = await res.json();

  const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`,{
    next:{
 
      tags:["PROJECTS"]
    }
  });
  const {data:projects} = await result.json();

  return (
    <div>
     
      <Banner/>
        <div>
        <AboutPage/>
        <Skills/>
      </div>
      <h2 className="text-center my-5 text-4xl">Featured Blogs </h2>
      <div className=" grid grid-cols-3 gap-8 max-w-6xl text-4xl my-8 mx-auto">
        {
          blogs.slice(0,3).map((blog:IBlogPost)=>(
              <BlogCard key={blog?.id} post={blog}   />
          ))
        }
      </div>
      <h2 className="text-center my-5 text-4xl">Featured Projects </h2>
      <div className=" grid grid-cols-3 gap-8 max-w-6xl text-4xl my-8 mx-auto">
        {
          projects.slice(0,3).map((blog:IProjectPost)=>(
              <ProjectCard key={blog?.id} post={blog}   />
          ))
        }
      </div>
    
    </div>
  );
}
