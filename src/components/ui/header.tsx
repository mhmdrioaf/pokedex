export default function Header() {
  return (
    <header
      className="w-full flex flex-col gap-2 bg-surface/50 text-surface-foreground px-container-horizontal py-2 sticky top-0 left-0 backdrop-blur-md z-40"
    >
      <h1 className="text-2xl font-bold">Pokedex</h1>
    </header>
  );
}
