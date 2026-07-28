import { IoHomeOutline } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import NavButton from "@/components/NavButton";

export default function SideBar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="sticky top-0 z-10 flex h-screen w-20 shrink-0 flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <NavButton Icon={IoHomeOutline} isActive={true} PageLink="/home" />
          <NavButton Icon={CgNotes} isActive={false} PageLink="/notes" />
          <NavButton Icon={IoHomeOutline} isActive={true} PageLink="/home" />
        </div>
      </aside>
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  );
}
