import SideBar from "@/components/SideBar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <SideBar />
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  );
}
