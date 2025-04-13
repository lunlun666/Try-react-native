import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constant/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height
console.log('Dimensions ', Dimensions.get('window'))
console.log('Dimensions ', deviceWidth, ' ',deviceWidth<400)

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
    padding: deviceWidth < 450 ? 12 : 24,
    margin: deviceWidth < 450 ? 12 : 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: 'bold'
  },
});
