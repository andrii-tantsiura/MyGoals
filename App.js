import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import AddGoalDialog from "./components/AddGoalDialog";
import CustomButton from "./components/CustomButton";
import ConfirmDialog from "./components/ConfirmDialog";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isGoalAddVisible, setIsGoalAddVisible] = useState(false);
  const [currentGoalId, setCurrentGoalId] = useState(null);
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    useState(false);

  function startAddGoalHandler() {
    setIsGoalAddVisible(true);
  }

  function endAddGoalHandler() {
    setIsGoalAddVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {
        id: Math.random().toString(),
        isChecked: false,
        text: enteredGoalText,
      },
    ]);
    setIsGoalAddVisible(false);
  }

  function startDeleteGoalHandler(id) {
    setCurrentGoalId(id);
    setIsDeleteConfirmationVisible(true);
  }

  function endDeleteGoalHandler() {
    setIsDeleteConfirmationVisible(false);
  }

  function deleteGoalHandler() {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== currentGoalId);
    });

    setCurrentGoalId(null);
    setIsDeleteConfirmationVisible(false);
  }

  function changeCheckGoalHandler(id) {
    setGoals((currentGoals) => {
      const goalIndex = currentGoals.findIndex((goal) => goal.id === id);

      if (goalIndex > -1) {
        const goal = currentGoals[goalIndex];
        goal.isChecked = !goal.isChecked;

        currentGoals.splice(goalIndex, 1, goal);
      }

      return [...currentGoals];
    });
  }

  const goalItem = (itemData, index) => (
    <View>
      <GoalItem
        id={itemData.item.id}
        text={itemData.item.text}
        isChecked={itemData.item.isChecked}
        onChange={changeCheckGoalHandler}
        onDeleteItem={startDeleteGoalHandler}
      />
    </View>
  );

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <CustomButton
          title="Add New Goal"
          style={styles.button}
          textStyle={{ color: "white" }}
          onPress={startAddGoalHandler}
        />
        <AddGoalDialog
          visible={isGoalAddVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        <ConfirmDialog
          visible={isDeleteConfirmationVisible}
          text="Goal will be removed. Are you sure?"
          confirmText="Remove"
          cancelText="Cancel"
          onConfirm={deleteGoalHandler}
          onCancel={endDeleteGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={goalItem}
            keyExtractor={(item, index) => item.id}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
    flexDirection: "column",
  },
  button: {
    backgroundColor: "#9049ec",
    color: "white",
    marginBottom: 14,
  },
});
