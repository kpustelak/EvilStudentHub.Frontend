"use client";

import { IoHomeOutline } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import { usePathname } from "next/navigation";
import NavButton from "@/components/NavButton";

export default function SideBar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 z-10 flex h-screen w-20 shrink-0 flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <NavButton
          icon={IoHomeOutline}
          isActive={pathname.startsWith("/home")}
          href="/home"
        />
        <NavButton
          icon={CgNotes}
          isActive={pathname.startsWith("/notes")}
          href="/notes"
        />
      </div>
    </aside>
  );
}
