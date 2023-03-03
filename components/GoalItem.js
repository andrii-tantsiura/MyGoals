import { View, Text, StyleSheet } from "react-native";
import CheckBox from "./CheckBox";
import CustomButton from "./CustomButton";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <CheckBox
        borderStyle={styles.checkBox.border}
        imageStyle={styles.checkBox.image}
        imageSource={require("../assets/images/check.png")}
        isChecked={props.isChecked}
        onChange={props.onChange.bind(this, props.id)}
      />
      <Text style={styles.goalText} numberOfLines={1}>
        {props.text}
      </Text>
      <CustomButton
        style={styles.customButton}
        textStyle={{ fontSize: 24, color: "#e96b6b", paddingRight: 4 }}
        title="x"
        onPress={props.onDeleteItem.bind(this, props.id)}
      />
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
    margin: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    flex: 1,
    color: "white",
    fontSize: 16,
  },
  customButton: {
    backgroundColor: "transparent",
  },
  checkBox: {
    border: {
      borderWidth: 2,
      borderRadius: 4,
      borderColor: "#aeabe6",
    },
    image: {
      tintColor: "#aeabe6",
    },
  },
});
