import "./App.css";
import PokeGame from "./components/PokeGame";
import pokemons from "./pokemon.json";

export interface Pokemon {
  id: number;
  name: string;
  type: string;
  base_experience: number;
  card_image: string;
}

export default function App() {
  return <PokeGame pokemons={pokemons} />;
}
