import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import TodoDetail from "./pages/todo-detail/todo-detail";
import TodoList from "./pages/todo-list/TodoList";
import { store } from "./store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator initialRouteName="TodoList">
          <Stack.Screen
            name="TodoList"
            component={TodoList}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TodoDetail"
            component={TodoDetail}
            options={{ headerShown: true }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
