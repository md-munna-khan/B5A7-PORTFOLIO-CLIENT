/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */


// "use client";

// import { useState, useTransition } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { IBlogPost } from "@/types";
// import { BlogDelete } from "@/actions/create";
// import { toast } from "sonner";
// import Swal from "sweetalert2";


// export default function BlogCard({ post }: { post: IBlogPost }) {
//   const [isPending, startTransition] = useTransition();

// const handleDelete = async () => {
//   const confirmDelete= await Swal.fire({
//     title: "Are you sure?",
//     text: "You won’t be able to revert this!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#d33",
//     cancelButtonColor: "#3085d6",
//     confirmButtonText: "Yes, delete it!",
//     cancelButtonText: "Cancel",
//   });
//     if (!confirmDelete) return;

//     startTransition(async () => {
//       try {
//         await BlogDelete(post.id.toString());
//         toast.success("Blog deleted successfully!");
//       } catch (error: any) {
//         console.error(error);
//         toast.error(error.message || "Failed to delete blog");
//       }
//     });
//   };

//   return (
//     <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 relative">
//       {post.thumbnail ? (
//         <div className="relative h-56 w-full overflow-hidden">
//           <Image
//             src={post.thumbnail}
//             alt={post.title}
//             fill
//             className="object-cover group-hover:scale-105 transition-transform duration-300"
//           />
//         </div>
//       ) : (
//         <div className="h-56 w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-300">
//           No Image
//         </div>
//       )}

//       <div className="p-6">
//         <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
//           {post.title}
//         </h3>

//         <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
//           {post.content}
//         </p>

//         <div className="flex items-center justify-between mb-4">
//           <div className="flex items-center gap-2">
//             <Image
//               src={
//                 post.author.picture ||
//                 "https://cdn-icons-png.flaticon.com/512/9385/9385289.png"
//               }
//               alt={post.author.name}
//               width={36}
//               height={36}
//               className="rounded-full border-2 border-gray-200 dark:border-gray-700"
//             />
//             <span className="text-gray-600 dark:text-gray-300 text-sm flex items-center gap-1">
//               {post.author.name}
//               {post.author.isVerified && (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-4 w-4 text-blue-500"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={3}
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//               )}
//             </span>
//           </div>
//           <span className="text-gray-500 dark:text-gray-400 text-sm">
//             {post.views} views
//           </span>
//         </div>

//         <div className="flex justify-between items-center">
//           <Link
//             href={`/blogs/${post.id}`}
//             className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline"
//           >
//             Read More →
//           </Link>

//           {/* Delete button */}
//           <button
//             onClick={handleDelete}
//             disabled={isPending}
//             className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 disabled:opacity-60 text-sm"
//           >
//             {isPending ? "Deleting..." : "Delete"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import { IBlogPost } from "@/types";
import { BlogDelete } from "@/actions/create";
import { toast } from "sonner";
import Swal from "sweetalert2";
import { Edit, Trash2, X } from "lucide-react";
import UpdateBlogForm from "@/components/modules/Blog/UpdateBlogForm";

export default function BlogCard({ post }: { post: IBlogPost }) {
  const [isPending, startTransition] = useTransition();
  const [showModal, setShowModal] = useState(false);

  // ✅ Handle Delete
  const handleDelete = async () => {
    const confirmDelete = await Swal.fire({
      title: "Are you sure?",
      text: "You won’t be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (!confirmDelete.isConfirmed) return;

    startTransition(async () => {
      try {
        await BlogDelete(post.id.toString());
        toast.success("🗑️ Blog deleted successfully!");
      } catch (error: any) {
        console.error(error);
        toast.error(error.message || "Failed to delete blog");
      }
    });
  };

  return (
    <>
      {/* ✅ Blog Card */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 relative group">
        {post.thumbnail ? (
          <div className="relative h-56 w-full overflow-hidden">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ) : (
          <div className="h-56 w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-300">
            No Image
          </div>
        )}

        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
            {post.title}
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
            {post.content}
          </p>

          <div className="flex justify-between items-center">
            <Link
              href={`/blogs/${post.id}`}
              className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline"
            >
              Read More →
            </Link>

            <div className="flex gap-3">
              {/* ✅ Edit Button */}
              <button
                onClick={() => setShowModal(true)}
                className="p-2 rounded-full bg-yellow-100 dark:bg-yellow-800 hover:bg-yellow-200 dark:hover:bg-yellow-700 transition"
                title="Edit Blog"
              >
                <Edit className="w-4 h-4 text-yellow-600 dark:text-yellow-300" />
              </button>

              {/* ✅ Delete Button */}
              <button
                onClick={handleDelete}
                disabled={isPending}
                className="p-2 rounded-full bg-red-100 dark:bg-red-800 hover:bg-red-200 dark:hover:bg-red-700 transition"
                title="Delete Blog"
              >
                {isPending ? (
                  <span className="text-xs text-gray-400">...</span>
                ) : (
                  <Trash2 className="w-4 h-4 text-red-600 dark:text-red-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Update Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="relative bg-white dark:bg-gray-900 w-[95%] md:w-[700px] max-h-[90vh] overflow-y-auto rounded-xl shadow-lg p-6">
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              <X className="w-5 h-5" />
            </button>

            <UpdateBlogForm post={post} onClose={() => setShowModal(false)} />
          </div>
        </div>
      )}
    </>
  );
}
