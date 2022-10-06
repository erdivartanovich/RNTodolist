import { Todo as TodoInterface } from "../store/todo/Todo";
import { View, Text, StyleSheet } from "react-native";

const Todo = ({ description }: Partial<TodoInterface>) => {
  return (
    <View style={styles.item}>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  description: {
    fontSize: 32,
  },
});
export default Todo;
