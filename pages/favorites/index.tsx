import { useEffect, useState } from "react";

import { Layout } from "../../components/layouts";
import { FavoritePokemons } from "../../components/pokemon";
import { NoFavorites } from "../../components/ui";
import { localFavorites } from "../../utils";

export const Favorites = () => {
  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setfavoritePokemons(localFavorites.pokemons);
  }, []);

  return (
    <Layout title="Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default Favorites;
