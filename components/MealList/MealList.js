import { FlatList, StyleSheet, Text } from "react-native";
import MealItem from "./MealItem";

function MealList({ items }) {
  const renderMealItem = (itemData) => {
    const item = itemData.item;
    const mealProps = {
      id: item.id,
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
      data={items}
      renderItem={renderMealItem}
      keyExtractor={(item) => item.id}
    />
    // <Text>123</Text>
  );
}

export default MealList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
