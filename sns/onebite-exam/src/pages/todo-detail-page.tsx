import { useTodoDataById } from "@/hooks/queries/use-todo-data-by-id";
import { useParams } from "react-router";

const TodoDetailPage = () => {
  const p = useParams();
  const id = p.id;

  const { data, isLoading, error } = useTodoDataById(String(id));

  if (isLoading) return <div>로딩중입니다 ... </div>;
  if (error || !data) return <div>오류가 발생했습니다 ... </div>;

  return <div>{data.content}</div>;
};

export default TodoDetailPage;
