import "./App.css";
import type { Pokemon } from "./assets/lib/definition";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import PokemonListData from "./assets/data/pokemonList.json";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const pokemonList: Pokemon[] = PokemonListData;
  useEffect(() => {
    alert("hello pokemon trainer :)");
  }, []);

  return (
    <>
      <NavBar
        pokemonIndex={pokemonIndex}
        setPokemonIndex={setPokemonIndex}
        pokemonList={PokemonListData}
      />

      <PokemonCard
        imgSrc={pokemonList[pokemonIndex].imgSrc}
        name={pokemonList[pokemonIndex].name}
      />
    </>
  );
}

export default App;
