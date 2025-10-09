// import ProjectDetailsCard from "@/components/modules/Project/ProjectDetailsCard";
// import { getProjectById } from "@/services/ProjectServices";


// import { IProjectPost } from "@/types";
// import React from "react";

// // ✅ Generate static params for pre-rendering
// export const generateStaticParams = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`);
//   const { data: projects } = await res.json();

//   return projects.slice(0, 2).map((project: IProjectPost) => ({
//     projectId: String(project.id),
//   }));
// };

// // dynamic metadata
// export const generateMetadata=async ({
//   params,
// }: {
//   params: Promise<{ projectId: string }>;
// }) => {
//   const {  projectId} = await params;
// const project= await getProjectById( projectId)

//   return {
//     title: project?.title || "Project Details",
//     description: project?.description?.slice(0, 160) || "Project details page",
//   };
// };

// // ✅ Main Page
// const ProjectDetailsPage = async ({
//   params,
// }: {
//   params: { projectId: string };
// }) => {
//   const project = await getProjectById(params.projectId);

//   return (
//     <div className="max-w-7xl mx-auto py-20 px-4">
//       <ProjectDetailsCard project={project} />
//     </div>
//   );
// };

// export default ProjectDetailsPage;



import ProjectDetailsCard from "@/components/modules/Project/ProjectDetailsCard";
import { getProjectById } from "@/services/ProjectServices";
import { IProjectPost } from "@/types";
import React from "react";

// ✅ Generate static params for pre-rendering
export const generateStaticParams = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`);

    if (!res.ok) {
      console.error("Failed to fetch projects:", res.statusText);
      return [];
    }

    const json = await res.json();
    const projects: IProjectPost[] = json?.data ?? [];

    if (!Array.isArray(projects) || projects.length === 0) return [];

    return projects.map((project) => ({
      projectId: String(project.id),
    }));
  } catch (error) {
    console.error("Error in generateStaticParams:", error);
    return [];
  }
};

// // ✅ Dynamic metadata
// export const generateMetadata = async ({
//   params,
// }: {
//   params: { projectId: string };
// }) => {
//   const project = await getProjectById(params.projectId);

//   return {
//     title: project?.title || "Project Details",
//     description: project?.description?.slice(0, 160) || "Project details page",
//   };
// };

// ✅ Main Page
const ProjectDetailsPage = async ({
  params,
}: {
  params: { projectId: string };
}) => {
  const project = await getProjectById(params.projectId);

  if (!project) {
    return (
      <div className="text-center py-20 text-red-500">
        Project not found.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-20 px-4">
      <ProjectDetailsCard project={project} />
    </div>
  );
};

export default ProjectDetailsPage;
