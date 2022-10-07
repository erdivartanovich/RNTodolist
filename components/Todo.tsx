import { View, Text, StyleSheet } from "react-native";

interface Props {
  index: number;
  description: string;
}

const Todo = ({ index, description }: Props) => {
  console.log("description", description);
  return (
    <View style={styles.container}>
      <View style={styles.indexContainer}>
        <Text style={styles.index}>{index}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{description}</Text>
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
});

export default Todo;
