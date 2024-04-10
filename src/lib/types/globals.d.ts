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
  height: number;
  weight: number;
  abilities: {
    is_hidden: boolean;
    slot: number;
    ability: TPokemonAbility;
  }[];
  sprite: string;
  stats: TPokemonStat[];
  types: TPokemonType[];
  moves: {
    move: TPokemonMove;
  }[];
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

type TPokemonType = {
  slot: number;
  type: {
    name: string;
  };
};

type TPokemonMove = {
  name: string;
};

interface IPokemonPagination {
  count: number;
  next: string | null;
  previous: string | null;
  results: TPokemon[];
}
