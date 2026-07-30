import Link from "next/link";
import { FaArrowLeftLong, FaFlag } from "react-icons/fa6";
import {
  HiArrowDownTray,
  HiChevronRight,
  HiDocumentText,
  HiStar,
} from "react-icons/hi2";
import { GoInfo } from "react-icons/go";
import { HiOutlineBookmark } from "react-icons/hi";

type Props = {
  params: Promise<{ id: string }>;
};

const moreNotes = [
  {
    id: "calculus-ii",
    title: "Calculus II — Midterm Summary",
    subject: "Math",
    author: "Alex John",
    fileType: "PDF",
    badgeColor: "#e8e0ff",
  },
  {
    id: "thermodynamics",
    title: "Thermodynamics Cheat Sheet",
    subject: "Physics",
    author: "Maya Chen",
    fileType: "PDF",
    badgeColor: "#d8f5de",
  },
  {
    id: "algorithms",
    title: "Algorithms — Sorting Notes",
    subject: "CS",
    author: "Omar Ali",
    fileType: "DOCX",
    badgeColor: "#d6eaff",
  },
];

const fileRows = [
  { label: "Type", value: "PDF" },
  { label: "Subject", value: "Math" },
  { label: "Uploaded", value: "10 Jun 2025" },
  { label: "Downloads", value: "192" },
  { label: "Rating", value: "4.6" },
];

export default async function NotePage({ params }: Props) {
  const { id } = await params;

  return (
    <div className="h-full w-full bg-[#eceef1] py-6">
      <div className="mx-8 overflow-hidden rounded-3xl bg-black">
        <div className="flex min-h-[280px] flex-col justify-between gap-8 px-8 pt-8 pb-7">
          <div className="min-w-0">
            <Link
              href="/notes"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              <FaArrowLeftLong />
              Back to notes
            </Link>

            <div className="mt-5 mb-3 flex items-center gap-2">
              <span className="rounded-md bg-white px-2 py-0.5 text-[0.65rem] font-bold tracking-wide text-black uppercase">
                PDF
              </span>
              <span
                className="rounded-full px-2.5 py-0.5 text-[0.68rem] font-semibold"
                style={{ backgroundColor: "#e8e0ff", color: "#5b21b6" }}
              >
                Math
              </span>
            </div>

            <h1 className="text-[clamp(1.75rem,4.5vw,2.85rem)] leading-tight font-extrabold tracking-tight text-white">
              Linear algebra - Advanced Lorem Ipsumism
            </h1>
          </div>

          <div className="flex items-end justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold text-neutral-700"
                style={{ backgroundColor: "#fffdd0" }}
              >
                LI
              </span>
              <div>
                <strong className="block text-[0.78rem] font-semibold text-white">
                  Krzysztof Ipsum
                </strong>
                <time className="text-[0.72rem] text-white/55">22.03.2026</time>
              </div>
            </div>

            <div className="flex items-center gap-3 text-[0.72rem] text-white/55">
              <span className="inline-flex items-center gap-1">
                <HiArrowDownTray className="h-3.5 w-3.5 text-white/40" />
                288
              </span>
              <span className="inline-flex items-center gap-1">
                <HiStar className="h-3.5 w-3.5 text-[#f2d94d]" />
                5
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-8 mt-8 flex flex-col gap-6 lg:flex-row lg:items-start">
        <div className="w-full rounded-3xl bg-white p-6 shadow-[0_8px_28px_rgba(0,0,0,0.06)] lg:w-3/5">
          <div
            className="relative flex min-h-[220px] flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-300 px-6 py-10"
            style={{
              backgroundColor: "#f7f7f7",
              backgroundImage:
                "repeating-linear-gradient(-45deg, transparent, transparent 8px, rgba(0,0,0,0.035) 8px, rgba(0,0,0,0.035) 16px)",
            }}
          >
            <span className="absolute top-3 left-3 rounded-md bg-black px-2 py-0.5 text-[0.65rem] font-bold tracking-wide text-[#0ed72f] uppercase">
              PDF
            </span>
            <HiDocumentText className="mb-2 h-10 w-10 text-neutral-300" />
            <p className="m-0 text-center text-sm text-neutral-400">
              Preview not available yet — this is a demo note.
            </p>
          </div>

          <h2 className="mt-5 text-base font-bold text-neutral-900">
            About this note
          </h2>
          <p className="mt-2 mb-4 text-sm leading-relaxed text-neutral-500">
            Quick reference for diagonalization, determinants and vector spaces.
          </p>

          <div className="flex items-center gap-2 rounded-xl bg-[#e8f6ec] px-4 py-3 text-sm text-[#1f6b3a]">
            <GoInfo className="h-4 w-4 shrink-0" />
            <p className="m-0">
              Grab it, study it, ace it. Don&apos;t forget to leave a rating.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-6 lg:w-2/5">
          <div className="rounded-3xl bg-white p-6 shadow-[0_8px_28px_rgba(0,0,0,0.06)]">
            <h2 className="mb-4 text-base font-bold text-neutral-900">File</h2>

            <div className="divide-y divide-neutral-100">
              {fileRows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between py-3 text-sm"
                >
                  <span className="text-neutral-400">{row.label}</span>
                  <span className="font-semibold text-neutral-900">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-black px-4 py-3 text-sm font-bold tracking-wide text-white uppercase transition hover:bg-neutral-800"
            >
              <HiArrowDownTray className="h-4 w-4" />
              Download
            </button>

            <div className="mt-3 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium text-neutral-600 transition hover:bg-neutral-50"
              >
                <HiOutlineBookmark className="h-4 w-4" />
                Save
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium text-neutral-600 transition hover:bg-neutral-50"
              >
                <FaFlag className="h-3.5 w-3.5" />
                Report
              </button>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-[0_8px_28px_rgba(0,0,0,0.06)]">
            <h2 className="mb-4 text-base font-bold text-neutral-900">
              More notes
            </h2>

            <div className="flex flex-col">
              {moreNotes
                .filter((note) => note.id !== id)
                .map((note) => (
                  <Link
                    key={note.id}
                    href={`/notes/${note.id}`}
                    className="group flex items-center gap-3 border-b border-neutral-100 py-3 last:border-b-0"
                  >
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[0.65rem] font-bold text-neutral-700"
                      style={{ backgroundColor: note.badgeColor }}
                    >
                      {note.fileType}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="m-0 truncate text-sm font-semibold text-neutral-900">
                        {note.title}
                      </p>
                      <p className="m-0 truncate text-xs text-neutral-400">
                        {note.subject} · {note.author}
                      </p>
                    </div>
                    <HiChevronRight className="h-4 w-4 shrink-0 text-neutral-300 transition group-hover:text-neutral-500" />
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
