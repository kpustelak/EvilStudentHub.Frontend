import { FaFlag } from "react-icons/fa6";
import { HiArrowDownTray } from "react-icons/hi2";
import { HiOutlineBookmark } from "react-icons/hi";
import Button from "@/components/Button";
import type { Note } from "@/types/note";

export default function NoteDetailFileCard({ note }: { note: Note }) {
  const rows = [
    { label: "Type", value: note.fileType },
    { label: "Subject", value: note.subject },
    { label: "Uploaded", value: note.noteReleaseDate },
    { label: "Downloads", value: String(note.downloadCount) },
    { label: "Rating", value: note.starGrade.toFixed(1) },
  ];

  return (
    <div className="rounded-3xl bg-white p-6 shadow-[var(--shadow-card)]">
      <h2 className="mb-4 text-base font-bold text-neutral-900">File</h2>

      <div className="divide-y divide-neutral-100">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between py-3 text-sm"
          >
            <span className="text-neutral-400">{row.label}</span>
            <span className="font-semibold text-neutral-900">{row.value}</span>
          </div>
        ))}
      </div>

      <Button type="primary">
        <HiArrowDownTray className="size-4" />
        Download
      </Button>

      <div className="mt-3 grid grid-cols-2 gap-3">
        <Button type="secondary">
          <HiOutlineBookmark className="size-4" />
          Save
        </Button>
        <Button type="secondary">
          <FaFlag className="size-3.5" />
          Report
        </Button>
      </div>
    </div>
  );
}
