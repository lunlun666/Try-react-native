import { Text, StyleSheet, View } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export { Title };

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'white',
    borderWidth: 2,
    borderColor: 'white',
    textAlign: "center",
    padding: 12,
  },
});
