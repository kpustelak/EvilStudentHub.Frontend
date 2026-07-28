"use client";

import { IoPersonSharp } from "react-icons/io5";
import { FaFire, FaBolt } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import type { IconType } from "react-icons";

type MarqueeItem = {
  Icon: IconType;
  Text: string;
};

const items: MarqueeItem[] = [
  { Icon: IoPersonSharp, Text: "7 NEW MEMBERS JOINED THE HUB" },
  { Icon: FaBolt, Text: "SUCCESS RATE UP TO 78%" },
  { Icon: FaFire, Text: "128 FRESH NOTES DROPPED THIS WEEK" },
  { Icon: FaBolt, Text: "FINALS SEASON IS COMING" },
  { Icon: HiUserGroup, Text: "7 NEW MEMBERS JOINED THE HUB" },
];

function Track() {
  return (
    <>
      {items.map(({ Icon, Text }, i) => (
        <span
          key={i}
          className="flex items-center gap-2 px-6 text-sm leading-none font-semibold tracking-wide text-[#0ed72f]"
        >
          <Icon className="h-3.5 w-3.5 shrink-0" />
          {Text}
          <span className="pl-6 opacity-40">/</span>
        </span>
      ))}
    </>
  );
}

export default function Marquee({
  ClassNameForMarquee = "mx-8 mt-8 flex h-12 items-center overflow-hidden rounded-xl bg-black",
}: {
  ClassNameForMarquee?: string;
}) {
  return (
    <div className={ClassNameForMarquee}>
      <div className="flex w-max animate-marquee items-center whitespace-nowrap hover:[animation-play-state:paused]">
        <Track />
        <Track />
      </div>
    </div>
  );
}
