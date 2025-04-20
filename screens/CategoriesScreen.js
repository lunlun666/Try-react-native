import { FlatList, Text } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  console.log("CATEGORIES =>", CATEGORIES);

  function renderCategoryItem(itemData) {
    const pressHandler = () => {
      navigation.navigate("MealsOverviewScreen", {
        categoryId: itemData.item.id,
      });
    };

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={"2"}
    />
  );
}

export default CategoriesScreen;
