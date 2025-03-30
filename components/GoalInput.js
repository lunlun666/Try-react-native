import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

function GoalInput(props) {
  const [enterGoalText, setEnterGoalText] = useState("");

  const goalInputHandler = (enterText) => {
    // console.log(enterText)
    setEnterGoalText(enterText);
  };

  const addGoalHandler = () => {
    props.onPressEvent(enterGoalText);
    setEnterGoalText('')
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal"
        onChangeText={goalInputHandler}
        value={enterGoalText}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
  },
  textInput: {
    width: "70%",
    padding: 8,
    borderWidth: 1,
  },
});
