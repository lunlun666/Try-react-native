import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoriteContextProvider({ children }) {
  const [favoriteMealsId, setFavoriteId] = useState([]);

  const addFavorite = (id) => {
    setFavoriteId((currentFavoritesId) => [...currentFavoritesId, id]);
  };

  const removeFavorite = (id) => {
    setFavoriteId((currentFavoritesId) =>
      currentFavoritesId.filter((mealId) => mealId !== id)
    );
  };

  const value = {
    ids: favoriteMealsId,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContextProvider;
