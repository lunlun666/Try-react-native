import { Text, StyleSheet, View } from "react-native";
import Colors from '../../constant/colors'

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export { Title };

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: 'white',
    borderWidth: 2,
    borderColor: Colors.accent500,
    textAlign: "center",
    padding: 12,
  },
});
