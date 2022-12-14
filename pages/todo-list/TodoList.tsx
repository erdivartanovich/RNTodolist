import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import EmptyItem from "../../components/EmptyItem";
import ItemInput from "../../components/ItemInput";
import Separator from "../../components/Separator";
import { RootStackParamList } from "../../Navigation";
import { useTodo } from "../../store/todo/hooks";
import TodoItem from "./TodoListItem";

type Props = NativeStackScreenProps<RootStackParamList, "TodoList">;

const AppTodoList = ({ navigation }: Props) => {
  const {
    getTodoList,
    addTodo,
    selectTodo,
    deleteTodo,
    todoList,
    selectedTodo,
  } = useTodo();

  const [deleted, setDeleted] = useState<string>();

  useEffect(() => {
    if (!!selectedTodo) {
      navigation.navigate("TodoDetail", { title: "Manage Todo Tasks" });
    } else {
      getTodoList();
    }
  }, [selectedTodo]);

  useEffect(() => {
    deleted && deleteTodo(deleted);
    getTodoList();
  }, [deleted]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO LIST</Text>
      <FlatList
        data={todoList}
        renderItem={({ item: todo, index }) =>
          TodoItem({
            index,
            todo,
            onSelect: () => {
              selectTodo(todo);
            },
            onDelete: () => {
              setDeleted(todo.id);
            },
          })
        }
        ItemSeparatorComponent={() => <Separator />}
        ListEmptyComponent={
          <EmptyItem description="Your todos still empty, add one!" />
        }
        keyExtractor={(todo) => todo.id}
      />
      <ItemInput addItem={addTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF7700",
  },
  heading: {
    color: "#fff",
    textAlign: "left",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
});

export default AppTodoList;
