import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";

function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPress,
}) {
  const navigation = useNavigation();

  const selectMealItemHandler = () => {
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  };

  return (
    <View style={styles.mealContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={selectMealItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>

        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealContainer: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 8,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    // in ios this setting will let shadow disappear
    overflow: Platform.OS === "ios" ? "visible" : "hidden",
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  button: {
    flex: 1,
  },
  // buttonPressed is for ios
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "700",
    margin: 8,
  },
});
