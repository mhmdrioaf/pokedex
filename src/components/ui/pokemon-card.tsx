"use client";

import { properizeName } from "@/lib/helper";

export default function PokemonCard({ pokemon }: { pokemon: TPokemon }) {
  return (
    <div className="w-full flex flex-col gap-4 bg-primary/70 text-primary-foreground p-2 rounded-md justify-center items-center cursor-pointer hover:bg-primary/100">
      <img src={pokemon.sprite} className="w-32 h-32" alt="pokeimage" />
      <p>{properizeName(pokemon.name)}</p>
    </div>
  );
}
