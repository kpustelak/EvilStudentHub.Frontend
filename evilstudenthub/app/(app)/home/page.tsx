import SearchBar from "@/components/SearchBar";
import Header from "@/components/Header";
import HomeToolbarActions from "@/components/HomeToolbarActions";
import HomeStats from "@/components/HomeStats";

export default function Home() {
  return (
    <div className="h-full w-full bg-[#eceef1] py-6">
      <Header
        type="toolbar"
        title={
          <>
            <span className="italic text-[#0ed72f]">Evil</span>
            StudentHub
          </>
        }
        description="Your underground study network"
        middle={<SearchBar placeholderText="Search here" maxWidth={400} />}
        marqueePlacement="outside"
        footer={<HomeStats />}
      >
        <HomeToolbarActions />
      </Header>
    </div>
  );
}
