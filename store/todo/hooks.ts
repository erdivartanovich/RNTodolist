import { shallowEqual, useSelector } from "react-redux";
import useActionCreator from "../../hooks/useActionCreator";
import { RootState } from "../rootReducer";
import {
  getTodo,
  getTodoList,
  saveTodo,
  setError,
  setSuccess,
} from "./actions";
import { TodoState } from "./reducers";
import { Todo } from "./Todo";

export interface TodoReturnHook extends TodoState {
  setError: (error: string | boolean) => void;
  setSuccess: (success: string | boolean) => void;
  getTodoList: () => void;
  getTodo: (id: string) => void;
  saveTodo: (data: Todo) => void;
}

export const useTodo = (): TodoReturnHook => {
  const todoState = useSelector((state: RootState) => state.todo, shallowEqual);

  return {
    ...todoState,
    setError: useActionCreator(setError),
    setSuccess: useActionCreator(setSuccess),
    getTodoList: useActionCreator(getTodoList),
    getTodo: useActionCreator(getTodo),
    saveTodo: useActionCreator(saveTodo),
  };
};
