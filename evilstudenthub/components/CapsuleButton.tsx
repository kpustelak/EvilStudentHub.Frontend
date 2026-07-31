export default function CapsuleButton({
  isActive,
  buttonText,
}: {
  isActive: boolean;
  buttonText: string;
}) {
  return (
    <button
      type="button"
      className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
        isActive
          ? "bg-black text-white"
          : "bg-gray-100 text-gray-500 hover:bg-gray-200"
      }`}
    >
      {buttonText}
    </button>
  );
}
