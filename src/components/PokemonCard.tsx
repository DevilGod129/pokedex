import Image from "next/image";
import Link from "next/link";

type Props = { name: string; id: number };

export default function PokemonCard({ name, id }: Props) {
  return (
    <Link
      href={`/pokemon/${name}`}
      className="border-2 rounded p-4 flex flex-col items-center hover:bg-gray-800"
    >
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
        width={96}
        height={96}
      />
      <p className="text-gray-400 text-sm">#{id}</p>
      <p className="capitalize font-semibold">{name}</p>
    </Link>
  );
}