import { HiArrowUpRight } from "react-icons/hi2";
import { TfiStatsUp } from "react-icons/tfi";

export default function BannerCard({
  title,
  numberToShow,
  statThisMonth,
  backgroundColor,
}: {
  title: string;
  numberToShow: string | number;
  statThisMonth: string;
  backgroundColor: string;
}) {
  return (
    <div
      className={`group relative min-w-37 overflow-hidden rounded-[length:var(--radius-card)] px-5 py-4 shadow-[var(--shadow-banner)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-banner-hover)] ${backgroundColor}`}
    >
      <div className="mb-2 flex items-center justify-between text-sm font-medium text-neutral-600">
        <span>{title}</span>
        <span className="flex size-6.5 items-center justify-center rounded-full bg-white/55 text-neutral-700 transition group-hover:rotate-45 group-hover:bg-white/85">
          <HiArrowUpRight className="size-3.5" />
        </span>
      </div>

      <div className="flex items-end gap-2">
        <strong className="text-[1.65rem] leading-none font-bold tracking-tight text-neutral-900">
          {numberToShow}
        </strong>
        <span className="inline-flex items-center gap-1 whitespace-nowrap text-tiny font-semibold text-[#4b7a52]">
          <TfiStatsUp className="size-3 shrink-0" />
          {statThisMonth}
        </span>
      </div>
    </div>
  );
}
