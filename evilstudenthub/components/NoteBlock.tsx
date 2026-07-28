import Link from "next/link";
import { FaFire } from "react-icons/fa";
import { HiArrowDownTray, HiStar, HiArrowRight } from "react-icons/hi2";

function NoteBlock({
  AccentColor,
  AccentTextColor,
  FileType,
  Subject,
  HeaderText,
  DescriptionText,
  StudentName,
  StudentAvatarUrl,
  AvatarColor = "#e8e0ff",
  NoteReleaseDate,
  DownloadCount,
  StarGrade,
  IsFeatured = false,
  Href = "#",
}: {
  AccentColor: string;
  AccentTextColor: string;
  FileType: string;
  Subject: string;
  HeaderText: string;
  DescriptionText: string;
  StudentName: string;
  StudentAvatarUrl?: string;
  AvatarColor?: string;
  NoteReleaseDate: string;
  DownloadCount: number;
  StarGrade: number;
  IsFeatured?: boolean;
  Href?: string;
}) {
  const initials = StudentName.split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

  return (
    <article
      className={`group relative flex min-h-[240px] flex-col gap-3 overflow-hidden rounded-2xl border border-black/5 bg-white py-5 pr-5 pl-6 transition hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(0,0,0,0.1)] ${
        IsFeatured ? "col-span-2 row-span-2" : ""
      }`}
      style={{ borderLeftWidth: 6, borderLeftColor: AccentColor }}
    >
      <div
        className="pointer-events-none absolute -top-[40%] -right-[30%] h-[180px] w-[180px] rounded-full opacity-0 blur-[40px] transition group-hover:opacity-55"
        style={{ backgroundColor: AccentColor }}
        aria-hidden
      />

      <div className="relative z-1 flex items-center justify-between gap-2">
        <span className="rounded-md bg-[#f3f3f3] px-2 py-0.5 text-[0.65rem] font-bold tracking-wide text-[#666] uppercase">
          {FileType}
        </span>
        <span
          className="rounded-full px-2.5 py-0.5 text-[0.68rem] font-semibold"
          style={{ backgroundColor: AccentColor, color: AccentTextColor }}
        >
          {Subject}
        </span>
      </div>

      {IsFeatured && (
        <span className="relative z-1 inline-flex w-fit items-center gap-1 rounded-full bg-[#111] px-2.5 py-1 text-[0.68rem] font-bold tracking-wide text-[#0ed72f] uppercase">
          <FaFire className="h-3 w-3" />
          Hot
        </span>
      )}

      <h2
        className={`relative z-1 m-0 font-bold tracking-tight text-neutral-900 ${
          IsFeatured ? "text-2xl leading-tight" : "text-[0.98rem] leading-snug"
        }`}
      >
        {HeaderText}
      </h2>

      <p
        className={`relative z-1 m-0 flex-1 overflow-hidden text-[#888] ${
          IsFeatured
            ? "text-[0.9rem] leading-relaxed [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:5]"
            : "text-[0.78rem] leading-relaxed [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]"
        }`}
      >
        {DescriptionText}
      </p>

      <div className="relative z-1 flex items-center gap-2.5">
        {StudentAvatarUrl ? (
          <img
            src={StudentAvatarUrl}
            alt=""
            className={`shrink-0 rounded-full object-cover ${IsFeatured ? "h-10 w-10" : "h-[34px] w-[34px]"}`}
          />
        ) : (
          <span
            className={`flex shrink-0 items-center justify-center rounded-full text-[0.68rem] font-bold text-neutral-700 ${
              IsFeatured ? "h-10 w-10 text-xs" : "h-[34px] w-[34px]"
            }`}
            style={{ backgroundColor: AvatarColor }}
          >
            {initials}
          </span>
        )}
        <div>
          <strong className="block text-[0.78rem] font-semibold text-neutral-900">
            {StudentName}
          </strong>
          <time className="text-[0.72rem] text-neutral-400">{NoteReleaseDate}</time>
        </div>
      </div>

      <div className="relative z-1 mt-auto flex items-center gap-3 border-t border-[#f3f3f3] pt-2.5 text-[0.72rem] text-neutral-400">
        <span className="inline-flex items-center gap-1">
          <HiArrowDownTray className="h-3.5 w-3.5 text-neutral-300" />
          {DownloadCount}
        </span>
        <span className="inline-flex items-center gap-1">
          <HiStar className="h-3.5 w-3.5 text-[#f2d94d]" />
          {StarGrade.toFixed(1)}
        </span>
        <Link
          href={Href}
          className="ml-auto inline-flex items-center gap-1 rounded-full bg-[#0ed72f] px-3 py-1.5 text-[0.72rem] font-semibold text-black transition hover:gap-1.5 hover:bg-[#0bc428]"
        >
          Open
          <HiArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}

export default NoteBlock;
