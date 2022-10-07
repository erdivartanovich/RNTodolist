import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text } from "react-native";
import { RootStackParamList } from "../../Navigation";

type Props = NativeStackScreenProps<RootStackParamList, "TodoDetail">;

const TodoDetail = ({ route }: Props) => {
  const {
    params: { id, description, tasks, allTasks },
  } = route;
  return <Text>{description}</Text>;
};

export default TodoDetail;
