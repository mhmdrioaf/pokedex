"use client";

import { properizeName } from "@/lib/helper";
import Link from "next/link";

interface IPokemonCardProps {
  pokemon: {
    id: number;
    name: string;
    sprite: string;
  };
}

export default function PokemonCard({ pokemon }: IPokemonCardProps) {
  return (
    <Link
      href={`/pokemon/${pokemon.id}`}
      className="w-full flex flex-col gap-4 bg-surface/70 text-surface-foreground p-2 rounded-md justify-center items-center cursor-pointer hover:bg-primary/100 hover:text-primary-foreground"
    >
      <img
        src={pokemon.sprite}
        className="w-16 h-16 lg:w-32 lg:h-32"
        alt="pokeimage"
      />
      <p>{properizeName(pokemon.name)}</p>
    </Link>
  );
}
