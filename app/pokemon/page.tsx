import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.scss";

async function getPokemons() {
  const pokemons = [];
  for (let i = 1; i < 151; i++) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const data = await res.json();
    pokemons.push(data);
  }
  return pokemons;
}

export default async function PokemonsPage() {
  const pokemon = await getPokemons();
  console.log(pokemon);
  return (
    <div>
      <h1>First 150 Pokemon</h1>
      <div className={styles.pokeList}>
        {pokemon?.map((pokemon: any) => {
          return (
            <div className={styles.pokemonEntry} key={pokemon.name}>
              <Link href={`pokemon/${pokemon.id}`}>
                {pokemon.name}
                <br />
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={150}
                  height={150}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
