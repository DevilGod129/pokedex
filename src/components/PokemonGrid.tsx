"use client";

import { useState } from "react";
import PokemonCard from "@/components/PokemonCard";

type Pokemon = { name: string; url: string };

export default function PokemonGrid({ pokemons }: { pokemons: Pokemon[] }) {
  const [query, setQuery] = useState("");

  const filtered = pokemons.filter((p) =>
    p.name.includes(query.trim().toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Pokémon..."
        className="mt-6 w-full rounded border-2 bg-transparent p-3"
      />
      {filtered.length === 0 ? (
        <p className="mt-6 text-gray-400">No Pokémon found.</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 mt-6 sm:grid-cols-3 md:grid-cols-4">
          {filtered.map((pokemon) => {
            const id = Number(pokemon.url.split("/").at(-2));
            return (
              <PokemonCard key={pokemon.name} name={pokemon.name} id={id} />
            );
          })}
        </div>
      )}
    </>
  );
}