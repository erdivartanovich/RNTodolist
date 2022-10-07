import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodoDetail from "./pages/todo-detail/todo-detail";
import TodoList from "./pages/todo-list/TodoList";
import { Todo } from "./store/todo/Todo";

export type RootStackParamList = {
  TodoList: undefined;
  TodoDetail: Todo;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="TodoList">
      <Stack.Screen
        name="TodoList"
        component={TodoList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TodoDetail"
        component={TodoDetail}
        options={({ route }) => ({ title: route.params.description })}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
