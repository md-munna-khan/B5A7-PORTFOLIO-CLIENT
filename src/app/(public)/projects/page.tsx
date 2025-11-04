

import ProjectCard from "@/components/modules/Project/ProjectCard";
import { IProjectPost } from "@/types";
import { Metadata } from "next";


export const metadata:Metadata = {
  title:"All Projects Page",
  description:"Brows All blog Post on web development",

}

const AllProjectsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`,{
    cache:"no-store"
  });
  const {data:projects} = await res.json()

  return (
    <div className="py-10 px-4 max-w-7xl mx-auto">
      <h2 className="text-center  p-2 text-4xl">ALL PROJECTS </h2>
<div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 my-4">
{
  projects.map((blog:IProjectPost)=>(
<ProjectCard key={blog.id} post={blog}/>

  ))
}
</div>
    </div>
  );
};

export default  AllProjectsPage ;
