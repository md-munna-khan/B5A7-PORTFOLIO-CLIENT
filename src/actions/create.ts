
"use server";
import { getUserSession } from "@/helpers/getUserSession";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { toast } from "sonner";
// Blog Crud operation
export const BlogCreate = async (data: FormData) => {
  const session = await getUserSession();
  if (!session?.user?.id) throw new Error("Unauthorized user");

  const blogInfo = Object.fromEntries(data.entries());

  const formData = new FormData();
  formData.append("authorId", String(session.user.id));
  formData.append("title", blogInfo.title as string);
  formData.append("content", blogInfo.content as string);

  if (blogInfo.tags) {
    const tags = blogInfo.tags
      .toString()
      .split(",")
      .map((tag) => tag.trim());
    formData.append("tags", JSON.stringify(tags));
  }

  formData.append("isFeatured", blogInfo.isFeatured ? "true" : "false");


  const file = data.get("file");
  if (file && file instanceof File) {
    formData.append("file", file);
  }


  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`API Error (${res.status}): ${errorText}`);
  }

  const result = await res.json();

  if (result?.id) {
     
    toast.success("Blog uploaded successfully!");
       revalidateTag("BLOGS")
    redirect("/");
  }

  return result;
};


export const BlogUpdate = async (data: FormData, blogId: string) => {
  const session = await getUserSession();
  if (!session?.user?.id) throw new Error("Unauthorized user");

  const formData = new FormData();

  // ✅ Required fields
  formData.append("authorId", String(session.user.id));
  formData.append("title", data.get("title") as string);
  formData.append("content", data.get("content") as string);
  formData.append("isFeatured", data.get("isFeatured") ? "true" : "false");

  // ✅ Tags
  const tagsValue = data.get("tags");
  if (tagsValue) {
    const tagsArray = tagsValue.toString().split(",").map((t) => t.trim());
    formData.append("tags", JSON.stringify(tagsArray));
  }

  // ✅ File upload
  const file = data.get("file");
  if (file && file instanceof File) {
    formData.append("file", file);
  }

  // ✅ Send request
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${blogId}`, {
    method: "PATCH",
    body: formData,
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`API Error (${res.status}): ${errorText}`);
  }

  const result = await res.json();

  if (result?.updated?.id) {
    toast.success("✅ Blog updated successfully!");
    revalidateTag("BLOGS");
    redirect("/");
  }

  return result;
};

export const BlogDelete = async (blogId: string) => {
  const session = await getUserSession();
  if (!session?.user?.id) throw new Error("Unauthorized user");

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${blogId}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`API Error (${res.status}): ${errorText}`);
  }

  const result = await res.json();

  if (result.success) {
    toast.success("Blog deleted successfully!");
    revalidateTag("BLOGS"); // ISR cache refresh for blogs
    redirect("/dashboard/manage-blog"); // Redirect owner to blogs dashboard
  }

  return result;
};

// project Crud Operation
// project CRUD Operation

export const ProjectCreate = async (data: FormData) => {
  const session = await getUserSession();
  if (!session?.user?.id) throw new Error("Unauthorized user");

  const projectInfo = Object.fromEntries(data.entries());

  const formData = new FormData();
  formData.append("authorId", String(session.user.id));
  formData.append("title", projectInfo.title as string);
  formData.append("description", projectInfo.description as string);

  // ✅ Tags
  if (projectInfo.tags) {
    const tags = projectInfo.tags
      .toString()
      .split(",")
      .map((tag) => tag.trim());
    formData.append("tags", JSON.stringify(tags));
  }

  // ✅ Featured
  formData.append("isFeatured", projectInfo.isFeatured === "true" ? "true" : "false");

  // ✅ Live & Project Links
  if (projectInfo.liveLink) formData.append("liveLink", projectInfo.liveLink as string);
  if (projectInfo.projectLink) formData.append("projectLink", projectInfo.projectLink as string);

  // ✅ File Upload
  const file = data.get("file");
  if (file && file instanceof File) {
    formData.append("file", file);
  }

  // ✅ API Request
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`API Error (${res.status}): ${errorText}`);
  }

  const result = await res.json();

  if (result?.id) {
    toast.success("Project uploaded successfully!");
    revalidateTag("PROJECTS");
    redirect("/");
  }

  return result;
};

export const ProjectUpdate = async (data: FormData, projectId: string) => {
  const session = await getUserSession();
  if (!session?.user?.id) throw new Error("Unauthorized user");

  const formData = new FormData();

  // ✅ Required fields
  formData.append("authorId", String(session.user.id));
  formData.append("title", data.get("title") as string);
  formData.append("description", data.get("description") as string);
  formData.append("isFeatured", data.get("isFeatured") === "true" ? "true" : "false");

  // ✅ Tags
  const tagsValue = data.get("tags");
  if (tagsValue) {
    const tagsArray = tagsValue.toString().split(",").map((t) => t.trim());
    formData.append("tags", JSON.stringify(tagsArray));
  }

  // ✅ Live & Project Links
  const liveLink = data.get("liveLink") as string;
  const projectLink = data.get("projectLink") as string;
  if (liveLink) formData.append("liveLink", liveLink);
  if (projectLink) formData.append("projectLink", projectLink);

  // ✅ File Upload
  const file = data.get("file");
  if (file && file instanceof File) {
    formData.append("file", file);
  }

  // ✅ API Request
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${projectId}`, {
    method: "PATCH",
    body: formData,
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`API Error (${res.status}): ${errorText}`);
  }

  const result = await res.json();

  if (result?.updated?.id) {
    toast.success("✅ Project updated successfully!");
    revalidateTag("PROJECTS");
    redirect("/");
  }

  return result;
};

export const ProjectDelete = async (projectId: string) => {
  const session = await getUserSession();
  if (!session?.user?.id) throw new Error("Unauthorized user");

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${projectId}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`API Error (${res.status}): ${errorText}`);
  }

  const result = await res.json();

  if (result.success) {
    toast.success("Project deleted successfully!");
    revalidateTag("PROJECTS"); // ISR cache refresh for projects
    redirect("/dashboard/manage-project"); // Redirect owner to projects dashboard
  }

  return result;
};
