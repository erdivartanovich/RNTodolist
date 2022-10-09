import Todo from "../../components/Todo";
import { Todo as TodoInterface } from "../../store/todo/Todo";

const TodoItem = (params: {
  index: number;
  todo: TodoInterface;
  onSelect: () => void;
  onDelete: () => void;
}) => {
  const { index, todo, onSelect, onDelete } = params;
  return (
    <Todo
      description={todo?.description}
      index={index! + 1}
      onSelect={onSelect}
      onDelete={onDelete}
    />
  );
};

export default TodoItem;
