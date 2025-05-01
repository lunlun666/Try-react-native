import { useEffect, useLayoutEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList/MealList";

function MealsOverviewScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  const catId = route.params.categoryId;
  const category = CATEGORIES.find((item) => item.id === catId);
  // console.log("MEALS =>", MEALS.length);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: category.title,
    });
  }, [category]);

  const meals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.includes(catId);
  });

  return <MealList items={meals} />;
}

export default MealsOverviewScreen;
