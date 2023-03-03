import { View, Text, Modal, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";

function ConfirmDialog(props) {
  return (
    <Modal transparent visible={props.visible} animationType="fade">
      <View style={styles.dialogContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.text}>{props.text}</Text>
          <View style={styles.buttonContainer}>
            <CustomButton
              style={[styles.button, styles.confirmButton]}
              title={props.confirmText}
              textStyle={{ color: "white" }}
              onPress={props.onConfirm}
            />
            <CustomButton
              style={styles.button}
              title={props.cancelText}
              textStyle={{ color: "white" }}
              onPress={props.onCancel}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ConfirmDialog;

const styles = StyleSheet.create({
  dialogContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#20202086",
  },
  contentContainer: {
    backgroundColor: "#805ad9",
    alignItems: "center",
    rowGap: 16,
    padding: 20,
    paddingVertical: 24,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    columnGap: 14,
  },
  text: {
    color: "#dbdbdb",
    fontSize: 18,
  },
  button: {
    backgroundColor: "#425bbe",
    width: 130,
  },
  confirmButton: {
    backgroundColor: "#ea5454",
  },
});
