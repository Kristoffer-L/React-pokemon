import { Pokemon } from "../App";
import PokeCard from "./PokeCard";

interface PokeDexProps {
  hand: Pokemon[];
  children: React.ReactNode;
}

export default function PokeDex({ hand, children }: PokeDexProps) {
  return (
    <div className="poke-dex">
      {hand.map((card) => (
        <PokeCard
          key={card.id}
          id={card.id}
          name={card.name}
          type={card.type}
          base_experience={card.base_experience}
          card_image={card.card_image}
        />
      ))}
      {children}
    </div>
  );
}
