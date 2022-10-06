import { Todo, TodoList } from "../../store/todo/Todo";

const todoList: TodoList = {
  todos: {
    td1: {
      id: "td1",
      description: "do some things",
      tasks: {
        "1": {
          id: "1",
          task: "do first thing",
          done: false,
        },
        "2": {
          id: "2",
          task: "do second thing",
          done: false,
        },
      },
      allTasks: ["1", "2"],
    },
  },
  allTodos: ["td1"],
};

export const getTodoList = async () => {
  return Promise.resolve(todoList);
};

export const getTodo = async (id: string) => {
  const todo = todoList.todos[id];
  return Promise.resolve(todo);
};

export const saveTodo = async (data: Todo) => {
  todoList.todos[data.id] = data;
  return Promise.resolve(data);
};
