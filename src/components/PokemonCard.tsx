import type { Pokemon } from "../assets/lib/definition";

function PokemonCard({ name, imgSrc }: Pokemon) {
	return (
		<figure>
			{imgSrc ? <img src={imgSrc} alt={name} /> : <p>???</p>}
			<h2>{name.toUpperCase()}</h2>
		</figure>
	);
}

export default PokemonCard;
