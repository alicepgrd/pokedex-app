import "./App.css";
import { useState } from "react";
import PokemonCard from "./components/PokemonCard";

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleNext = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  return (
    <>
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </div>
      <div>
        <p>{pokemonIndex}</p>
        <button type="button" onClick={handleNext}>
          Suivant
        </button>
        <button type="button" onClick={handlePrevious}>
          Précédent
        </button>
      </div>
    </>
  );
}

export default App;
