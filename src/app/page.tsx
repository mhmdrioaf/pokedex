import { Suspense } from "react";
import Loading from "./loading";
import dynamic from "next/dynamic";

const PokemonList = dynamic(() => import("@/components/ui/pokemon-list"), {
  ssr: false,
  loading: () => <Loading />,
});

export default function Home() {
  return (
    <main className="w-full min-h-[100svh] flex flex-col gap-8 px-container-horizontal py-container-vertical z-0">
      <Suspense>
        <PokemonList />
      </Suspense>
    </main>
  );
}
