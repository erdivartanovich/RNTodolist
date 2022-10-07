import { Todo, TodoList } from "../../store/todo/Todo";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_TODO_PREFIX = "@todo@";

export const getTodoList = async () => {
  try {
    const todoList = await AsyncStorage.getItem(STORAGE_TODO_PREFIX);
    return JSON.parse(todoList!) as TodoList;
  } catch (e) {
    throw e;
  }
};

export const getTodo = async (id: string) => {
  const todoList = await getTodoList();
  return todoList.todos[id];
};

export const saveTodo = async (data: Todo) => {
  try {
    const todoList = await getTodoList();
    todoList.todos[data.id] = data;
    await saveTodoList(todoList);
    return data;
  } catch (e) {
    throw e;
  }
};

export const saveTodoList = async (data: TodoList) => {
  try {
    await AsyncStorage.setItem(STORAGE_TODO_PREFIX, JSON.stringify(data));
    return data;
  } catch (e) {
    throw e;
  }
};
