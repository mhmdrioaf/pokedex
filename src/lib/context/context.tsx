"use client";

import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { listPokemon } from "../api";

export const PokemonContext = React.createContext<TPokemonContext | null>(null);

export function usePokemon() {
  return React.useContext(PokemonContext) as TPokemonContext;
}

export function PokemonContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [pageOffset, setPageOffest] = React.useState<number>(0);
  const [likedPokemons, setLikedPokemons] = React.useState<TLikedPokemon[]>([]);

  const {
    data: pokemon,
    isLoading,
    isFetching,
    error,
    refetch,
    isPending,

    isRefetching,
  } = useQuery({
    queryKey: ["pokemon"],
    queryFn: () => listPokemon(pageOffset.toString()),
    placeholderData: keepPreviousData,
  });

  const mutation = useMutation({
    mutationFn: () => refetch(),
  });

  const handleNext = () => {
    if (pokemon?.next) {
      setPageOffest((old) => old + 12);
      mutation.mutate();
    }
  };

  const handlePrev = () => {
    if (pokemon?.previous) {
      setPageOffest((old) => {
        if (old <= 0) return 0;
        return old - 12;
      });
      mutation.mutate();
    }
  };

  const getPageIndex = () => {
    if (pageOffset === 0) {
      return 1;
    }

    return Math.floor(pageOffset / 12) + 1;
  };

  const getPageTotal = () => {
    if (pokemon) {
      return Math.ceil(pokemon.count / 12);
    } else {
      return 1;
    }
  };

  const handleLike = (pokemonID: number) => {
    const pokemonData = pokemon?.results.find((p) => p.id === pokemonID);
    const currentLikedPokemons = [...likedPokemons];
    if (!pokemonData) return;

    const { id, name, sprite } = pokemonData;

    if (currentLikedPokemons.find((p) => p.id === id)) {
      const newLikedPokemons = currentLikedPokemons.filter((p) => p.id !== id);
      setLikedPokemons(newLikedPokemons);
      if (typeof window !== undefined) {
        localStorage.setItem("likedPokemons", JSON.stringify(newLikedPokemons));
      }
    } else {
      setLikedPokemons([...currentLikedPokemons, { id, name, sprite }]);
      if (typeof window !== undefined) {
        localStorage.setItem(
          "likedPokemons",
          JSON.stringify([...currentLikedPokemons, { id, name, sprite }])
        );
      }
    }
  };

  React.useEffect(() => {
    if (typeof window !== undefined) {
      const likedPokemons = localStorage.getItem("likedPokemons");
      if (likedPokemons) {
        setLikedPokemons(JSON.parse(likedPokemons));
      }
    }
  }, []);

  const value: TPokemonContext = {
    state: {
      list: {
        isLoading: isLoading || isFetching || isPending || isRefetching,
        pokemon: pokemon,
        error: error,
        pageIndex: getPageIndex(),
        pageTotal: getPageTotal(),
      },
      pokemon: {
        liked: likedPokemons,
      },
    },
    handler: {
      list: {
        next: handleNext,
        prev: handlePrev,
      },
      pokemon: {
        like: handleLike,
      },
    },
  };

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
}
