import Link from "next/link";

async function getPokemon(id: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();
  return data;
}

export default async function PokemonPage({ params }: any) {
  console.log(params);
  const pokemon = await getPokemon(params.id);
  return (
    <div>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <img src={pokemon.sprites.back_default} alt={pokemon.name} />
      <Link href={pokemon.id + "/abilities"}>Abilities</Link>
    </div>
  );
}
