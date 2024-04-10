import { Suspense, lazy } from "react";

const PokemonList = lazy(() => import("@/components/ui/pokemon-list"));

export default function Home() {
  return (
    <main className="w-full min-h-[100svh] flex flex-col gap-8 px-container-horizontal py-container-vertical z-0">
      <Suspense fallback={<div>Loading...</div>}>
        <PokemonList />
      </Suspense>
    </main>
  );
}
