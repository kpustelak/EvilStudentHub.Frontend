import { CiSearch } from "react-icons/ci";

function SearchBar({ PlaceHolderText }: { PlaceHolderText: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[440px]">
      <CiSearch className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-neutral-400" />
      <input
        type="search"
        aria-label="Search"
        placeholder={PlaceHolderText}
        className="h-11 w-full rounded-full border-0 bg-white/80 py-2 pr-16 pl-11 text-sm text-neutral-800 outline-none placeholder:text-neutral-400"
      />
      <kbd className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 rounded-md bg-black/5 px-2 py-0.5 text-[10px] font-medium text-neutral-500">
        Ctrl + K
      </kbd>
    </div>
  );
}

export default SearchBar;
