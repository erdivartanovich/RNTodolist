import { Feather, MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Task } from "../store/todo/Todo";

type Props = {
  index: number;
  task: Task;
  onUpdateStatus: (index: number, isDone: boolean) => void;
  onSelect: (index: number) => void;
};

const DoneIcon = () => <Feather name="check-square" size={24} color="black" />;
const NotDoneIcon = () => <Feather name="square" size={24} color="black" />;

const AppTask = ({ index, task, onUpdateStatus, onSelect }: Props) => {
  const [isDone, setIsDone] = useState(task.done);

  useEffect(() => {
    onUpdateStatus(index, isDone);
  }, [isDone]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setIsDone(!isDone)}
        style={styles.indexContainer}
      >
        {isDone ? <DoneIcon /> : <NotDoneIcon />}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onSelect(index)}
        style={styles.descriptionContainer}
      >
        <Text
          style={
            isDone
              ? { ...styles.description, ...styles.idDoneDescription }
              : styles.description
          }
        >
          {task.task}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.buttonContainer}>
        <MaterialIcons name="delete" size={24} color="black" />
      </TouchableOpacity>
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
    width: 40,
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
    marginRight: 2,
  },
  description: {
    color: "#653002",
    textAlign: "center",
    width: "75%",
    fontSize: 16,
  },
  idDoneDescription: {
    color: "#917256",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  buttonContainer: {
    backgroundColor: "#FDB87C",
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 50,
  },
});

export default AppTask;
