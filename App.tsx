import { Provider } from "react-redux";
import { Navigation } from "./Navigation";
import { store } from "./store";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}
