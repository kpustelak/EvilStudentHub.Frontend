
export default function Button(
    {
        children,
        className,
        type
    }:
    {
        children: React.ReactNode;
        className?: string;
        type?: "primary" | "secondary" | "glass-green" | "glass-white";
    }){
    let styles = "";
    switch (type) {
        case "primary":
            styles = "mt-5 flex w-full items-center justify-center gap-2 rounded-full " +
                "bg-black px-4 py-3 text-sm font-bold tracking-wide text-white uppercase " +
                "transition hover:bg-neutral-800";
            break;
        case "secondary":
            styles = "inline-flex items-center justify-center gap-2 rounded-full border " +
                "border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium text-neutral-600 " +
                "transition hover:bg-neutral-50";
            break;
        case "glass-green":
            styles = "inline-flex shrink-0 items-center gap-2 rounded-full border border-brand/40 " +
                "bg-brand/10 px-4 py-2.5 text-sm font-semibold text-brand transition hover:bg-brand/20";
            break;
        case "glass-white":
            styles = "inline-flex shrink-0 items-center gap-2 rounded-full border border-white/40 " +
                "bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20";
            break;
    }

    return (
        <button className={`${styles} ${className}`}>
            {children}
        </button>
    )
}