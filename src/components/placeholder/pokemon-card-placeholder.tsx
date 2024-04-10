"use client";

export default function CardPlaceholder() {
  return (
    <div className="w-full flex flex-col gap-4 bg-surface text-transparent p-2 rounded-md justify-center items-center animate-pulse">
      <div className="w-16 h-16 lg:w-32 lg:h-32" />
      <p>Pokemon Name Placeholder</p>
    </div>
  );
}
