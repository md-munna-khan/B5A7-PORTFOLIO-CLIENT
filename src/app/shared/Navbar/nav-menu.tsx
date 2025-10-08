

"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const NavMenu = (props: NavigationMenuProps) => {
  const pathname = usePathname(); 

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/about", label: "About" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="gap-4 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start font-medium">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <NavigationMenuItem key={link.href}>
              <NavigationMenuLink asChild>
                <Link
                  href={link.href}
                  className="relative px-1 py-1"
                >
                  {link.label}
                  {/* underline */}
                  <span
                    className={cn(
                      "absolute left-0 -bottom-0.5 h-[2px] bg-primary origin-left transition-transform duration-500 ease-out",
                      isActive ? "scale-x-100" : "scale-x-0"
                    )}
                    style={{ width: "100%" }}
                  />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
