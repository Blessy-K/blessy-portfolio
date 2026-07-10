import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
};

function Button({
  children,
  href = "#",
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold transition-all duration-300 ease-out";

  const styles =
    variant === "primary"
      ? "bg-[#0F172A] !text-white shadow-sm hover:-translate-y-1 hover:bg-[#1E293B] hover:shadow-lg"
      : "border border-zinc-300 bg-white !text-zinc-900 shadow-sm hover:-translate-y-1 hover:border-zinc-400 hover:bg-zinc-50";

  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

export default Button;