import { useState } from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameGreen() {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (value) => {
    setEnteredNumber(value);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const inputValue = parseInt(enteredNumber);

    if (isNaN(inputValue) || inputValue <= 0 || inputValue > 99) {
      Alert.alert("Invalid number!", "Number is must between 1 ~ 99.", [
        { text: 'okay', onPress: resetInputHandler },
      ]);
      return;
    }

    console.log('Number is valid.')
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType={"number-pad"}
        autoCapitalize={"none"}
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameGreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#3b021f",
    borderRadius: 8,
    // set shadow on ios or android
    // in android use elevation
    elevation: 8,
    // in ios use shadowColor, shadowOffset: {} ...
  },
  numberInput: {
    // padding: 2,
    height: 50,
    width: 50,
    fontSize: 20,
    borderBottomColor: "#ddb52f",
    borderWidth: 2,
    // borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
