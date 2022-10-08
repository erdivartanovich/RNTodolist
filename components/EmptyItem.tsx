import Todo from "./Todo";

type Props = {
  description: string;
};
const EmptyItem = ({ description }: Props) => {
  return <Todo description={description} index={0} />;
};

export default EmptyItem;
