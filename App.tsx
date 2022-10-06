import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import TodoList from "./pages/TodoList";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Open dong ah App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
        <TodoList />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
