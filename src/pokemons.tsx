interface Pokemon {
    id: number,
    name: string,
    type: string,
    base_experience: number
  }

  function PokemonCard({ name, type, base_experience }: Pokemon) {
    return (
      <div className="pokemon-card">
        <h2>{name}</h2>
        <p>Type: {type}</p>
        <p>XP: {base_experience}</p>
      </div>
    );
  }

  export default PokemonCard