import { shallowEqual, useSelector } from "react-redux";
import useActionCreator from "../../hooks/useActionCreator";
import { RootState } from "../rootReducer";
import { addTodo, getTodo, getTodoList, saveTodoList } from "./actions";
import { TodoList, TodoState } from "./Todo";

export interface TodoReturnHook extends TodoState {
  getTodoList: () => void;
  getTodo: (id: string) => void;
  saveTodoList: (todoList: TodoList) => void;
  addTodo: (description: string) => void;
}

export const useTodo = (): TodoReturnHook => {
  const todoState = useSelector((state: RootState) => state.todo, shallowEqual);

  return {
    ...todoState,
    getTodoList: useActionCreator(getTodoList),
    getTodo: useActionCreator(getTodo),
    saveTodoList: useActionCreator(saveTodoList),
    addTodo: useActionCreator(addTodo),
  };
};
