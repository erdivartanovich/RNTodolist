import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { Text } from "react-native";
import { RootStackParamList } from "../../Navigation";
import { useTodo } from "../../store/todo/hooks";

type Props = NativeStackScreenProps<RootStackParamList, "TodoDetail">;

const TodoDetail = ({ route, navigation }: Props) => {
  const {
    params: { id, description, tasks, allTasks },
  } = route;

  const { selectTodo } = useTodo();

  useEffect(() => {
    const unsubscribe = navigation.addListener("beforeRemove", () => {
      selectTodo(null);
    });
    return unsubscribe;
  }, [navigation]);

  return <Text>{description}</Text>;
};

export default TodoDetail;
