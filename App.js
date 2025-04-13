import { StyleSheet, ImageBackground, Text, SafeAreaView } from "react-native";
import { useState } from "react";
import { useFonts } from "expo-font";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
("./screens/GameScreen");
import Colors from "./constant/colors";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState("");
  const [gameOver, setGameOver] = useState(true);
  const [roundsNumber, setRoundsNumber] = useState('');

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans=bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  // todo
  // If want to check fonts is loaded, can use expo-splash-screen

  const setPickedNumberHandler = (pickedNumberValue) => {
    setPickedNumber(pickedNumberValue);
    setGameOver(false);
  };

  const gameOverHandle = (totalGuessRounds) => {
    setRoundsNumber(totalGuessRounds)
    setGameOver(true);
  };

  const onStartNewGame = () => {
    setPickedNumber(null);
    setRoundsNumber(0);
  };

  const screenChange = () => {
    if (!pickedNumber && gameOver) {
      return <StartGameScreen onPickedNumber={setPickedNumberHandler} />;
    }

    if (gameOver) {
      return (
        <GameOverScreen
          roundsNumber={roundsNumber}
          pickupNumber={pickedNumber}
          onStartNewGame={onStartNewGame}
        />
      );
    }

    return (
      <GameScreen
        pickedNumber={pickedNumber}
        onGameOver={gameOverHandle}
      />
    );
  };

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode={"cover"}
        style={styles.rootScreen}
        imageStyle={styles.backgroundImages}
      >
        <SafeAreaView style={styles.rootScreen}>{screenChange()}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImages: {
    opacity: 0.15,
  },
});
