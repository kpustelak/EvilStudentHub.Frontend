import { notFound } from "next/navigation";
import notes from "@/dummyData";
import NoteDetailHero from "@/components/NoteDetailHero";
import NoteDetailPreview from "@/components/NoteDetailPreview";
import NoteDetailFileCard from "@/components/NoteDetailFileCard";
import NoteDetailMoreNotes from "@/components/NoteDetailMoreNotes";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function NotePage({ params }: Props) {
  const { id } = await params;
  const note = notes.find((item) => item.id === id);

  if (!note) {
    notFound();
  }

  return (
    <div className="h-full w-full bg-[#eceef1] py-6">
      <NoteDetailHero note={note} />

      <div className="mx-8 mt-8 flex flex-col gap-6 lg:flex-row lg:items-start">
        <NoteDetailPreview note={note} />

        <div className="flex w-full flex-col gap-6 lg:w-2/5">
          <NoteDetailFileCard note={note} />
          <NoteDetailMoreNotes notes={notes} currentId={id} />
        </div>
      </div>
    </div>
  );
}
