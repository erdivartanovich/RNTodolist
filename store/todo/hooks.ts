import { shallowEqual, useSelector } from "react-redux";
import useActionCreator from "../../hooks/useActionCreator";
import { RootState } from "../rootReducer";
import {
  addTodo,
  getTodo,
  getTodoList,
  saveTodoList,
  setError,
  setSuccess,
} from "./actions";
import { TodoState } from "./reducers";
import { TodoList } from "./Todo";

export interface TodoReturnHook extends TodoState {
  setError: (error: string | boolean) => void;
  setSuccess: (success: string | boolean) => void;
  getTodoList: () => void;
  getTodo: (id: string) => void;
  saveTodoList: (todoList: TodoList) => void;
  addTodo: (description: string) => void;
}

export const useTodo = (): TodoReturnHook => {
  const todoState = useSelector((state: RootState) => state.todo, shallowEqual);

  return {
    ...todoState,
    setError: useActionCreator(setError),
    setSuccess: useActionCreator(setSuccess),
    getTodoList: useActionCreator(getTodoList),
    getTodo: useActionCreator(getTodo),
    saveTodoList: useActionCreator(saveTodoList),
    addTodo: useActionCreator(addTodo),
  };
};
