import { Pressable, Text, StyleSheet, View } from "react-native";

function CustomButton(props) {
  function getButtonStyle(pressed) {
    return pressed
      ? [styles.button, props.style, styles.pressedButton, props.pressedStyle]
      : [styles.button, props.style];
  }

  return (
    <Pressable
      style={({ pressed }) => getButtonStyle(pressed)}
      onPress={props.onPress}
    >
      <Text style={[styles.text, props.textStyle]}>{props.title}</Text>
    </Pressable>
  );
}

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ccc",
    alignItems: "center",
    borderRadius: 4,
  },
  pressedButton: {
    opacity: 0.75,
  },
  text: {
    fontSize: 16,
    color: "black",
    padding: 8,
  },
});
