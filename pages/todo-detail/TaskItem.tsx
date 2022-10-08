import Todo from "../../components/Todo";
import { Task } from "../../store/todo/Todo";

const TaskItem = (params: { index: number; task: Task }) => {
  const { index, task } = params;
  return <Todo description={task?.task} index={index! + 1} />;
};

export default TaskItem;
