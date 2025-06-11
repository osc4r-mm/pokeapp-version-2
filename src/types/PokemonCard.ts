export interface PokemonCardProps {
  name: string;
  url: string;
  page: number;
  pageSize: number;
  view: "list" | "grid";
  imgSize?: number;
}