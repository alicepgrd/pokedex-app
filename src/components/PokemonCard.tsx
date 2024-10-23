function PokemonCard({ pokemon }) {
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

export default PokemonCard;
