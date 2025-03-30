import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onPressEvent.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

// export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 6,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  pressItem: {
    opacity: 0.5,
  },
});
