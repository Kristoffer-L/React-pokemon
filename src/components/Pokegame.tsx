import { useEffect, useState } from "react";
import type { Pokemon } from "../App";
import PokeDex from "./PokeDex";

interface PokeGameProps {
  pokemons: Pokemon[];
}

export default function PokeGame({ pokemons }: PokeGameProps) {
  const [count, setCount] = useState(0);

  const player1 = pokemons.sort(() => Math.random() - 0.5).slice(0, 4);
  const player2 = pokemons.sort(() => Math.random() - 0.5).slice(0, 4);

  const xp1 = player1.reduce(
    (acc, pokemon) => acc + pokemon.base_experience,
    0
  );
  const xp2 = player2.reduce(
    (acc, pokemon) => acc + pokemon.base_experience,
    0
  );

  const winner =
    xp1 === xp2
      ? "Tie"
      : xp1 > xp2
      ? "Player 1 is the winner!"
      : "Player 2 is the winner!";

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="poke-game" key={count}>
      <PokeDex hand={player1}>
        <p>{xp1}</p>
      </PokeDex>
      <h1>{winner}</h1>
      <PokeDex hand={player2}>
        <p>{xp2}</p>
      </PokeDex>
    </div>
  );
}
