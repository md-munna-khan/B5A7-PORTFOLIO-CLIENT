
// import CreateBlogForm from "@/components/modules/Blog/CreateBlogform";
// import React from "react";

// const ManageBlog = () => {
//   return (
//     <div className="w-full flex justify-center items-center">
//       <h1>Create a blog</h1>
//    <CreateBlogForm/>
//     </div>
//   );
// };

// export default ManageBlog;

"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreateBlogForm from "@/components/modules/Blog/CreateBlogform";
import { PenSquare } from "lucide-react";

export default function CreateBlog() {
  const [open, setOpen] = useState(false);

  // ✅ Auto close modal when blog is created successfully
  useEffect(() => {
    const handleClose = () => setOpen(false);
    window.addEventListener("close-blog-modal", handleClose);
    return () => window.removeEventListener("close-blog-modal", handleClose);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
        ✍️ Create Your Blog
      </h1>

      {/* Create Blog Button */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            size="lg"
            className="flex items-center gap-2 px-6 py-3 rounded-full text-lg font-medium shadow-md"
          >
            <PenSquare className="w-5 h-5" />
            Create Blog
          </Button>
        </DialogTrigger>

        {/* Modal Content */}
        <DialogContent className="sm:max-w-[600px] w-[90%] max-h-[90vh] overflow-y-auto rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-semibold">
              Create a New Blog
            </DialogTitle>
          </DialogHeader>

          <CreateBlogForm />
        </DialogContent>
      </Dialog>
    </div>
  );
}






// "use client";

// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Home, PlusCircle, LogOut } from "lucide-react";
// import { signOut, useSession } from "next-auth/react";
// import { useState, useEffect } from "react";

// // Shadcn Dialog components
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import CreateBlogForm from "@/components/modules/Blog/CreateBlogform";



// export default function Sidebar() {
//   const session = useSession();
//   const [open, setOpen] = useState(false);

//   // ✅ Auto close modal when blog is created
//   useEffect(() => {
//     const handleClose = () => setOpen(false);
//     window.addEventListener("close-blog-modal", handleClose);
//     return () => window.removeEventListener("close-blog-modal", handleClose);
//   }, []);

//   return (
//     <aside className="flex flex-col border-2 rounded-2xl md:w-64 w-full md:h-screen h-auto bg-white dark:bg-gray-900 shadow-md">
//       {/* Top Navigation */}
//       <nav className="flex-1 space-y-2 p-4">
//         {/* 🏠 Home Link */}
//         <Link
//           href="/"
//           className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white transition"
//         >
//           <Home className="h-4 w-4" />
//           Home
//         </Link>

//         {/* ✍️ Create Blog Button with Modal */}
//         <Dialog open={open} onOpenChange={setOpen}>
//           <DialogTrigger asChild>
//             <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white w-full text-left transition">
//               <PlusCircle className="h-4 w-4" />
//               Create Blog
//             </button>
//           </DialogTrigger>

//           {/* Modal Content */}
//           <DialogContent className="sm:max-w-[600px] w-[90%] max-h-[90vh] overflow-y-auto rounded-xl">
//             <DialogHeader>
//               <DialogTitle className="text-center text-xl font-semibold">
//                 Create a New Blog
//               </DialogTitle>
//             </DialogHeader>

//             {/* ✅ Blog Form Inside Modal */}
//             <CreateBlogForm />
//           </DialogContent>
//         </Dialog>
//       </nav>

//       {/* Bottom Section */}
//       <div className="p-4 border-t border-gray-200 dark:border-gray-700">
//         {session.status === "authenticated" && (
//           <Button
//             variant="destructive"
//             className="w-full justify-start gap-2 cursor-pointer"
//             onClick={() => signOut()}
//           >
//             <LogOut className="h-4 w-4" />
//             Logout
//           </Button>
//         )}
//       </div>
//     </aside>
//   );
// }
