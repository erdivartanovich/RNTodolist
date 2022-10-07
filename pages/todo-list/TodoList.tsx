import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import TodoInput from "../../components/TodoInput";
import { RootStackParamList } from "../../Navigation";
import { useTodo } from "../../store/todo/hooks";
import TodoEmptyItem from "./TodoEmptyItem";
import TodoItem from "./TodoListItem";

type Props = NativeStackScreenProps<RootStackParamList, "TodoList">;

const AppTodoList = ({ navigation }: Props) => {
  const { getTodoList, addTodo, todo, todoList, status } = useTodo();
  useEffect(() => {
    getTodoList();
  }, []);

  useEffect(() => {
    todo && navigation.navigate("TodoDetail", todo);
  }, [todo]);

  console.log("status now", status);
  console.log("todoList now", todoList);
  console.log("todo now", todo);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO LIST</Text>
      <FlatList
        data={todoList?.allTodos}
        renderItem={(itemInfo) => TodoItem(itemInfo, todoList)}
        ListEmptyComponent={TodoEmptyItem}
        keyExtractor={(id) => id}
      />
      <TodoInput addTodo={addTodo} />
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
