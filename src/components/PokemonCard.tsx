function PokemonCard() {
  const pokemon = pokemonList[0];
  return (
    <div>
      <figure>
        {pokemon.imgSrc ? (
          <img src={pokemon.imgSrc} alt="imagecarte"></img>
        ) : (
          <p>???</p>
        )}

        <figcaption>{pokemon.name}</figcaption>
      </figure>
    </div>
  );
}

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

export default PokemonCard;
