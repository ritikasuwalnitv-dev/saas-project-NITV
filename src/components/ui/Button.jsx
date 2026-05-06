export default function Button({
  children,
  variant = "primary",
  size = "lg",
  className = "",
}) {
  const base = "font-inter font-semibold rounded-[12px] transition";

  const sizes = {
    sm: "text-[13px] px-3 py-1.5",
    md: "text-[14px] px-4 py-2 sm:px-5 sm:py-2.5",
    lg: "text-[14px] px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3.5",
  };

  const variants = {
    primary:
      "bg-brand text-white shadow-[inset_0_0.5px_0_rgba(255,255,255,0.32),inset_0_-1.5px_0_rgba(255,255,255,0.32)] hover:opacity-90 active:scale-[0.98]",

    secondary:
      " text-white px-8 lg:px-9 shadow-[inset_0_0.5px_0_rgba(255,255,255,0.32),inset_0_-1.5px_0_rgba(255,255,255,0.32)] bg-white/30 hover:opacity-90 active:scale-[0.98]",
  };

  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
