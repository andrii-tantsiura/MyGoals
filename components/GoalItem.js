import { View, Text, StyleSheet } from "react-native";
import CheckBox from "./CheckBox";
import CustomButton from "./CustomButton";

function GoalItem(props) {
  return (
    <View style={[styles.itemContainer, props.isChecked && styles.checked]}>
      <CheckBox
        borderStyle={styles.checkBox.border}
        imageStyle={styles.checkBox.image}
        imageSource={require("../assets/images/check.png")}
        isChecked={props.isChecked}
        onChange={props.onChange.bind(this, props.id)}
      />
      <Text
        style={[styles.text, props.isChecked && styles.checkedText]}
        numberOfLines={1}
      >
        {props.text}
      </Text>
      <CustomButton
        style={styles.customButton}
        textStyle={styles.customButtonText}
        title="x"
        onPress={props.onDeleteItem.bind(this, props.id)}
      />
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
    margin: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  checked: {
    opacity: 0.45,
  },
  pressedItem: {
    opacity: 0.8,
  },
  text: {
    flex: 1,
    color: "white",
    fontSize: 16,
  },
  checkedText: {
    textDecorationLine: "line-through",
  },
  customButton: {
    backgroundColor: "transparent",
  },
  customButtonText: {
    fontSize: 24,
    color: "#e96b6b",
    paddingRight: 4,
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
