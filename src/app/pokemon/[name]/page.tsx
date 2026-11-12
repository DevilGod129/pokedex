import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PokemonDetail = {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: { type: { name: string } }[];
};

export default async function PokemonPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (res.status === 404) notFound();
  if (!res.ok) throw new Error("Failed to load Pokémon");
  const pokemon: PokemonDetail = await res.json();

  return (
    <main className="mx-auto max-w-2xl p-6">
      <Link href="/" className="text-gray-400 hover:text-white">
        ← Back
      </Link>
      <div className="mt-6 flex flex-col items-center">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          alt={pokemon.name}
          width={256}
          height={256}
        />
        <h1 className="mt-4 text-3xl font-bold capitalize">{pokemon.name}</h1>
        <p className="text-gray-400">#{pokemon.id}</p>
        <div className="mt-4 flex gap-2">
          {pokemon.types.map((t) => (
            <span
              key={t.type.name}
              className="rounded-full border px-3 py-1 text-sm capitalize"
            >
              {t.type.name}
            </span>
          ))}
        </div>
        <p className="mt-4">
          Height: {pokemon.height / 10} m · Weight: {pokemon.weight / 10} kg
        </p>
      </div>
    </main>
  );
}
