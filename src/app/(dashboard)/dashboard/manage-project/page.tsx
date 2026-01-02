
import ProjectDashCard from "@/components/modules/Project/ProjectDashCard";
import ProjectModal from "@/components/modules/Project/ProjectModal";
import { IProjectPost } from "@/types";

async function getProjects(): Promise<IProjectPost[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
    cache:"no-store",
    next: { tags: ["PROJECTS"] }
  });
  const data = await res.json();
  return data?.data || [];
}

export default async function ProjectPage() {
  const projects = await  getProjects();

  return (
    <div className="w-full  flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
         All Projects Dashboard
      </h1>

      {/* Modal Button */}
      <ProjectModal />

      {projects.length === 0 ? (
        <p className="text-center text-gray-500">No blogs found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-4">
          {projects.map((blog: IProjectPost) => (
            <ProjectDashCard key={blog.id} post={blog} />
          ))}
        </div>
      )}
    </div>
  );
}
