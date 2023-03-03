import { View, Text, StyleSheet, Pressable } from "react-native";
import CustomButton from "./CustomButton";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text numberOfLines={1} style={styles.goalText}>
        {props.text}
      </Text>
      <CustomButton
        title="x"
        style={{ backgroundColor: "transparent" }}
        textStyle={{ fontSize: 24, color: "#e96b6b" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      />
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 4,
    paddingHorizontal: 4,
    borderRadius: 6,
    flexDirection: "row",
    backgroundColor: "#5e0acc",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    flex: 1,
    color: "white",
    padding: 8,
    fontSize: 16,
  },
});
