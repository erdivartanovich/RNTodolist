import AsyncStorage from "@react-native-async-storage/async-storage";
import { Todo } from "../../store/todo/Todo";

const sortByDescrition = (A: Todo, B: Todo) => {
  const da = A.description.toUpperCase();
  const db = B.description.toUpperCase();
  if (da < db) {
    return -1;
  }
  if (da > db) {
    return 1;
  }
  return 0;
};

export const getTodoList = async () => {
  try {
    const allTodos = await AsyncStorage.getAllKeys();
    const getAllTodos = allTodos.map((id: string) => AsyncStorage.getItem(id));
    const list = await Promise.all(getAllTodos);
    return list.map((item) => JSON.parse(item!) as Todo).sort(sortByDescrition);
  } catch (e) {
    throw e;
  }
};

export const saveTodo = async (data: Todo) => {
  try {
    await AsyncStorage.setItem(data.id, JSON.stringify(data));
    return data;
  } catch (e) {
    throw e;
  }
};

export const deleteTodo = async (id: string) => {
  try {
    await AsyncStorage.removeItem(id);
  } catch (e) {
    throw e;
  }
};
