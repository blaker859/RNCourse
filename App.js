// importing state management from React
import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  // standard syntax for using state
  // setting the enteredGoalText "state" with the setEnteredGoalText function
  // now needed in the GoalInput Component
  // const [enteredGoalText, setEnteredGoalText] = useState("");

  //initialized with an empty array because we will want an array of goals later
  const [courseGoals, setCourseGoals] = useState([]);

  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  // exporting functionality to GoalInput.js
  // function goalInputHandler(enteredText) {
  //   setEnteredGoalText(enteredText);
  // }

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
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  // creating a delete goal function
  // receiving the id of the item to be deleted
  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => {
        goal.id !== id;
      });
    });
  }

  // scrolling is not default
  return (
    <View style={styles.appContainer}>
      {/* if you want to style your own button you must build your own button */}
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      {modalIsVisible && (
        // using built in Props from modal naming it visible and checking modalIsVisible state from above
        <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} />
      )}

      {/* exporting functionality to GoalInput.js */}

      {/* <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal!"
          // if you put () then it will be executed right away when loaded
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
        {/* buttons do not have onClick */}
      {/* buttons do not have a style prop you */}
      {/* </View> */}

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
            // passing data back from GoalItem
            return (
              <GoalItem
                text={itemData.item.text}
                // setting item id so we can find it with the delete function
                //also binding data from goalitem.js
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          // keyExtractor called to get a key out of every item: "API reference above"
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
  goalsContainer: {
    flex: 5,
  },
});
