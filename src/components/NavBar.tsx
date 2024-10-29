import PokemonCard from "./PokemonCard";

interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}

function NavBar({ pokemonIndex, pokemonList, setPokemonIndex }: NavBarProps) {
  /*const handleNext = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };*/

  return (
    <div className="container">
      {pokemonList.map((element, i) => (
        <li key={element.name}>
          <button
            onClick={() => {
              if (element.name.toLowerCase() === "pikachu") {
                alert("pika pikachu !!!");
              }
              setPokemonIndex(i);
            }}
          >
            {element.name}
          </button>
        </li>
      ))}
    </div>
  );
}

export default NavBar;
