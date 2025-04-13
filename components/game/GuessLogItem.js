import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constant/colors";

function GuessLogItem({ guessRoundIndex, guess }) {
  return (
    <View style={styles.textContainer}>
      <Text>#{guessRoundIndex}</Text>
      <Text>Opponent's Guess: {guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    marginVertical: 8,
    padding: 12,
    backgroundColor: Colors.accent500,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 24,
    justifyContent: "space-between",
    alignItems: "center",
    width: '100%'
  },
});
