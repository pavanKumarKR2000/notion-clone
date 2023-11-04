"use client";

import useScrollTop from "@/hooks/useScrollTop";
import { cn } from "@/lib/utils";
import React from "react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

const Navbar = () => {
  const scrolled = useScrollTop();

  return (
    <nav
      className={cn(
        "z-50 bg-background dark:bg-[#1f1f1f] fixed  top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="flex items-center md:ml-auto md:justify-end justify-between w-full gap-x-2">
        <Button variant="ghost">Log in</Button>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
