import { Feather } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Task } from "../store/todo/Todo";

type Props = {
  index: number;
  task: Task;
  onUpdateTask: (index: number, task: Task) => void;
};

const DoneIcon = () => <Feather name="check-square" size={24} color="black" />;
const NotDoneIcon = () => <Feather name="square" size={24} color="black" />;

const AppTask = ({ index, task, onUpdateTask }: Props) => {
  const [isDone, setIsDone] = useState(task.done);

  useEffect(() => {
    onUpdateTask(index, { ...task, done: isDone });
  }, [isDone]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setIsDone(!isDone)}
        style={styles.indexContainer}
      >
        <View style={styles.button}>
          {isDone ? <DoneIcon /> : <NotDoneIcon />}
        </View>
      </TouchableOpacity>
      <View style={styles.descriptionContainer}>
        <Text
          style={
            isDone
              ? { ...styles.description, ...styles.idDoneDescription }
              : styles.description
          }
        >
          {task.task}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
  },
  indexContainer: {
    backgroundColor: "#FDB87C",
    marginRight: 2,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
  index: {
    color: "#653002",
    fontSize: 16,
  },
  descriptionContainer: {
    backgroundColor: "#FDB87C",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    minHeight: 50,
    marginRight: 20,
  },
  description: {
    color: "#653002",
    textAlign: "center",
    width: "90%",
    fontSize: 16,
  },
  idDoneDescription: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  button: {
    height: 30,
    width: 30,
    borderRadius: 5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppTask;