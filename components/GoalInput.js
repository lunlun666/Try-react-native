import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enterGoalText, setEnterGoalText] = useState("");

  const goalInputHandler = (enterText) => {
    // console.log(enterText)
    setEnterGoalText(enterText);
  };

  const addGoalHandler = () => {
    props.onAddEvent(enterGoalText);
    setEnterGoalText("");
  };

  const closeModal = () => {
    props.onCancelEvent();
  };

  return (
    <Modal visible={props.modalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={enterGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={addGoalHandler}
              color={"#b180f0"}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={closeModal} color={"#f31282"} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    width: "100%",
    padding: 16,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 16,
  },
});
