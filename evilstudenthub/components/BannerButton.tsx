import { IconType } from "react-icons";

export default function BannerButton({
  label,
  icon: Icon,
  text,
  className = "bg-white/30 hover:bg-white/40",
  iconClassName = "text-white",
}: {
  label: string;
  icon?: IconType;
  text?: string;
  className?: string;
  iconClassName?: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className={`flex size-10 items-center justify-center rounded-full p-2 transition ${className}`}
    >
      {Icon ? (
        <Icon className={`size-6 ${iconClassName}`} />
      ) : (
        <span className="text-sm font-semibold text-black">{text}</span>
      )}
    </button>
  );
}
