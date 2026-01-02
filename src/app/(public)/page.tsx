import ProjectCard from "@/components/modules/Project/ProjectCard";
import Banner from "@/components/ui/Home/Banner";
import { IProjectPost } from "@/types";

import ContactMe from "@/components/ui/Contact/ContactMe";
import AboutMe from "@/components/ui/About/AboutMe";
import Skills from "@/components/ui/About/Skills";

export default async function HomePage() {
  const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
    cache: "no-store",
    next: {
      tags: ["PROJECTS"],
    },
  });

  const { data: projects } = await result.json();

  return (
    <div>
      <Banner />
      <div>
        <AboutMe />
      </div>
      <div>
        <Skills />
      </div>

      <h1 className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-center text-2xl font-extrabold tracking-tight text-transparent md:text-4xl ">
        FEATURED PROJECTS
      </h1>

      {!projects || projects.length < 1 ? (
        <p className="text-center text-gray-500 my-8 text-xl">No Data Found</p>
      ) : (
        <div className="grid md:grid-cols-3 sm:grid-cols-2  gap-8 max-w-6xl text-4xl my-8 mx-auto px-4 sm:px-6 lg:px-0">
          {projects.slice(0, 3).map((blog: IProjectPost) => (
            <ProjectCard key={blog?.id} post={blog} />
          ))}
        </div>
      )}

      <ContactMe />
    </div>
  );
}
