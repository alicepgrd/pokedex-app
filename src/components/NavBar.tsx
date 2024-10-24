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
    <div>
      <button type="button" onClick={handlePrevious}>
        Précédent
      </button>
      <button type="button" onClick={handleNext}>
        Suivant
      </button>
    </div>
  );
}

export default NavBar;
