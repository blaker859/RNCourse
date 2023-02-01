import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  // manually calling props.onAddGoal so that we have acess to the values each press
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    // setting enteredGoalText to an empty string on the button press
    // not binded yet this is only one way binding as of right now
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal!"
          // if you put () then it will be executed right away when loaded
          onChangeText={goalInputHandler}
          // binding the value to the empty "enteredGoalText"
          // completing two way binding
          value={enteredGoalText}
        />

        <Button title="Add Goal" onPress={addGoalHandler} />
        {/* buttons do not have onClick */}
        {/* buttons do not have a style prop you */}
      </View>
    </Modal>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
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
});
