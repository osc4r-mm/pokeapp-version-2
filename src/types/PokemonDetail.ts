export interface PokemonSprites {
  front_default: string;
  [key: string]: string | null;
}

export interface PokemonDetailProps {
  name: string;
  sprites: PokemonSprites;
}