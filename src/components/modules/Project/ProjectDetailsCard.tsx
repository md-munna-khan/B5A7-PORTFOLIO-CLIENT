/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";

export default function ProjectDetailsCard({ project }: { project: any }) {
  if (!project) {
    return (
      <div className="py-20 text-center text-gray-500 dark:text-gray-400">
        Project not found.
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">{project?.title}</h1>

      {/* ✅ Author Section */}
      {project.author && (
        <div className="flex items-center gap-4 mb-8">
          <Image
            src={
              project.author.picture ||
              "https://cdn-icons-png.flaticon.com/512/9385/9385289.png"
            }
            alt={project?.author?.name}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <p className="font-semibold flex items-center gap-1">
              {project.author.name}
              {project.author.isVerified && (
                <span className="text-blue-500">✔</span>
              )}
            </p>
            <p className="text-gray-500 text-sm">
              {new Date(project.createdAt).toLocaleDateString()} •{" "}
              {project.views} views
            </p>
          </div>
        </div>
      )}

      {/* ✅ Thumbnail */}
      {project.thumbnail && (
        <div className="relative h-80 w-full mb-8 overflow-hidden rounded-xl shadow-md">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* ✅ Project Description */}
      <article className="prose dark:prose-invert prose-lg max-w-none mb-10">
        <p>{project.description}</p>
      </article>

      {/* ✅ Live & Repo Links */}
      <div className="flex flex-wrap gap-4">
        {project.liveLink && (
          <Link
            href={project.liveLink}
            target="_blank"
            className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            🌐 Live Preview
          </Link>
        )}
        {project.repoLink && (
          <Link
            href={project.repoLink}
            target="_blank"
            className="px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
          >
            💻 View Code
          </Link>
        )}
      </div>
    </main>
  );
}
