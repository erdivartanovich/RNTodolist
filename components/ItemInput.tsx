import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  addItem: (description: string) => void;
  description?: string;
};

const ItemInput = React.forwardRef<TextInput, Props>(
  ({ description, addItem }: Props, ref) => {
    const [text, setText] = useState<string | undefined>(description);

    const handleAddTodo = (text: string) => {
      addItem(text);
      setText("");
    };

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TextInput
          ref={ref}
          style={styles.inputField}
          defaultValue={description}
          value={text}
          onChangeText={setText}
          placeholder={"Add new todo"}
          placeholderTextColor={"#916B4A"}
        />
        <TouchableOpacity onPress={() => handleAddTodo(text!)}>
          <View style={styles.button}>
            <MaterialIcons name="keyboard-arrow-up" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    borderColor: "#fff",
    backgroundColor: "#FDB87C",
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    position: "absolute",
    bottom: 20,
  },
  inputField: {
    color: "#653002",
    height: 50,
    flex: 1,
  },
  button: {
    height: 30,
    width: 30,
    borderRadius: 5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ItemInput;
