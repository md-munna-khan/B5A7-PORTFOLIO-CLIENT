"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavMenu } from "./nav-menu";
import { Logo } from "./logo";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { usePathname } from "next/navigation";

export const NavigationSheet = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();


  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* ✅ Trigger button (hamburger icon) */}
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>

      {/* ✅ Drawer content */}
      <SheetContent className="p-0 flex flex-col items-center">
        {/* Hidden title for accessibility */}
        <VisuallyHidden>
          <h2>Navigation Menu</h2>
        </VisuallyHidden>

        {/* Drawer inner content */}
        <div className="w-full flex flex-col items-center gap-4 py-6">
          <Logo />
          {/* Pass a prop to NavMenu to handle link click (for manual close if needed) */}
          <NavMenu
            orientation="vertical"
            className="mt-0"
            onClick={() => setOpen(false)}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};
