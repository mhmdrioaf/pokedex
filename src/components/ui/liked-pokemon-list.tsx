"use client";

import { usePokemon } from "@/lib/context/context";
import PokemonCard from "./pokemon-card";

export default function LikedPokemonList() {
  const { state } = usePokemon();

  return (
    <div className="w-full grid grid-cols-2 lg:grid-cols-4 place-items-center gap-4">
      {state.pokemon.liked.length > 0 ? (
        state.pokemon.liked.map((pokemon) => (
          <PokemonCard
            pokemon={{
              id: pokemon.id,
              name: pokemon.name,
              sprite: pokemon.sprite,
            }}
            key={pokemon.id}
          />
        ))
      ) : (
        <div className="col-span-4 min-h-[75svh] flex flex-col items-center justify-center">
          <b>Oops...</b>
          <p className="text-sm">{"You haven't liked any pokemon yet."}</p>
        </div>
      )}
    </div>
  );
}
