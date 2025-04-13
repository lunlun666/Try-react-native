import { use, useState, useEffect } from "react";
import { Text, StyleSheet, View, Alert, FlatList } from "react-native";
import MaterialIcons from "@expo/vector-icons/Ionicons";
import { Title } from "../components/ui/FontStyle";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  // console.log("min ", min, " max ", max, " exclude ", exclude);
  if (min === exclude || max === min) return;
  // Math.random 0.00 ~ 0.99, so it need to plus min
  const generateValue = Math.floor(Math.random() * (max - min) + min);
  console.log("generateValue =>", generateValue);
  if (exclude === generateValue) {
    generateRandomBetween(min, max, exclude);
  } else {
    return generateValue;
  }
}

let minRndNumber = 1;
let maxRndNumber = 100;

function GameScreen({ pickedNumber, onGameOver }) {
  const initialGuessValue = generateRandomBetween(1, 100, pickedNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuessValue);
  const [guessRounds, setGuessRounds] = useState([initialGuessValue]);

  useEffect(() => {
    console.log("execute useEffect", currentGuess);
    if (pickedNumber === currentGuess) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, pickedNumber]);

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
    setGuessRounds((currentGuess) => [newNumber, ...currentGuess]);
    console.log(guessRounds);
  };

  const guessRoundsLength = guessRounds.length;

  return (
    <View style={styles.screens}>
      <Title>Opponent's guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => generateNewNumber("lower")}>
              <MaterialIcons name={"remove"} size={"24"} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={generateNewNumber.bind(this, "higher")}>
              <MaterialIcons name={"add"} size={"24"} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.logContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => {
            return (
              <GuessLogItem
                guess={itemData.item}
                guessRoundIndex={guessRoundsLength - itemData.index}
              />
            );
          }}
          keyExtractor={(item) => item}
        />
        {/* {guessRounds.map((guessNumber) => <Text key={guessNumber}>{guessNumber}</Text>)} */}
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screens: {
    flex: 1,
    padding: 12,
    marginTop: 100,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  logContainer: {
    flex: 1,
    padding: 16,
  },
});
