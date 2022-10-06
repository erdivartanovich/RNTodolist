import { useEffect } from "react";
import { FlatList, StatusBar, StyleSheet, View } from "react-native";
import Todo from "../components/Todo";
import { useTodo } from "../store/todo/hooks";

const TodoList = () => {
  const { getTodoList, todoList } = useTodo();
  useEffect(() => {
    getTodoList();
  }, []);

  const renderTodo = ({ item: id }: { item: string }) => {
    const todo = todoList?.todos[id];
    return <Todo description={todo?.description} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={todoList?.allTodos}
        renderItem={renderTodo}
        keyExtractor={(id) => id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default TodoList;
