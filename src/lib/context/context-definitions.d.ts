type TPokemonContext = {
  state: {
    list: {
      pokemon: IPokemonPagination | undefined;
      isLoading: boolean;
      error: Error | null;
      pageIndex: number;
      pageTotal: number;
    };

    pokemon: {
      liked: string[];
    };
  };

  handler: {
    list: {
      next: () => void;
      prev: () => void;
    };
    pokemon: {
      like: (pokemonID: number) => void;
    };
  };
};
