import { IoHomeOutline } from "react-icons/io5";
import NavButton from "@/components/NavButton";

export default function SideBar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="flex min-h-screen">
        <div className="flex flex-col items-center justify-center">
          <NavButton Icon={IoHomeOutline} isActive={true} PageLink="/home" />
          <NavButton Icon={IoHomeOutline} isActive={false} PageLink="/home" />
          <NavButton Icon={IoHomeOutline} isActive={true} PageLink="/home" />
        </div>
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
}
