import { useState } from "react";
import type { NavBarProps } from "../assets/lib/definition";

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }: NavBarProps) {
  useState(pokemonIndex);

  return (
    <nav>
      {" "}
      {pokemonList.map((e, i) => (
        <button type="button" key={e.name} onClick={() => setPokemonIndex(i)}>
          {e.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
