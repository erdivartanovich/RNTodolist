import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { getTodo, getTodoList, saveTodoList } from "./actions";
import { Todo, TodoList } from "./Todo";

export interface TodoState {
  status: "idle" | "loading" | "success" | "failed";
  error: boolean | string;
  todoList: TodoList;
  todo: Todo | null;
}

export const initialState: TodoState = {
  status: "idle",
  error: false,
  todoList: {
    todos: {},
    allTodos: [],
  },
  todo: null,
};

const todoReducer = createSlice({
  name: "todo",
  initialState,
  reducers: {
    ADD_TODO: (state, action: PayloadAction<Todo>) => {
      const { payload: todo } = action;
      state.todo = todo;
      state.todoList.todos[todo.id] = todo;
      state.todoList.allTodos.push(todo.id);
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<TodoState>): void => {
    builder.addCase(getTodoList.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.todoList = payload;
    });

    builder.addCase(getTodo.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.todo = payload;
    });

    builder.addCase(saveTodoList.fulfilled, (state) => {
      state.status = "success";
    });
  },
});

export default todoReducer.reducer;
