"use client";

import { IoPersonSharp } from "react-icons/io5";
import { FaFire, FaBolt } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";

type MarqueeItem = {
    icon: React.ReactNode;
    text: string;
};

const items: MarqueeItem[] = [
    { icon: <IoPersonSharp />, text: "7 NEW MEMBERS JOINED THE HUB" },
    { icon: <FaBolt />, text: "SUCCESS RATE UP TO 78%" },
    { icon: <FaFire />, text: "128 FRESH NOTES DROPPED THIS WEEK" },
    { icon: <FaBolt />, text: "FINALS SEASON IS COMING" },
    { icon: <HiUserGroup />, text: "7 NEW MEMBERS JOINED THE HUB" },
];

export default function Marquee() {
    return (
        <div className="bg-black h-12 mx-8 rounded-xl mt-8 overflow-hidden flex items-center w-[92vw]">
            <div className="flex animate-marquee whitespace-nowrap">
                {[...items, ...items].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 mx-4">
            <span className="text-[#0ed72f] flex items-center gap-2 text-sm font-semibold tracking-wide">
              {item.icon}
                {item.text}
            </span>
                        <span className="text-[#0ed72f] opacity-40 ml-4">/</span>
                    </div>
                ))}
            </div>
        </div>
    );
}