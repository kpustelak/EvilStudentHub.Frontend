import { HiArrowUpRight } from "react-icons/hi2";
import { TfiStatsUp } from "react-icons/tfi";

function BannerCard({
  Title,
  NumberToShow,
  StatThisMonth,
  BackgroundColor,
}: {
  Title: string;
  NumberToShow: string | number;
  StatThisMonth: string;
  BackgroundColor: string;
}) {
  return (
    <div
      className={`group relative min-w-[148px] overflow-hidden rounded-[22px] px-5 py-4 shadow-[0_10px_32px_rgba(0,0,0,0.07)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)] ${BackgroundColor}`}
    >
      <div className="mb-2 flex items-center justify-between text-sm font-medium text-neutral-600">
        <span>{Title}</span>
        <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-white/55 text-neutral-700 transition group-hover:rotate-45 group-hover:bg-white/85">
          <HiArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>

      <div className="flex items-end gap-2">
        <strong className="text-[1.65rem] leading-none font-bold tracking-tight text-neutral-900">
          {NumberToShow}
        </strong>
        <span className="inline-flex items-center gap-1 whitespace-nowrap text-[0.66rem] font-semibold text-[#4b7a52]">
          <TfiStatsUp className="h-3 w-3 shrink-0" />
          {StatThisMonth}
        </span>
      </div>
    </div>
  );
}

export default BannerCard;
