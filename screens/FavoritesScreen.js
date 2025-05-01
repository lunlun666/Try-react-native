import { useContext } from "react";
import { StyleSheet, View, Text } from 'react-native'
import { FavoriteContext } from "../store/context/favorite-context";
import MealList from "../components/MealList/MealList";

import { MEALS } from "../data/dummy-data";

function FavoritesScreen() {
  const favoriteCtx = useContext(FavoriteContext);
  const favoriteMeals = MEALS.filter((meal) => favoriteCtx.ids.includes(meal.id));

  console.log("favoriteMeals ", favoriteMeals);
  console.log("favoriteCtx.ids ", favoriteCtx.ids);

  if(favoriteMeals.length === 0) {
    return <View style={styles.rootContainer}>
      <Text style={styles.text}>You have no favorite meals yet.</Text>
    </View>
  }

  return <MealList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
})