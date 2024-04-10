import PokemonDetail from "@/components/ui/pokemon-detail";
import { getPokemon } from "@/lib/api";

export default async function PokemonDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const pokemon = await getPokemon(params.id);

  if (pokemon) {
    return (
      <div className="w-full px-container-horizontal py-container-vertical">
        <PokemonDetail pokemon={pokemon} />
      </div>
    );
  } else {
    return <p>Not found</p>;
  }
}
