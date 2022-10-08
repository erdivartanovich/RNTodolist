import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import EmptyItem from "../../components/EmptyItem";
import { RootStackParamList } from "../../Navigation";
import { useTodo } from "../../store/todo/hooks";
import { Task } from "../../store/todo/Todo";
import TaskItem from "./TaskItem";
import ItemInput from "../../components/ItemInput";

type Props = NativeStackScreenProps<RootStackParamList, "TodoDetail">;

const TodoDetail = ({ navigation }: Props) => {
  const { selectTodo, selectedTodo, saveTodo } = useTodo();
  const { id: todoId, description, tasks } = selectedTodo!;

  const [taskList, setTaskList] = useState(tasks);
  const addTask = (description: string) => {
    const newTask: Task = {
      task: description,
      id: nanoid(),
      done: false,
    };
    setTaskList([...taskList, newTask]);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("beforeRemove", () => {
      const todo = JSON.parse(JSON.stringify(selectedTodo!));
      console.log("---taskList", taskList);
      todo.tasks = taskList;
      saveTodo(todo);
      selectTodo(null);
    });
    return unsubscribe;
  }, [navigation, selectedTodo, taskList]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{description}</Text>
      <FlatList
        data={taskList}
        renderItem={({ index, item: task }) =>
          TaskItem({
            index,
            task,
          })
        }
        ListEmptyComponent={
          <EmptyItem description={"No task yet, create one!"} />
        }
        keyExtractor={(task) => task.id}
      />
      <ItemInput addItem={addTask} />
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
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
});

export default TodoDetail;
