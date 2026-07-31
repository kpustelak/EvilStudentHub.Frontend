import { GoInfo } from "react-icons/go";
import { HiDocumentText } from "react-icons/hi2";
import type { Note } from "@/types/note";

export default function NoteDetailPreview({ note }: { note: Note }) {
  return (
    <div className="w-full rounded-3xl bg-white p-6 shadow-[var(--shadow-card)] lg:w-3/5">
      <div className="relative flex min-h-55 flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-surface-muted bg-[repeating-linear-gradient(-45deg,transparent,transparent_8px,rgba(0,0,0,0.035)_8px,rgba(0,0,0,0.035)_16px)] px-6 py-10">
        <span className="absolute top-3 left-3 rounded-md bg-black px-2 py-0.5 text-micro font-bold tracking-wide text-brand uppercase">
          {note.fileType}
        </span>
        <HiDocumentText className="mb-2 size-10 text-neutral-300" />
        <p className="m-0 text-center text-sm text-neutral-400">
          Preview not available yet — this is a demo note.
        </p>
      </div>

      <h2 className="mt-5 text-base font-bold text-neutral-900">
        About this note
      </h2>
      <p className="mt-2 mb-4 text-sm leading-relaxed text-neutral-500">
        {note.descriptionText}
      </p>

      <div className="flex items-center gap-2 rounded-xl bg-accent-info px-4 py-3 text-sm text-accent-info-text">
        <GoInfo className="size-4 shrink-0" />
        <p className="m-0">
          Grab it, study it, ace it. Don&apos;t forget to leave a rating.
        </p>
      </div>
    </div>
  );
}
