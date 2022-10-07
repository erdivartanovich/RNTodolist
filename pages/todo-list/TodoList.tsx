import { useEffect } from "react";
import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import TodoInput from "../../components/TodoInput";
import { useTodo } from "../../store/todo/hooks";
import TodoEmptyItem from "./TodoEmptyItem";
import TodoItem from "./TodoListItem";

const AppTodoList = () => {
  const { getTodoList, addTodo, todoList, status } = useTodo();
  useEffect(() => {
    getTodoList();
  }, []);

  console.log("status now", status);
  console.log("todoList now", todoList);
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
    marginTop: StatusBar.currentHeight || 0,
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
