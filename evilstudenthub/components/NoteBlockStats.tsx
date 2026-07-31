import Link from "next/link";
import { HiArrowDownTray, HiStar, HiArrowRight } from "react-icons/hi2";

export default function NoteBlockStats({
  downloadCount,
  starGrade,
  href,
}: {
  downloadCount: number;
  starGrade: number;
  href: string;
}) {
  return (
    <div className="relative z-1 mt-auto flex items-center gap-3 border-t border-surface-chip pt-2.5 text-tiny text-neutral-400">
      <span className="inline-flex items-center gap-1">
        <HiArrowDownTray className="size-3.5 text-neutral-300" />
        {downloadCount}
      </span>
      <span className="inline-flex items-center gap-1">
        <HiStar className="size-3.5 text-star" />
        {starGrade.toFixed(1)}
      </span>
      <Link
        href={href}
        className="ml-auto inline-flex items-center gap-1 rounded-full bg-brand px-3 py-1.5 text-tiny font-semibold text-black transition hover:gap-1.5 hover:bg-brand-hover"
      >
        Open
        <HiArrowRight className="size-3.5" />
      </Link>
    </div>
  );
}
