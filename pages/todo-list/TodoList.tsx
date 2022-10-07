import { useEffect } from "react";
import {
  FlatList,
  ListRenderItemInfo,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Todo from "../../components/Todo";
import TodoInput from "../../components/TodoInput";
import { useTodo } from "../../store/todo/hooks";
import { TodoList } from "../../store/todo/Todo";

const renderTodo = (
  { item: id, index }: ListRenderItemInfo<string>,
  todoList: TodoList
) => {
  const todo = todoList?.todos[id];
  return <Todo description={todo?.description} index={index + 1} />;
};

const AppTodoList = () => {
  const { getTodoList, saveTodo, todoList, success } = useTodo();
  useEffect(() => {
    getTodoList();
  }, []);

  console.log("success now", success);
  console.log("todoList now", todoList);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO LIST</Text>
      <FlatList
        data={todoList?.allTodos}
        renderItem={(itemInfo) => renderTodo(itemInfo, todoList)}
        keyExtractor={(id) => id}
      />
      <TodoInput saveTodo={saveTodo} />
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
