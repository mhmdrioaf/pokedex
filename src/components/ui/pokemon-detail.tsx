"use client";

import { properizeName } from "@/lib/helper";
import CardInfo from "./info-card";
import Link from "next/link";
import Button from "./button";
import { usePokemon } from "@/lib/context/context";

interface IPokemonDetailProps {
  pokemon: TPokemon;
}

export default function PokemonDetail({ pokemon }: IPokemonDetailProps) {
  const { state, handler } = usePokemon();
  return (
    <article
      id="pokemon-detail"
      className="w-full bg-surface text-surface-foreground rounded-lg px-8 py-4 flex flex-col gap-8"
    >
      <section
        id="pokemon-detail-header"
        className="w-full inline-flex items-center justify-between"
      >
        <nav id="back-button">
          <Link
            href="/"
            className="hover:underline hover:underline-offset-2 font-medium text-xs transision-all"
          >
            ⬅ Back
          </Link>
        </nav>

        <section id="like-button">
          <Button fill={false} onClick={() => handler.pokemon.like(pokemon.id)}>
            <span>
              {state.pokemon.liked.includes(pokemon.id.toString())
                ? "Unlike"
                : "Like"}
            </span>
          </Button>
        </section>
      </section>

      <figure
        id="pokemon-detail-image"
        className="w-full flex items-center justify-center"
      >
        <img
          src={pokemon.sprite}
          className="w-32 h-32"
          alt={`${pokemon.name} picture`}
        />
      </figure>

      <section
        id="pokemon-detail-basic-info"
        className="w-full grid grid-cols-1 gap-4"
      >
        <h4 className="font-bold">Basic</h4>
        <div
          id="pokemon-detail-basic-info-container"
          className="grid grid-cols-3 gap-8"
        >
          <CardInfo
            id="pokemon-name"
            title="Name"
            value={properizeName(pokemon.name)}
          />
          <CardInfo id="pokemon-height" title="Height" value={pokemon.height} />
          <CardInfo id="pokemon-weight" title="Weight" value={pokemon.weight} />
        </div>
      </section>

      <section
        id="pokemon-detail-stats"
        className="w-full grid grid-cols-1 gap-4"
      >
        <h4 className="font-bold">Pokemon Stats</h4>
        <div
          id="pokemon-detail-stats-container"
          className="grid grid-cols-3 gap-8"
        >
          {pokemon.stats.map((stats) => (
            <CardInfo
              key={stats.stat.name}
              title={properizeName(stats.stat.name)}
              value={stats.base_stat}
            />
          ))}
        </div>
      </section>

      <section
        id="pokemon-detail-abilities"
        className="w-full grid grid-cols-1 gap-4"
      >
        <h4 className="font-bold">Abilities</h4>
        <div
          id="pokemon-detail-abilities-container"
          className="grid grid-cols-3 gap-8"
        >
          {pokemon.abilities.map((ability) => (
            <CardInfo
              key={ability.slot}
              title={ability.is_hidden ? "Hidden" : `Normal`}
              value={properizeName(ability.ability.name)}
            />
          ))}
        </div>
      </section>

      <section
        id="pokemon-detail-types"
        className="w-full grid grid-cols-1 gap-4"
      >
        <h4 className="font-bold">Pokemon Types</h4>
        <div
          id="pokemon-detail-types-container"
          className="grid grid-cols-3 gap-8"
        >
          {pokemon.types.map((types) => (
            <CardInfo
              key={types.type.name}
              title={`Types ${types.slot}`}
              value={properizeName(types.type.name)}
            />
          ))}
        </div>
      </section>

      <section
        id="pokemon-detail-moves"
        className="w-full grid grid-cols-1 gap-4"
      >
        <h4 className="font-bold">Pokemon Moves</h4>
        <div
          id="pokemon-detail-types-container"
          className="grid grid-cols-3 gap-8"
        >
          {pokemon.moves.map((moves) => (
            <CardInfo
              key={moves.move.name}
              value={properizeName(moves.move.name)}
            />
          ))}
        </div>
      </section>
    </article>
  );
}
