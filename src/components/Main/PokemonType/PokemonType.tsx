import { SyntheticEvent } from "react";
import { pokemonTypes } from "../../../pokemonTypes";
// import * as C from "./styles";

type PokemonTypeProps = {
  type: string;
  tabIndex: boolean;
  handleClick?: (e: SyntheticEvent) => void;
};

export const PokemonType = (props: PokemonTypeProps) => {
  const [{ name, color }] = pokemonTypes.filter(
    (item) => item.name === props.type
  );

};
