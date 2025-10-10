import ProjectCard from "@/components/modules/Project/ProjectCard";
import Banner from "@/components/ui/Home/Banner";
import { IProjectPost } from "@/types";
import AboutPage from "./about/page";
import ContactMe from "@/components/ui/Contact/ContactMe";

export default async function HomePage() {
  const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
    cache:"no-store",
    next: {
      tags: ["PROJECTS"],
    },
  });

  const { data: projects } = await result.json();

  return (
    <div>
      <Banner />
      <div>
        <AboutPage />
      </div>

      <h1 className="text-center border-2 rounded-2xl mx-auto p-2 w-max">
        FEATURED PROJECTS
      </h1>

      {!projects || projects.length < 1 ? (
        <p className="text-center text-gray-500 my-8 text-xl">
          No Data Found
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl text-4xl my-8 mx-auto">
          {projects.slice(0, 3).map((blog: IProjectPost) => (
            <ProjectCard key={blog?.id} post={blog} />
          ))}
        </div>
      )}

      <ContactMe />
    </div>
  );
}
