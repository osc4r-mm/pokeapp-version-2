export interface PokemonSprites {
  front_default: string;
  [key: string]: string | null;
}

export interface PokemonDetailData {
  name: string;
  sprites: PokemonSprites;
}