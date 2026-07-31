import { IconType } from "react-icons";
import Link from "next/link";

export default function NavButton({
  icon: Icon,
  isActive,
  href,
}: {
  icon: IconType;
  isActive: boolean;
  href: string;
}) {
  return (
    <Link
      href={href}
      className={`mx-4 mt-4 inline-flex items-center justify-center rounded-2xl p-4 ${
        isActive ? "bg-[#0ed72f]" : "hover:bg-neutral-100"
      }`}
    >
      <Icon className="size-5" />
    </Link>
  );
}
