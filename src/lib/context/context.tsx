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
  const [likedPokemons, setLikedPokemons] = React.useState<string[]>(() => {
    const likedPokemons = localStorage.getItem("likedPokemons");
    if (likedPokemons) {
      return JSON.parse(likedPokemons);
    } else {
      return [];
    }
  });

  const {
    data: pokemon,
    isLoading,
    isFetching,
    error,
    refetch,
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
      setPageOffest((old) => old + 20);
      mutation.mutate();
    }
  };

  const handlePrev = () => {
    if (pokemon?.previous) {
      setPageOffest((old) => {
        if (old <= 0) return 0;
        return old - 20;
      });
      mutation.mutate();
    }
  };

  const getPageIndex = () => {
    if (pageOffset === 0) {
      return 1;
    }

    return Math.floor(pageOffset / 20) + 1;
  };

  const getPageTotal = () => {
    if (pokemon) {
      return Math.ceil(pokemon.count / 20);
    } else {
      return 1;
    }
  };

  const handleLike = (pokemonID: number) => {
    if (likedPokemons.includes(pokemonID.toString())) {
      const newLikedPokemons = likedPokemons.filter(
        (id) => id !== pokemonID.toString()
      );
      setLikedPokemons(newLikedPokemons);

      localStorage.setItem("likedPokemons", JSON.stringify(newLikedPokemons));
    } else {
      const newLikedPokemons = [...likedPokemons, pokemonID.toString()];
      setLikedPokemons(newLikedPokemons);
      localStorage.setItem("likedPokemons", JSON.stringify(newLikedPokemons));
    }
  };

  const value: TPokemonContext = {
    state: {
      list: {
        isLoading: isLoading || isFetching,
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
