import { use, useState, useEffect } from "react";
import { Text, StyleSheet, View, Alert } from "react-native";
import { Title } from "../components/ui/FontStyle";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  // Math.random 0.00 ~ 0.99, so it need to plus min
  const generateValue = Math.floor(Math.random() * (max - min) + min);
  // console.log('generateValue =>', generateValue)
  if (exclude === generateValue) {
    generateRandomBetween(min, max, exclude);
  } else {
    return generateValue;
  }
}

let minRndNumber = 1;
let maxRndNumber = 100;

function GameScreen({ pickedNumber, onGameOver }) {
  const initialGuessValue = generateRandomBetween(
    minRndNumber,
    maxRndNumber,
    pickedNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuessValue);

  useEffect(() => {
    console.log('execute useEffect', currentGuess)
    if(pickedNumber === currentGuess) {
      onGameOver()
    }
  }, [currentGuess, pickedNumber])

  const generateNewNumber = (direction) => {
    // direction === lower or higher
    if (
      (direction === "lower" && currentGuess < pickedNumber) ||
      (direction === "higher" && currentGuess > pickedNumber)
    ) {
      Alert.alert("Can not do this", "You can not do this.", [
        { text: "Back", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxRndNumber = currentGuess;
    } else {
      minRndNumber = currentGuess + 1;
    }

    const newNumber = generateRandomBetween(
      minRndNumber,
      maxRndNumber,
      currentGuess
    );
    setCurrentGuess(newNumber);
  };

  return (
    <View style={styles.screens}>
      <Title>Opponent's guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <PrimaryButton onPress={generateNewNumber.bind(this, "lower")}>
          -
        </PrimaryButton>
        <PrimaryButton onPress={generateNewNumber.bind(this, "higher")}>
          +
        </PrimaryButton>
      </View>
      <View>
        <Text>show log rounds</Text>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screens: {
    flex: 1,
    padding: 12,
  },
});
