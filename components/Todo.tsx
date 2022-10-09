import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  index: number;
  description: string;
  onSelect?: () => void;
  onDelete?: () => void;
}

const Todo = ({ index, description, onSelect, onDelete }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.indexContainer}>
        <Text style={styles.index}>{index}</Text>
      </View>
      <TouchableOpacity onPress={onSelect} style={styles.descriptionContainer}>
        <Text style={styles.description}>{description}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete} style={styles.buttonContainer}>
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
  buttonContainer: {
    backgroundColor: "#FDB87C",
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 50,
  },
});

export default Todo;
