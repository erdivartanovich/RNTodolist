import { shallowEqual, useSelector } from "react-redux";
import useActionCreator from "../../hooks/useActionCreator";
import { RootState } from "../rootReducer";
import { addTodo, getTodoList, saveTodo, selectTodo } from "./actions";
import { Todo, TodoState } from "./Todo";

export interface TodoReturnHook extends TodoState {
  getTodoList: () => void;
  saveTodo: (todo: Todo) => void;
  addTodo: (description: string) => { payload: Todo };
  selectTodo: (todo: Todo | null) => void;
}

export const useTodo = (): TodoReturnHook => {
  const todoState = useSelector((state: RootState) => state.todo, shallowEqual);

  return {
    ...todoState,
    getTodoList: useActionCreator(getTodoList),
    saveTodo: useActionCreator(saveTodo),
    addTodo: useActionCreator(addTodo),
    selectTodo: useActionCreator(selectTodo),
  };
};
