"use client";

import { usePokemon } from "@/lib/context/context";
import PokemonCard from "./pokemon-card";
import CardPlaceholder from "../placeholder/pokemon-card-placeholder";
import Button from "./button";

export default function PokemonList() {
  const { state, handler } = usePokemon();

  return (
    <section id="sec__pokemon__content">
      {state.list.error && (
        <div className="w-full min-h-[75svh] flex items-center justify-center">
          <b>Oops...</b>
          <p className="text-sm">
            {"There's something wrong happened. Please try again later."}
          </p>
        </div>
      )}

      {!state.list.error && state.list.pokemon && (
        <div className="w-full flex flex-col gap-8">
          <div className="w-full grid grid-cols-4 place-items-center gap-4">
            {state.list.isLoading ? (
              <>
                {Array.from({ length: 20 }).map((_, index) => (
                  <CardPlaceholder key={index} />
                ))}
              </>
            ) : (
              state.list.pokemon.results.map((pokemon) => (
                <PokemonCard pokemon={pokemon} key={pokemon.id} />
              ))
            )}
          </div>

          <section
            id="sec__navigation__button"
            className="w-full inline-flex items-center justify-center gap-8"
          >
            <Button
              onClick={handler.list.prev}
              disabled={
                state.list.pokemon.previous === null || state.list.isLoading
              }
            >
              Previous
            </Button>

            <span className="text-xs">
              {state.list.pageIndex + "/" + state.list.pageTotal}
            </span>

            <Button
              onClick={handler.list.next}
              disabled={
                state.list.pokemon.next === null || state.list.isLoading
              }
            >
              Next
            </Button>
          </section>
        </div>
      )}
    </section>
  );
}
