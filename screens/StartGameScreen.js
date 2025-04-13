import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  Dimensions,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constant/colors";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Title } from "../components/ui/FontStyle";

function StartGameGreen({ onPickedNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");
  const { width, height } = useWindowDimensions();

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
        { text: "okay", onPress: resetInputHandler },
      ]);
      return;
    }

    onPickedNumber(inputValue);
  };

  const marginTopDistance = width < 450 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      {/* scrollView & keyboardAvoidingView is work on ios device,
       prevent keyboard will overlay on content */}
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
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
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameGreen;

const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    // marginTop: deviceHeight < 450 ? 30 : 100,
    alignItems: "center",
  },
  numberInput: {
    // padding: 2,
    height: 50,
    width: 50,
    fontSize: 20,
    borderBottomColor: Colors.accent500,
    borderWidth: 2,
    // borderBottomWidth: 2,
    color: Colors.accent500,
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
