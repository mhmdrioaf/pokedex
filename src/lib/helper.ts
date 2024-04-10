export function properizeName(name: string): string {
  const fullName = name
    .split("-")
    .map((name) => name.charAt(0).toUpperCase() + name.slice(1, name.length));

  return fullName.join(" ");
}

export function getPokemonID(url: string) {
  const pokemonID = url.split("/")[6];
  return Number(pokemonID);
}

export function getPokemonSprite(pokemonID: number) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonID}.png`;
}
