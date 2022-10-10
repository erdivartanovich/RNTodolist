import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "@testing-library/react-native";
import { configureAppStore } from "../../store";
import reducer, { ADD_TODO } from "../../store/todo/reducers";
import { Todo, TodoState } from "../../store/todo/Todo";
import { renderWithProviders } from "../../utils/test-utils";
import AppTodoList from "./TodoList";

export type RootStackParamList = {
  TodoList: undefined;
  TodoDetail: undefined;
};

const { Screen, Navigator } = createNativeStackNavigator<RootStackParamList>();
const MockTodoDetail = () => <></>;
const Navigation = () => {
  return (
    <Navigator>
      <Screen name="TodoList" component={AppTodoList} />
      <Screen name="TodoDetail" component={MockTodoDetail} />
    </Navigator>
  );
};

describe("TodoList page test", () => {
  const component = (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );

  const firstTodo: Todo = {
    id: "1",
    description: "Todo 1",
    tasks: [],
  };
  const todoInitialState: TodoState = {
    error: false,
    todoList: [],
    selectedTodo: firstTodo,
    status: "success",
  };

  const preloadState = {
    todo: todoInitialState,
  };

  const store = configureAppStore(preloadState);

  renderWithProviders(component, {
    store,
  });

  test("Uses preloaded state to render todo list page", async () => {
    const header = await screen.findByText("TODO LIST");
    expect(header).toBeTruthy();
  });

  test("Testing ADD_TODO should return correct state", async () => {
    const newState = reducer(todoInitialState, ADD_TODO(firstTodo));
    expect(newState.selectedTodo).toEqual(expect.objectContaining(firstTodo));
  });
});
