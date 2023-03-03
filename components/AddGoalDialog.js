import { useState } from "react";
import { View, TextInput, StyleSheet, Modal, Image } from "react-native";

import CustomButton from "./CustomButton";

function AddGoalDialog(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [canAddGoal, setCanAddGoal] = useState(false);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
    setCanAddGoal(false);
  }

  function addGoalHandler() {
    if (enteredGoalText) {
      props.onAddGoal(enteredGoalText);

      setEnteredGoalText("");
    } else {
      setCanAddGoal(true);
    }
  }

  function cancelHandler() {
    setEnteredGoalText("");
    setCanAddGoal(false);
    props.onCancel();
  }

  return (
    <Modal visible={props.visible} animationType={"slide"}>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal_1.png")}
        />
        <TextInput
          style={[styles.textInput, canAddGoal && styles.wrongTextInput]}
          autoFocus={true}
          placeholder="Your course goal!"
          value={enteredGoalText}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Add Goal"
            textStyle={{ color: "white" }}
            style={[
              styles.customButton,
              {
                backgroundColor: "#5E0acc",
              },
            ]}
            onPress={addGoalHandler}
          />
          <CustomButton
            title="Cancel"
            textStyle={{ color: "white" }}
            style={[
              styles.customButton,
              {
                backgroundColor: "#f31282",
              },
            ]}
            onPress={cancelHandler}
          />
        </View>
      </View>
    </Modal>
  );
}

export default AddGoalDialog;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 26,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 6,
    color: "#120438",
    width: "100%",
    borderWidth: 2,
    padding: 12,
    margin: 1,
  },
  wrongTextInput: {
    borderColor: "red",
  },
  customButton: {
    width: "40%",
    marginHorizontal: 8,
  },
});
