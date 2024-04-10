type TPokemonContext = {
  state: {
    list: {
      pokemon: IPokemonPagination | undefined;
      isLoading: boolean;
      error: Error | null;
      pageIndex: number;
      pageTotal: number;
    };
  };

  handler: {
    list: {
      next: () => void;
      prev: () => void;
    };
  };
};
