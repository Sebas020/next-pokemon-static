import { Grid } from "@nextui-org/react";
import { FC } from "react";
import { FavoriteCardPokemon } from "./FavoriteCardPokemon";

type Props = {
  pokemons: number[];
};

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify={"flex-start"}>
      {pokemons.map((id) => (
        <FavoriteCardPokemon idPokemon={id} key={id} />
      ))}
    </Grid.Container>
  );
};
