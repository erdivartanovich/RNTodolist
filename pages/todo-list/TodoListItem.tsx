import { ListRenderItemInfo } from "react-native";
import Todo from "../../components/Todo";
import { TodoList } from "../../store/todo/Todo";

const TodoItem = (
  { item: id, index }: Partial<ListRenderItemInfo<string>>,
  todoList: TodoList
) => {
  const todo = todoList?.todos[id!];
  return <Todo description={todo?.description} index={index! + 1} />;
};

export default TodoItem;
