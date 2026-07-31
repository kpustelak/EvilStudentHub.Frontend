import SearchBar from "@/components/SearchBar";
import CapsuleButton from "@/components/CapsuleButton";

const subjects = ["All", "Math", "Chemistry", "Physics"] as const;

export default function NotesToolbar() {
  return (
    <div className="mx-8 mt-6 rounded-3xl bg-white px-8 py-5">
      <SearchBar
        placeholderText="Search notes, subjects, instagram reels..."
        maxWidth={1920}
        background="bg-gray-100"
        border="border-0"
        text="text-neutral-700 placeholder:text-neutral-400"
      />
      <div className="flex flex-wrap gap-2 pt-5">
        {subjects.map((subject, index) => (
          <CapsuleButton
            key={subject}
            isActive={index === 0}
            buttonText={subject}
          />
        ))}
      </div>
    </div>
  );
}
