"use client";

import { twMerge } from "tailwind-merge";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fill?: boolean;
  className?: string;
}

export default function Button({
  children,
  fill = true,
  className,
  ...props
}: IButtonProps) {
  return (
    <button
      className={twMerge(
        "px-8 py-2 text-sm font-bold text-center bg-primary/85 text-primary-foreground focus:outline-none focus:ring-2 focus:ring-2-primary hover:bg-primary/100 disabled:bg-primary/30 disabled:text-primary-foreground/55 transition-all duration-300 rounded-md",
        fill ? "w-full" : "w-fit",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
