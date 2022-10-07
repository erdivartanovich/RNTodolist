import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getTodoList as storageGetTodoList,
  getTodo as storageGetTodo,
  saveTodo as storageSaveTodo,
} from "../../storage/todo";
import { TodoList, Todo } from "./Todo";

const SET_ERROR = "todo/SET_ERROR";
const SET_SUCCESS = "todo/SET_SUCCESS";
const GET_TODO_LIST = "todo/GET_TODO_LIST";
const GET_TODO = "todo/GET_TODO";
const SAVE_TODO = "todo/SAVE_TODO";

export const setError = createAction<string | boolean>(SET_ERROR);
export const setSuccess = createAction<string | boolean>(SET_SUCCESS);

export const getTodoList = createAsyncThunk<TodoList>(
  GET_TODO_LIST,
  async () => {
    return await storageGetTodoList();
  }
);

export const getTodo = createAsyncThunk<Todo, string>(
  GET_TODO,
  async (id: string) => {
    return await storageGetTodo(id);
  }
);

export const saveTodo = createAsyncThunk<Todo, string>(
  SAVE_TODO,
  async (description) => {
    const todo: Todo = {
      description,
      id: description,
      tasks: {},
      allTasks: [],
    };
    console.log("new todo is", todo);
    return await storageSaveTodo(todo);
  }
);
