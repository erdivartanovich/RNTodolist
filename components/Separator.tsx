import { StyleSheet, View } from "react-native";

const Separator = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    height: 2,
  },
});

export default Separator;
