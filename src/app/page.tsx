import PokemonGrid from "@/components/PokemonGrid";

type Pokemon = { name: string; url: string };
type PokemonResponse = { results: Pokemon[] };

export default async function Home() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  if (!res.ok) throw new Error("Failed to load Pokémon");
  const data: PokemonResponse = await res.json();

  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="font-bold text-3xl">Pokedex</h1>
      <p className="text-gray-400">Browse and search Pokemon</p>
      <PokemonGrid pokemons={data.results} />
    </main>
  );
}