"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, PlusCircle, Menu, X } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false); 
  }, [pathname]);

  return (
    <>
      {/* ✅ Mobile toggle button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 rounded-md border border-[var(--sidebar-border)] bg-[var(--sidebar-bg)] text-[var(--sidebar-text)] md:hidden shadow"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6  " /> : <Menu className="h-6 w-6" />}
      </button>

      {/* ✅ Sidebar */}
      <aside
        className={`fixed pt-8 top-0 left-0  w-64 border-r border-[var(--sidebar-border)] rounded-r-2xl shadow-lg transform transition-transform duration-300 z-40
        bg-[var(--sidebar-bg)] text-[var(--sidebar-text)]
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:relative md:shadow-none md:border-2`}
      >
        <nav className="flex-1 space-y-2 p-4">
          <Link
            href="/"
            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-[var(--sidebar-hover)] ${
              pathname === "/"
                ? "bg-[var(--sidebar-active)] text-black dark:text-white"
                : ""
            }`}
          >
            <Home className="h-4 w-4" />
            Home
          </Link>

          <Link
            href="/dashboard/manage-blog"
            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-[var(--sidebar-hover)] ${
              pathname === "/dashboard/manage-blog"
                ? "bg-[var(--sidebar-active)] text-black dark:text-white"
                : ""
            }`}
          >
            <PlusCircle className="h-4 w-4" />
            Manage Blog
          </Link>

          <Link
            href="/dashboard/manage-project"
            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-[var(--sidebar-hover)] ${
              pathname === "/dashboard/manage-project"
                ? "bg-[var(--sidebar-active)] text-black dark:text-white"
                : ""
            }`}
          >
            <PlusCircle className="h-4 w-4" />
            Manage Project
          </Link>
        </nav>
      </aside>

      {/* ✅ Overlay (when sidebar open on mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
