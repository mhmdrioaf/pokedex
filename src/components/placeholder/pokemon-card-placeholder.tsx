"use client";

export default function CardPlaceholder() {
  return (
    <div className="w-full flex flex-col gap-4 bg-surface text-transparent p-2 rounded-md justify-center items-center animate-pulse">
      <div className="w-32 h-32" />
      <p>Pokemon Name Placeholder</p>
    </div>
  );
}
