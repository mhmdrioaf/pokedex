import { getPokemonID, getPokemonSprite } from "./helper";

export async function listPokemon(offset?: string) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_POKEMON_LIST! +
      `?offset=${offset ?? 0}&limit=20`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const response: IPokemonFetchResult = await res.json();

  const pokemonResults: IPokemonPagination = {
    count: response.count,
    next: response.next,
    previous: response.previous,
    results: response.results.map((result) => ({
      id: getPokemonID(result.url),
      name: result.name,
      sprite: getPokemonSprite(getPokemonID(result.url)),
    })),
  };

  return pokemonResults;
}

export async function getPokemon(id: string) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_POKEMON_GET_DETAIL + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = await res.json();

  const pokemon: TPokemon = {
    ...response,
    sprite: getPokemonSprite(response.id),
  };

  return pokemon;
}
