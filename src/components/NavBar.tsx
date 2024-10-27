import { useState } from "react";
import type { NavBarProps } from "../assets/lib/definition";

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }: NavBarProps) {
  useState(pokemonIndex);
  const pika = () => {
    if (pokemonIndex === 3) {
      alert("pika pikachu !!!");
    }
  };
  return (
    <nav>
      {pokemonList.map((e, i) => (
        <button type="button" key={e.name} onClick={() => setPokemonIndex(i)}>
          {e.name}
        </button>
      ))}
      {pika()}
    </nav>
  );
}

export default NavBar;
