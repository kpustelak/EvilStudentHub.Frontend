import { IconType } from "react-icons";
import Marquee from "@/components/Marquee";

export default function Header({
  type = "hero",
  eyebrow,
  eyebrowIcon: EyebrowIcon,
  title,
  description,
  middle,
  children,
  footer,
  showMarquee = true,
  marqueePlacement = "inside",
  className = "",
}: {
  type?: "hero" | "toolbar";
  eyebrow?: string;
  eyebrowIcon?: IconType;
  title: React.ReactNode;
  description?: string;
  middle?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  showMarquee?: boolean;
  marqueePlacement?: "inside" | "outside";
  className?: string;
}) {
  const embeddedMarquee =
    showMarquee && marqueePlacement === "inside" ? (
      <Marquee className="flex h-12 items-center overflow-hidden border-y border-brand/35 bg-[#0a0a0a]" />
    ) : null;

  const outsideMarquee =
    showMarquee && marqueePlacement === "outside" ? <Marquee /> : null;

  if (type === "toolbar") {
    return (
      <>
        <div
          className={`mx-8 overflow-hidden rounded-3xl bg-black px-8 py-5 ${className}`}
        >
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-8">
            <div className="flex min-w-0 flex-col gap-0.5">
              <p className="whitespace-nowrap text-xl font-bold tracking-tight text-white">
                {title}
              </p>
              {description && (
                <p className="whitespace-nowrap text-xs font-medium tracking-wide text-white/70">
                  {description}
                </p>
              )}
            </div>

            {middle}

            {children && (
              <div className="flex items-center gap-2">{children}</div>
            )}
          </div>

          {footer && <div className="mt-6 flex space-x-3 pt-25">{footer}</div>}

          {embeddedMarquee}
        </div>
        {outsideMarquee}
      </>
    );
  }

  return (
    <>
      <div className={`mx-8 overflow-hidden rounded-3xl bg-black ${className}`}>
        <div className="flex items-end justify-between gap-6 px-8 pt-8 pb-6">
          <div className="min-w-0">
            {eyebrow && (
              <div className="mb-2 inline-flex items-center gap-2 text-tiny font-bold tracking-[0.08em] text-brand uppercase">
                {EyebrowIcon && <EyebrowIcon className="size-3.5" />}
                <span>{eyebrow}</span>
              </div>
            )}
            <h1 className="text-[clamp(2.5rem,7vw,4.5rem)] leading-none font-extrabold tracking-tight text-white">
              {title}
            </h1>
            {description && (
              <p className="mt-3 text-[0.9rem] text-white/70">{description}</p>
            )}
          </div>

          {children}
        </div>

        {footer && <div className="flex space-x-3 px-8 pb-6">{footer}</div>}

        {embeddedMarquee}
      </div>
      {outsideMarquee}
    </>
  );
}
