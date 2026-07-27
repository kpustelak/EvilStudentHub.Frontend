import { IconType } from "react-icons";

function BannerButton({
  Label,
  Icon,
  Text,
  ClassName = "bg-white/30 hover:bg-white/40",
  IconClassName = "text-white",
}: {
  Label: string;
  Icon?: IconType;
  Text?: string;
  ClassName?: string;
  IconClassName?: string;
}) {
  return (
    <button
      type="button"
      aria-label={Label}
      className={`flex h-10 w-10 items-center justify-center rounded-full p-2 transition ${ClassName}`}
    >
      {Icon ? (
        <Icon className={`h-6 w-6 ${IconClassName}`} />
      ) : (
        <span className="text-sm font-semibold text-black">{Text}</span>
      )}
    </button>
  );
}

export default BannerButton;
