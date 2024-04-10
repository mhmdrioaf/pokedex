import LikedPokemonList from "@/components/ui/liked-pokemon-list";

export default function LikedPokemonsPage() {
  return (
    <main className="w-full min-h-svh flex flex-col gap-8 px-container-horizontal-sm py-container-vertical-sm lg:px-container-horizontal-lg lg:py-container-vertical-lg z-0">
      <LikedPokemonList />
    </main>
  );
}
