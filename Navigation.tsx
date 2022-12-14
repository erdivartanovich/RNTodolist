import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/home/Home";
import TodoDetail from "./pages/todo-detail/TodoDetail";
import TodoList from "./pages/todo-list/TodoList";

export type RootStackParamList = {
  Home: undefined;
  TodoList: undefined;
  TodoDetail: {
    title: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="TodoList"
      component={TodoList}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="TodoDetail"
      component={TodoDetail}
      options={({ route }) => ({
        title: route.params.title,
        headerStyle: {
          backgroundColor: "#DA6600",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      })}
    />
  </Stack.Navigator>
);
