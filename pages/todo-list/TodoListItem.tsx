import Todo from "../../components/Todo";
import { Todo as TodoInterface } from "../../store/todo/Todo";

const TodoItem = (params: {
  index: number;
  todo: TodoInterface;
  onPress: () => void;
}) => {
  const { index, todo, onPress } = params;
  return (
    <Todo
      description={todo?.description}
      index={index! + 1}
      onPress={onPress}
    />
  );
};

export default TodoItem;
