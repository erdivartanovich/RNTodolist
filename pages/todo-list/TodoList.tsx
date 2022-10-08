import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import EmptyItem from "../../components/EmptyItem";
import ItemInput from "../../components/ItemInput";
import { RootStackParamList } from "../../Navigation";
import { useTodo } from "../../store/todo/hooks";
import TodoItem from "./TodoListItem";

type Props = NativeStackScreenProps<RootStackParamList, "TodoList">;

const AppTodoList = ({ navigation }: Props) => {
  const {
    getTodoList,
    addTodo,
    saveTodo,
    selectTodo,
    todoList,
    selectedTodo,
    status,
  } = useTodo();

  useEffect(() => {
    getTodoList();
  }, [selectedTodo]);

  useEffect(() => {
    console.log("todo now", selectedTodo);
    if (selectedTodo) {
      navigation.navigate("TodoDetail", { title: "Manage Todo" });
    }
  }, [selectedTodo]);

  console.log("status now", status);
  console.log("todoList now", todoList);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO LIST</Text>
      <FlatList
        data={todoList}
        renderItem={({ item: todo, index }) =>
          TodoItem({
            index,
            todo,
            onPress: () => {
              selectTodo(todo);
            },
          })
        }
        ListEmptyComponent={
          <EmptyItem description="Your todos still empty, add one!" />
        }
        keyExtractor={(todo) => todo.id}
      />
      <ItemInput addItem={addTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF7700",
  },
  heading: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
});

export default AppTodoList;
