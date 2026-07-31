import { IoPersonSharp } from "react-icons/io5";
import { FaFire, FaBolt } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import type { IconType } from "react-icons";

type MarqueeItem = {
  icon: IconType;
  text: string;
};

const items: MarqueeItem[] = [
  { icon: IoPersonSharp, text: "7 NEW MEMBERS JOINED THE HUB" },
  { icon: FaBolt, text: "SUCCESS RATE UP TO 78%" },
  { icon: FaFire, text: "128 FRESH NOTES DROPPED THIS WEEK" },
  { icon: FaBolt, text: "FINALS SEASON IS COMING" },
  { icon: HiUserGroup, text: "7 NEW MEMBERS JOINED THE HUB" },
];

function Track() {
  return (
    <>
      {items.map(({ icon: Icon, text }, i) => (
        <span
          key={i}
          className="flex items-center gap-2 px-6 text-sm leading-none font-semibold tracking-wide text-brand"
        >
          <Icon className="size-3.5 shrink-0" />
          {text}
          <span className="pl-6 opacity-40">/</span>
        </span>
      ))}
    </>
  );
}

export default function Marquee({
  className = "mx-8 mt-8 flex h-12 items-center overflow-hidden rounded-xl bg-black",
}: {
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex w-max animate-marquee items-center whitespace-nowrap hover:[animation-play-state:paused]">
        <Track />
        <Track />
      </div>
    </div>
  );
}
