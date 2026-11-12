import PokemonCard from "@/components/PokemonCard";
type Pokemon = { name: string; url: string };
type PokemonResponse = {results: Pokemon[]}

export default async function Home() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=24")
  const data: PokemonResponse = await res.json()
  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="font-bold text-3xl">Pokedex</h1>
      <p className="text-gray-400">Browse and search Pokemon</p>
      <ul>
      {
        data.results.map((pokemon) => (
         <PokemonCard key={pokemon.name} name={pokemon.name} />
        ))
      }
      </ul>
    </main>
  );
}
