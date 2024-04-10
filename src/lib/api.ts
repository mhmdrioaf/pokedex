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
    results: [],
  };

  for (const result of response.results) {
    const res = await fetch(result.url);
    const response = await res.json();
    pokemonResults.results.push({
      ...response,
      sprite: response.sprites.front_default,
    });
  }

  return pokemonResults;
}
