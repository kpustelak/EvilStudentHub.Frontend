import SearchBar from "@/components/SearchBar";
import { GiAerialSignal } from "react-icons/gi";
import { HiOutlineCloudUpload } from "react-icons/hi";
import Marquee from "@/components/Marquee";
import CapsuleButton from "@/components/CapsuleButton";

export default function Notes() {
  return (
    <div className="h-full w-full bg-[#eceef1] py-6">
      <div className="mx-8 overflow-hidden rounded-3xl bg-black">
        <div className="flex items-end justify-between gap-6 px-8 pt-8 pb-6">
          <div className="min-w-0">
            <div className="mb-2 inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.08em] text-[#0ed72f] uppercase">
              <GiAerialSignal className="h-3.5 w-3.5" />
              <span>Shared library</span>
            </div>
            <h1 className="text-[clamp(2.5rem,7vw,4.5rem)] leading-none font-extrabold tracking-tight text-white">
              NOTES
            </h1>
            <p className="mt-3 text-[0.9rem] text-white/70">
              Steal the good notes before finals do.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#0ed72f]/40 bg-[#0ed72f]/10 px-4 py-2.5 text-sm font-semibold text-[#0ed72f] transition hover:bg-[#0ed72f]/20"
          >
            <HiOutlineCloudUpload className="h-4 w-4" />
            Upload Note
          </button>
        </div>

        <Marquee ClassNameForMarquee="flex h-12 items-center overflow-hidden border-y border-[#0ed72f]/35 bg-[#0a0a0a]" />
      </div>

      <div className="mx-8 mt-6 rounded-3xl bg-white px-8 py-5">
        <SearchBar
          PlaceHolderText="Search notes, subjects, instagram rells..."
          MaxWidth="1920"
          Background="bg-gray-100"
          Border="border-0"
          Text="text-neutral-700 placeholder:text-neutral-400"
        />
        <div className="flex flex-wrap gap-2 pt-5">
          <CapsuleButton IsActive={true} ButtonText="All" />
          <CapsuleButton IsActive={false} ButtonText="Math" />
          <CapsuleButton IsActive={false} ButtonText="Chemistry" />
          <CapsuleButton IsActive={false} ButtonText="Physic" />
        </div>
      </div>
    </div>
  );
}
