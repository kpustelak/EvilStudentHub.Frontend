import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { HiArrowDownTray, HiStar } from "react-icons/hi2";
import type { Note } from "@/types/note";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default function NoteDetailHero({ note }: { note: Note }) {
  return (
    <div className="mx-8 overflow-hidden rounded-3xl bg-black">
      <div className="flex min-h-70 flex-col justify-between gap-8 px-8 pt-8 pb-7">
        <div className="min-w-0">
          <Link
            href="/notes"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            <FaArrowLeftLong />
            Back to notes
          </Link>

          <div className="mt-5 mb-3 flex items-center gap-2">
            <span className="rounded-md bg-white px-2 py-0.5 text-micro font-bold tracking-wide text-black uppercase">
              {note.fileType}
            </span>
            <span
              className="rounded-full px-2.5 py-0.5 text-caption font-semibold"
              style={{
                backgroundColor: note.accentColor,
                color: note.accentTextColor,
              }}
            >
              {note.subject}
            </span>
          </div>

          <h1 className="text-[clamp(1.75rem,4.5vw,2.85rem)] leading-tight font-extrabold tracking-tight text-white">
            {note.headerText}
          </h1>
        </div>

        <div className="flex items-end justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span
              className="flex size-10 shrink-0 items-center justify-center rounded-full text-xs font-bold text-neutral-700"
              style={{ backgroundColor: note.avatarColor }}
            >
              {initials(note.studentName)}
            </span>
            <div>
              <strong className="block text-label font-semibold text-white">
                {note.studentName}
              </strong>
              <time className="text-tiny text-white/55">
                {note.noteReleaseDate}
              </time>
            </div>
          </div>

          <div className="flex items-center gap-3 text-tiny text-white/55">
            <span className="inline-flex items-center gap-1">
              <HiArrowDownTray className="size-3.5 text-white/40" />
              {note.downloadCount}
            </span>
            <span className="inline-flex items-center gap-1">
              <HiStar className="size-3.5 text-star" />
              {note.starGrade.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
