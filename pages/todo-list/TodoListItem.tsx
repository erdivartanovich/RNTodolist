import { ListRenderItemInfo } from "react-native";
import Todo from "../../components/Todo";
import { TodoList } from "../../store/todo/Todo";

const TodoItem = (params: {
  item: Partial<ListRenderItemInfo<string>>;
  todoList: TodoList;
  onPress: () => void;
}) => {
  const {
    item: { item: id, index },
    todoList,
    onPress,
  } = params;
  const todo = todoList?.todos[id!];
  return (
    <Todo
      description={todo?.description}
      index={index! + 1}
      onPress={onPress}
    />
  );
};

export default TodoItem;
