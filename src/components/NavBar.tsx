import { useState } from "react";
import pokemonListData from "../assets/data/pokemonList.json";
import type { NavBarProps } from "../assets/lib/definition";

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }: NavBarProps) {
	useState(pokemonIndex);
	const handleClickNext = () => setPokemonIndex(pokemonIndex + 1);
	const handleClickPrevious = () => setPokemonIndex(pokemonIndex - 1);
	pokemonListData;
	return (
		<nav>
			{pokemonIndex > 0 && (
				<button type="button" onClick={handleClickPrevious}>
					Précedent
				</button>
			)}
			{pokemonIndex < pokemonList.length - 1 && (
				<button type="button" onClick={handleClickNext}>
					Suivant
				</button>
			)}
		</nav>
	);
}

export default NavBar;
