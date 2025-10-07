/* eslint-disable @typescript-eslint/no-explicit-any */



import ProjectCard from "@/components/modules/Project/ProjectCard";
import Banner from "@/components/ui/Home/Banner";
import {  IProjectPost } from "@/types";
import AboutPage from "./about/page";
import Skills from "@/components/ui/About/Skills";
import ContactMe from "@/components/ui/Contact/ContactMe";




export default async function HomePage() {
 

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
    
      <h2 className="text-center my-5 text-4xl">Featured Projects </h2>
      <div className=" grid grid-cols-3 gap-8 max-w-6xl text-4xl my-8 mx-auto">
        {
          projects.slice(0,3).map((blog:IProjectPost)=>(
              <ProjectCard key={blog?.id} post={blog}   />
          ))
        }
      </div>
    <ContactMe/>
    </div>
  );
}
