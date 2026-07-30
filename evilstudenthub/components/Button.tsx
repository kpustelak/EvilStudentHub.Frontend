
export default function Button(
    {
        children,
        className,
        type
    }:
    {
        children: React.ReactNode;
        className?: string;
        type?: "primary" | "secondary";
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

    }

    return (
        <button className={`${styles} ${className}`}>
            {children}
        </button>
    )
}