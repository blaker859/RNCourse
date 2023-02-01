import { StyleSheet, View, Text } from "react-native";

// using props to pass data from Add.js
function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    // will not round corners in text on iPhones without creating a view
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    // color: "white",
  },
  goalText: {
    color: "white",
  },
});
