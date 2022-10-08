import { createAction, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import {
  getTodoList as storageGetTodoList,
  saveTodo as storageSaveTodo,
} from "../../storage/todo";
import { initialState, Todo, TodoList } from "./Todo";

const ADD_TODO = "todo/ADD_TODO";
const SELECT_TODO = "todo/SELECT_TODO";
const GET_TODO_LIST = "todo/GET_TODO_LIST";
const SAVE_TODO = "todo/SAVE_TODO";

export const addTodo = createAction(ADD_TODO, (description: string) => {
  const id = nanoid();
  return {
    payload: <Todo>{
      id,
      description,
      tasks: [],
    },
  };
});

export const selectTodo = createAction<Todo | null>(SELECT_TODO);

export const getTodoList = createAsyncThunk<TodoList>(
  GET_TODO_LIST,
  async () => {
    const todoList = await storageGetTodoList();
    return todoList ?? initialState.todoList;
  }
);

export const saveTodo = createAsyncThunk<Todo, Todo>(
  SAVE_TODO,
  async (todo: Todo) => {
    console.log("saving todoList is", todo);
    return await storageSaveTodo(todo);
  }
);
