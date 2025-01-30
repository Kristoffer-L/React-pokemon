import type { Pokemon } from "../App";

export default function PokeCard({
  name,
  card_image,
}: Omit<Pokemon, "id" & "base_experience">) {
  return (
    <div className="pokemon-card">
      <img src={card_image} alt={name} />
    </div>
  );
}
