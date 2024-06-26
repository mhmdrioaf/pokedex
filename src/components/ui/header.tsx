import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full inline-flex items-center justify-between bg-surface/50 text-surface-foreground px-container-horizontal-sm lg:px-container-horizontal-lg py-2 sticky top-0 left-0 backdrop-blur-md z-40">
      <Link href="/">
        <h1 className="text-base lg:text-2xl font-bold">Pokedex</h1>
      </Link>

      <nav
        id="main-nav"
        className="inline-flex items-center gap-4 text-xs lg:text-sm"
      >
        <Link href="/" className="hover:underline hover:underline-offset-2">
          Home
        </Link>
        <Link
          href="/pokemon/liked"
          className="hover:underline hover:underline-offset-2"
        >
          Liked Pokemon
        </Link>
        <Link
          href="/wallet"
          className="hover:underline hover:underline-offset-2"
        >
          Wallet
        </Link>
      </nav>
    </header>
  );
}
