import { StyleSheet, View } from "react-native";
import Colors from "../../constant/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    // set shadow on ios or android
    // in android use elevation
    elevation: 8,
    // in ios use shadowColor, shadowOffset: {} ...
  },
});
