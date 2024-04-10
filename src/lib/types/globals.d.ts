interface IPokemonFetchResult {
  count: number;
  next: string;
  previous: string | null;
  results: TPokemonResult[];
}

type TPokemonResult = {
  name: string;
  url: string;
};

type TPokemon = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: {
    is_hidden: boolean;
    slot: number;
    ability: TPokemonAbility;
  }[];
  held_items: TPokemonHeldItem[];
  location_area_encounters: string;
  sprite: string;
  stats: TPokemonStat[];
};

type TPokemonAbility = {
  name: string;
  url: string;
};

type TPokemonHeldItem = {
  item: {
    name: string;
    url: string;
  };
  version_details: {
    rarity: number;
    version: {
      name: string;
      url: string;
    };
  }[];
};

type TPokemonStat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

interface IPokemonPagination {
  count: number;
  next: string | null;
  previous: string | null;
  results: TPokemon[];
}
