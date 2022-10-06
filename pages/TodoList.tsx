import { useEffect } from "react";
import { useTodo } from "../store/todo/hooks";
import { Text } from "react-native";

const TodoList = () => {
  const { getTodoList, todoList } = useTodo();
  useEffect(() => {
    getTodoList();
  }, []);

  console.log("**************", todoList);
  return <Text>todo list here</Text>;
};

export default TodoList;
