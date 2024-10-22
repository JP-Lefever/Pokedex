import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handleClickNext = () => setPokemonIndex(pokemonIndex + 1);
  const handleClickPrevious = () => setPokemonIndex(pokemonIndex - 1);
  const displayButton = () => {
    if (pokemonIndex === 0) {
      return (
        <button type="button" onClick={handleClickNext}>
          Suivant
        </button>
      );
    }
    if (pokemonIndex >= pokemonList.length - 1) {
      return (
        <button type="button" onClick={handleClickPrevious}>
          Précedent
        </button>
      );
    }
    return (
      <>
        <button type="button" onClick={handleClickPrevious}>
          Précedent
        </button>
        <button type="button" onClick={handleClickNext}>
          Suivant
        </button>
      </>
    );
  };
  return (
    <div>
      <p>{pokemonIndex}</p>
      {displayButton()}
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
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
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];
export default App;
