// importing state management from React
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  // standard syntax for using state
  // setting the enteredGoalText "state" with the setEnteredGoalText function
  const [enteredGoalText, setEnteredGoalText] = useState("");

  //initialized with an empty array because we will want an array of goals later
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  // function for ScrollView List
  // function addGoalHandler() {
  //   // listing all existing course goals and then appending the newly enteredGoalText
  //   // setCourseGoals([...courseGoals, enteredGoalText]);
  //   //recommended approach to updating state and then outputting it
  //   setCourseGoals((currentCourseGoals) => [
  //     ...currentCourseGoals,
  //     enteredGoalText,
  //   ]);
  // }

  //making each list item an object with a text and key property
  // flatlist already looks for a key property
  // function addGoalHandler() {
  //   setCourseGoals((currentCourseGoals) => [
  //     ...currentCourseGoals,
  //     { text: enteredGoalText, key: Math.random().toString() },
  //   ]);
  // }

  // if we are taking data from an API and the "key" is set to a different name
  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  // scrolling is not default
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
      {/* creating a new view to hold the scrollview, to format the flex property*/}
      <View style={styles.goalsContainer}>
        {/* makes content scrollable */}
        {/* alwaysBounceVertical set to false makes the content only bounce once there is enough content overflow */}
        {/* ScrollView will always render all of its elements so if there is a large list this will cause performance issues */}

        {/* <ScrollView alwaysBounceVertical={false}>
          {courseGoals.map((goal) => (
            // must add a view to round the corners of the container on iPhone
            //should add key prop when outputting items of a list
            <View key={goal} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView> */}

        {/* Flatlist will only render items as needed with a small threshhold */}
        {/* Calls renderItem function whenever it determines new items will need to be rendered */}
        {/* ideally a list of objects */}
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
          // called to get a key out of every item: "API reference above"
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
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
