import SearchBar from "@/components/SearchBar";
import BannerButton from "@/components/BannerButton";
import {CiCalendar} from "react-icons/ci";
import {IoIosNotificationsOutline} from "react-icons/io";
import BannerCard from "@/components/BannerCard";
import Marquee from "@/components/Marquee";

export default function Notes(){
    return(
        <div className="h-full w-full bg-[#eceef1] py-6">
            <div className="mx-8 rounded-3xl bg-black px-8 py-5">
                <div className="grid grid-cols-[auto_1fr_auto] items-center gap-8">
                    <div className="flex flex-col gap-0.5">
                        <p>SHARED LIBRARY</p>
                        <p>NOTES</p>
                        <div>
                            <p>Steal the good notes before finals do.</p>
                            <Marquee />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}