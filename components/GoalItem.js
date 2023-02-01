import { StyleSheet, View, Text, Pressable } from "react-native";

// pressable is the new way to make something pressable

// using props to pass data from Add.js
function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      {/* // importing functionality from the props and calling the function made in
      app.js // bind() is a way to preconfigure a function for future execution */}
      <Pressable
        android_ripple={{ color: "#dddd" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        // object destructing to get access to the "pressed" property provided by pressable
        style={({ pressed }) => {
          pressed && styles.pressedItem;
        }}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    // will not round corners in text on iPhones without creating a view
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    // color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
