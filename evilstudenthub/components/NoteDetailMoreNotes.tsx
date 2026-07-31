import Link from "next/link";
import { HiChevronRight } from "react-icons/hi2";
import type { Note } from "@/types/note";

export default function NoteDetailMoreNotes({
  notes,
  currentId,
}: {
  notes: Note[];
  currentId: string;
}) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-[var(--shadow-card)]">
      <h2 className="mb-4 text-base font-bold text-neutral-900">More notes</h2>

      <div className="flex flex-col">
        {notes
          .filter((note) => note.id !== currentId)
          .slice(0, 3)
          .map((note) => (
            <Link
              key={note.id}
              href={`/notes/${note.id}`}
              className="group flex items-center gap-3 border-b border-neutral-100 py-3 last:border-b-0"
            >
              <span
                className="flex size-11 shrink-0 items-center justify-center rounded-xl text-micro font-bold text-neutral-700"
                style={{ backgroundColor: note.accentColor }}
              >
                {note.fileType}
              </span>
              <div className="min-w-0 flex-1">
                <p className="m-0 truncate text-sm font-semibold text-neutral-900">
                  {note.headerText}
                </p>
                <p className="m-0 truncate text-xs text-neutral-400">
                  {note.subject} · {note.studentName}
                </p>
              </div>
              <HiChevronRight className="size-4 shrink-0 text-neutral-300 transition group-hover:text-neutral-500" />
            </Link>
          ))}
      </div>
    </div>
  );
}
