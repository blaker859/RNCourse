import { StyleSheet, View, Text, Pressable } from "react-native";

// pressable is the new way to make something pressable

// using props to pass data from Add.js
function GoalItem(props) {
  return (
    // importing functionality from the props and calling the function made in app.js
    // bind() is a way to preconfigure a function for future execution
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
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
