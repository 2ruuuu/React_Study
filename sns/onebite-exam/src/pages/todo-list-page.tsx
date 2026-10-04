import TodoEditor from "@/components/todo-list/todo-editor";
import TodoItem from "@/components/todo-list/todo-item";
import { API_URL } from "@/lib/constants";
import type { Todo } from "@/type";
import { useQuery } from "@tanstack/react-query";

const fetchTodos = async () => {
  const response = await fetch(`${API_URL}/todos`);
  if (!response) throw new Error("Fetch Failed");

  const data: Todo[] = await response.json();
  return data;
};

const TodoListPage = () => {
  const {
    data: todos,
    isLoading,
    error,
  } = useQuery({
    queryFn: fetchTodos,
    queryKey: ["todos"],
  });

  if (error) return <div>오류가 발생했습니다...</div>;
  if (isLoading) return <div>로딩중 입니다...</div>;

  return (
    <div className="flex flex-col gap-5 p-5">
      <h1 className="text-2xl font-bold">TodoList</h1>
      <TodoEditor />
      {todos?.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodoListPage;
