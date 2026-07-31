import { GiAerialSignal } from "react-icons/gi";
import { HiOutlineCloudUpload } from "react-icons/hi";
import NoteBlock from "@/components/NoteBlock";
import notes from "@/dummyData";
import Header from "@/components/Header";
import Button from "@/components/Button";
import NotesToolbar from "@/components/NotesToolbar";

export default function Notes() {
  return (
    <div className="h-full w-full bg-[#eceef1] py-6">
      <Header
        type="hero"
        eyebrow="Shared library"
        eyebrowIcon={GiAerialSignal}
        title="NOTES"
        description="Steal the good notes before finals do."
        marqueePlacement="inside"
      >
        <Button type="glass-green">
          <HiOutlineCloudUpload className="size-4" />
          Upload Note
        </Button>
      </Header>

      <NotesToolbar />

      <div className="mx-8 mt-6 grid auto-rows-fr grid-flow-dense gap-4 [grid-template-columns:repeat(auto-fill,minmax(260px,1fr))]">
        {notes.map(({ id, ...note }) => (
          <NoteBlock key={id} {...note} href={`/notes/${id}`} />
        ))}
      </div>
    </div>
  );
}
