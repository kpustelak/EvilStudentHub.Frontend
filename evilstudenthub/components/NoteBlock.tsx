import { FaFire } from "react-icons/fa";
import NoteBlockAuthor from "@/components/NoteBlockAuthor";
import NoteBlockStats from "@/components/NoteBlockStats";
import type { Note } from "@/types/note";

type NoteBlockProps = Omit<Note, "id"> & {
  href?: string;
};

export default function NoteBlock({
  accentColor,
  accentTextColor,
  fileType,
  subject,
  headerText,
  descriptionText,
  studentName,
  studentAvatarUrl,
  avatarColor = "#e8e0ff",
  noteReleaseDate,
  downloadCount,
  starGrade,
  isFeatured = false,
  href = "#",
}: NoteBlockProps) {
  return (
    <article
      className={`group relative flex min-h-60 flex-col gap-3 overflow-hidden rounded-2xl border border-black/5 bg-white py-5 pr-5 pl-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] ${
        isFeatured ? "col-span-2 row-span-2" : ""
      }`}
      style={{ borderLeftWidth: 6, borderLeftColor: accentColor }}
    >
      <div
        className="pointer-events-none absolute -top-2/5 -right-3/10 size-45 rounded-full opacity-0 blur-10 transition group-hover:opacity-55"
        style={{ backgroundColor: accentColor }}
        aria-hidden
      />

      <div className="relative z-1 flex items-center justify-between gap-2">
        <span className="rounded-md bg-surface-chip px-2 py-0.5 text-micro font-bold tracking-wide text-[#666] uppercase">
          {fileType}
        </span>
        <span
          className="rounded-full px-2.5 py-0.5 text-caption font-semibold"
          style={{ backgroundColor: accentColor, color: accentTextColor }}
        >
          {subject}
        </span>
      </div>

      {isFeatured && (
        <span className="relative z-1 inline-flex w-fit items-center gap-1 rounded-full bg-[#111] px-2.5 py-1 text-caption font-bold tracking-wide text-brand uppercase">
          <FaFire className="size-3" />
          Hot
        </span>
      )}

      <h2
        className={`relative z-1 m-0 font-bold tracking-tight text-neutral-900 ${
          isFeatured ? "text-2xl leading-tight" : "text-[0.98rem] leading-snug"
        }`}
      >
        {headerText}
      </h2>

      <p
        className={`relative z-1 m-0 flex-1 overflow-hidden text-[#888] ${
          isFeatured
            ? "text-[0.9rem] leading-relaxed [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:5]"
            : "text-label leading-relaxed [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]"
        }`}
      >
        {descriptionText}
      </p>

      <NoteBlockAuthor
        studentName={studentName}
        studentAvatarUrl={studentAvatarUrl}
        avatarColor={avatarColor}
        noteReleaseDate={noteReleaseDate}
        isFeatured={isFeatured}
      />

      <NoteBlockStats
        downloadCount={downloadCount}
        starGrade={starGrade}
        href={href}
      />
    </article>
  );
}
