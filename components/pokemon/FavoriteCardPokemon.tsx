import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { FC } from "react";

type Props = {
  idPokemon: number;
};

export const FavoriteCardPokemon: FC<Props> = ({ idPokemon }) => {
  const router = useRouter();

  const onFavoriteClicked = () => {
    router.push(`/pokemon/${idPokemon}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1} onClick={onFavoriteClicked}>
      <Card hoverable clickable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idPokemon}.svg`}
          width={"100%"}
          height={140}
        />
      </Card>
    </Grid>
  );
};
