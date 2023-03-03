import { Pressable, Text, StyleSheet } from "react-native";

function CustomButton(props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        props.style,
        pressed && [styles.pressedButton, props.pressedStyle],
      ]}
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
