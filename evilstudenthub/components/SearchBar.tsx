import { CiSearch } from "react-icons/ci";

export default function SearchBar({
  placeholderText,
  maxWidth,
  border = "border-0",
  background = "bg-white/80",
  text = "text-neutral-800 placeholder:text-neutral-400",
}: {
  placeholderText: string;
  maxWidth?: number;
  border?: string;
  background?: string;
  text?: string;
}) {
  return (
    <div
      className="relative mx-auto w-full"
      style={maxWidth ? { maxWidth: `${maxWidth}px` } : undefined}
    >
      <CiSearch className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-neutral-400" />
      <input
        type="search"
        aria-label="Search"
        placeholder={placeholderText}
        className={`h-11 w-full rounded-full py-2 pr-16 pl-11 text-sm outline-none ${border} ${background} ${text}`}
      />
      <kbd className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 rounded-md bg-black/5 px-2 py-0.5 text-[10px] font-medium text-neutral-500">
        Ctrl + K
      </kbd>
    </div>
  );
}
