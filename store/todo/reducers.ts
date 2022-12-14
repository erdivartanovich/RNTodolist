import {
  ActionReducerMapBuilder,
  createSlice,
  isAnyOf,
  PayloadAction,
} from "@reduxjs/toolkit";
import { getTodoList, saveTodo, deleteTodo } from "./actions";
import { Todo, TodoState, initialState } from "./Todo";

const todoReducer = createSlice({
  name: "todo",
  initialState,
  reducers: {
    ADD_TODO: (state, action: PayloadAction<Todo>) => {
      const { payload: todo } = action;
      state.selectedTodo = todo;
      state.todoList.push(todo);
    },
    SELECT_TODO: (state, { payload: todo }: PayloadAction<Todo>) => {
      state.selectedTodo = todo;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<TodoState>): void => {
    builder.addCase(getTodoList.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.todoList = payload;
    });

    builder.addMatcher(
      isAnyOf(saveTodo.fulfilled, deleteTodo.fulfilled),
      (state) => {
        state.status = "success";
      }
    );
  },
});
export const { ADD_TODO, SELECT_TODO } = todoReducer.actions;
export default todoReducer.reducer;
