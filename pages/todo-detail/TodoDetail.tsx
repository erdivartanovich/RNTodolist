import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { nanoid } from "@reduxjs/toolkit";
import React, { useCallback, useEffect, useState } from "react";
import {
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import EmptyItem from "../../components/EmptyItem";
import ItemInput from "../../components/ItemInput";
import Separator from "../../components/Separator";
import AppTask from "../../components/Task";
import { RootStackParamList } from "../../Navigation";
import { useTodo } from "../../store/todo/hooks";
import { Task } from "../../store/todo/Todo";

type Props = NativeStackScreenProps<RootStackParamList, "TodoDetail">;

const TodoDetail = ({ navigation }: Props) => {
  const { selectTodo, selectedTodo, saveTodo } = useTodo();
  const { description, tasks } = selectedTodo || { description: "", tasks: [] };

  const [taskList, setTaskList] = useState(tasks);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [selectedTaskDescription, setSelectedTaskDescription] = useState<
    string | undefined
  >();
  const inputRef = React.createRef<TextInput>();

  const addTask = (description: string) => {
    const newTask: Task = {
      task: description,
      id: nanoid(),
      done: false,
    };
    setTaskList((list) => [...list, newTask]);
  };

  const updateTask = (index: number, description: string) => {
    if (!description) return;
    const newTaskList = taskList.map((t, i) => {
      t.task = i === index ? description : t.task;
      return t;
    });
    setTaskList(newTaskList);
  };

  const updateStatus = (index: number, isDone: boolean) => {
    const newTaskList = [...taskList];
    newTaskList[index] = { ...newTaskList[index], done: isDone };
    setTaskList(newTaskList);
  };

  const deleteTask = (index: number) => {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
  };

  useEffect(() => {
    if (selectedIndex >= 0) {
      const description = taskList[selectedIndex].task;
      setSelectedTaskDescription(description);
      inputRef.current?.focus();
    } else {
      setSelectedTaskDescription("");
    }
  }, [selectedIndex]);

  const addOrUpdateTask = (description: string) => {
    if (selectedIndex < 0) {
      addTask(description);
    } else {
      updateTask(selectedIndex, description);
    }
    setSelectedIndex(-1);
    Keyboard.dismiss();
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("beforeRemove", () => {
      const todo = JSON.parse(JSON.stringify(selectedTodo!));
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
        renderItem={({ item: task, index }) => (
          <AppTask
            index={index}
            task={task}
            onSelect={setSelectedIndex}
            onUpdateStatus={updateStatus}
            onDelete={() => deleteTask(index)}
          />
        )}
        ItemSeparatorComponent={() => <Separator />}
        ListEmptyComponent={
          <EmptyItem description={"No task yet, create one!"} />
        }
        keyExtractor={(task) => task.id}
        style={styles.list}
      />
      <ItemInput
        description={selectedTaskDescription}
        addItem={addOrUpdateTask}
        ref={inputRef}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF7700",
    flex: 1,
  },
  list: {
    maxHeight: "78%",
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

export default TodoDetail;
