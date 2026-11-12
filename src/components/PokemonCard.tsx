

export default function PokemonCard({name} :{name:string}){
    return(
        <div className="border-2 p-4 rounded capitalize">
            {name}
        </div>
    )

}