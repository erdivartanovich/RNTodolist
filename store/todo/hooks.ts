import { shallowEqual, useSelector } from "react-redux";
import useActionCreator from "../../hooks/useActionCreator";
import { RootState } from "../rootReducer";
import {
  addTodo,
  deleteTodo,
  getTodoList,
  saveTodo,
  selectTodo,
} from "./actions";
import { Todo, TodoState } from "./Todo";

export interface TodoReturnHook extends TodoState {
  getTodoList: () => void;
  addTodo: (description: string) => { payload: Todo };
  selectTodo: (todo: Todo | null) => void;
  saveTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
}

export const useTodo = (): TodoReturnHook => {
  const todoState = useSelector((state: RootState) => state.todo, shallowEqual);

  return {
    ...todoState,
    getTodoList: useActionCreator(getTodoList),
    addTodo: useActionCreator(addTodo),
    selectTodo: useActionCreator(selectTodo),
    saveTodo: useActionCreator(saveTodo),
    deleteTodo: useActionCreator(deleteTodo),
  };
};
