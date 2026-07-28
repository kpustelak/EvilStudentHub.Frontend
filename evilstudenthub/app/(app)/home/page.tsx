import { CiCalendar } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import SearchBar from "@/components/SearchBar";
import BannerButton from "@/components/BannerButton";
import BannerCard from "@/components/BannerCard";
import {IoPersonSharp} from "react-icons/io5";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <div className="h-full w-full bg-[#eceef1] py-6">
      <div className="mx-8 rounded-3xl bg-black px-8 py-5">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-8">
          <div className="flex flex-col gap-0.5">
            <p className="whitespace-nowrap text-xl font-bold tracking-tight text-white">
              <span className="italic text-[#0ed72f]">Evil</span>
              StudentHub
            </p>
            <p className="whitespace-nowrap text-xs font-medium tracking-wide text-white/70">
              Your underground study network
            </p>
          </div>

          <SearchBar PlaceHolderText="Search here" />

          <div className="flex items-center gap-2">
            <BannerButton Label="Calendar" Icon={CiCalendar} />
            <BannerButton Label="Notifications" Icon={IoIosNotificationsOutline} />
            <BannerButton Label="Profile" Text="KP" ClassName="bg-white hover:bg-white/90" />
          </div>
        </div>
          
        <div className="mt-6 flex space-x-3 pt-25">
            <BannerCard
                Title={"Notes"}
                NumberToShow={"2,635"}
                StatThisMonth={"+128 this week"}
                BackgroundColor={"bg-[#e8e0ff]"}
            />
            <BannerCard
                Title={"Classes"}
                NumberToShow={"29"}
                StatThisMonth={"+3 this month"}
                BackgroundColor={"bg-[#d8f5de]"}
            />
            <BannerCard
                Title={"Members"}
                NumberToShow={"60"}
                StatThisMonth={"+7 new"}
                BackgroundColor={"bg-[#d6eaff]"}
            />
        </div>
      </div>
        <Marquee />
    </div>
  );
}
