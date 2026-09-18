import { useDeleteTodo } from "@/store/todos";
import { Button } from "../ui/button";
import { Link } from "react-router";

interface TodoItemProps {
  id: number;
  content: string;
}

const TodoItem = ({ id, content }: TodoItemProps) => {
  const deleteTodo = useDeleteTodo();
  const handleDeleteClick = () => {
    deleteTodo(id);
  };

  return (
    <div className="flex items-center justify-between border p-2">
      <Link to={`/todolist/${id}`}>{content}</Link>
      <Button variant={"destructive"} onClick={handleDeleteClick}>
        삭제
      </Button>
    </div>
  );
};

export default TodoItem;
