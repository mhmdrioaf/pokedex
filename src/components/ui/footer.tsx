export default function Footer() {
  return (
    <footer className="w-full px-container-horizontal py-4 bg-background text-foreground border-t border-t-surface flex items-center justify-center">
      <p className="text-sm">
        Built by{" "}
        <span className="underline">
          <a href="https://mhmdrioaf.vercel.app">Rio Ananta</a>
        </span>
        {" using "}
        <span className="underline">
          <a href="https://nextjs.org" target="_blank">
            Next.js
          </a>
        </span>{" "}
        <span className="underline">
          <a href="https://tailwindcss.com" target="_blank">
            Tailwind
          </a>
        </span>
        {" & "}
        <span className="underline">
          <a href="https://vercel.com" target="_blank">
            Vercel
          </a>
        </span>
      </p>
    </footer>
  );
}
