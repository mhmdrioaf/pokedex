"use client";

import { twMerge } from "tailwind-merge";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fill?: boolean;
}

export default function Button({
  children,
  fill = true,
  ...props
}: IButtonProps) {
  return (
    <button
      className={twMerge(
        "px-8 py-2 text-sm font-bold text-center bg-accent/85 text-accent-foreground focus:outline-none focus:ring-2 focus:ring-2-accent hover:bg-accent/100 disabled:bg-accent/30 disabled:text-accent-foreground/30 transition-all duration-300 rounded-md",
        fill ? "w-full" : "w-fit"
      )}
      {...props}
    >
      {children}
    </button>
  );
}
