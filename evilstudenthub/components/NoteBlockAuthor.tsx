export default function NoteBlockAuthor({
  studentName,
  studentAvatarUrl,
  avatarColor,
  noteReleaseDate,
  isFeatured = false,
}: {
  studentName: string;
  studentAvatarUrl?: string;
  avatarColor: string;
  noteReleaseDate: string;
  isFeatured?: boolean;
}) {
  const initials = studentName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

  return (
    <div className="relative z-1 flex items-center gap-2.5">
      {studentAvatarUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={studentAvatarUrl}
          alt=""
          className={`shrink-0 rounded-full object-cover ${isFeatured ? "size-10" : "size-8.5"}`}
        />
      ) : (
        <span
          className={`flex shrink-0 items-center justify-center rounded-full text-caption font-bold text-neutral-700 ${
            isFeatured ? "size-10 text-xs" : "size-8.5"
          }`}
          style={{ backgroundColor: avatarColor }}
        >
          {initials}
        </span>
      )}
      <div>
        <strong className="block text-label font-semibold text-neutral-900">
          {studentName}
        </strong>
        <time className="text-tiny text-neutral-400">{noteReleaseDate}</time>
      </div>
    </div>
  );
}
