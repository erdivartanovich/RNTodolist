import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  saveTodo: (description: string) => void;
};

const TodoInput = (props: Props) => {
  const [todo, setTodo] = useState<string | null>();

  const handleAddTodo = (description: string) => {
    props.saveTodo(description);
    setTodo(null);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TextInput
        style={styles.inputField}
        value={todo!}
        onChangeText={(text) => setTodo(text)}
        placeholder={"Create new todo"}
        placeholderTextColor={"#653002"}
      />
      <TouchableOpacity onPress={() => handleAddTodo(todo!)}>
        <View style={styles.button}>
          <MaterialIcons name="keyboard-arrow-up" size={24} color="black" />
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

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

export default TodoInput;
