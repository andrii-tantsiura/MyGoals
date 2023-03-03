import { Pressable, StyleSheet, Image } from "react-native";
import React from "react";

function CheckBox(props) {
  return (
    <Pressable
      style={[styles.container, props.borderStyle]}
      onPress={props.onChange}
    >
      {props.isChecked && (
        <Image
          style={[styles.image, props.imageStyle]}
          source={props.imageSource}
        ></Image>
      )}
    </Pressable>
  );
}

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "white",
    width: 24,
    height: 24,
  },
  image: {
    width: 18,
    height: 18,
    tintColor: "white",
  },
});
