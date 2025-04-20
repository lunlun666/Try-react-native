import { useEffect, useLayoutEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";

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
  // console.log("meals ", meals);

  const renderMealItem = (itemData) => {
    const item = itemData.item;
    const mealProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    return <MealItem {...mealProps} />;
  };

  return (
    <FlatList
      data={meals}
      renderItem={renderMealItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default MealsOverviewScreen;
