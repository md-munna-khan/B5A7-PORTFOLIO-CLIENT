"use client";

import Link from "next/link";

import { Home, PlusCircle } from "lucide-react";
import {  useSession } from "next-auth/react";

export default function Sidebar() {
  const session = useSession();
 
  return (
    <aside className="flex h-screen w-64 rounded-2xl flex-col border-2 ">
      {/* Top navigation */}
      <nav className="flex-1 space-y-2 p-4">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black"
        >
          <Home className="h-4 w-4" />
          Home
        </Link>

        <Link
          href="/dashboard/manage-blog"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black"
        >
          <PlusCircle className="h-4 w-4" />
          Manage Blog
        </Link>
        <Link
          href="/dashboard/manage-project"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black"
        >
          <PlusCircle className="h-4 w-4" />
          Manage Project
        </Link>
      </nav>

     
    </aside>
  );
}

