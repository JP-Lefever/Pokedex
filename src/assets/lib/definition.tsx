export type Pokemon = {
  name: string;
  imgSrc?: string;
};

export type NavBarProps = {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
};
