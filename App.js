// importing state management from React
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  // standard syntax for using state
  // setting the enteredGoalText "state" with the setEnteredGoalText function
  const [enteredGoalText, setEnteredGoalText] = useState("");

  //initialized with an empty array because we will want an array of goals later
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    // listing all existing course goals and then appending the newly enteredGoalText
    // setCourseGoals([...courseGoals, enteredGoalText]);
    //recommended approach to updating state and then outputting it
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal!"
          // if you put () then it will be executed right away when loaded
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
        {/* buttons do not have onClick */}
        {/* buttons do not have a style prop you */}
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal) => (
          // must add a view to round the corners of the container on iPhone
          //should add key prop when outputting items of a list
          <View key={goal} style={styles.goalItem}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

// styles do not cascade
const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", //to center the text on the button instead of stretch
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
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
