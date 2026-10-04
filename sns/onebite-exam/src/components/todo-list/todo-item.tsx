import { Button } from "../ui/button";
import { Link } from "react-router";
import type { Todo } from "@/type";
import { useUpdateTodoMutation } from "@/hooks/mutations/use-update-todo-mutation";
import { useDeleteTodo } from "@/store/todos";
import { useDeleteTodoMutation } from "@/hooks/mutations/use-delete-todo-mutation";

const TodoItem = ({ id, content, isDone }: Todo) => {
  const { mutate: updateTodo } = useUpdateTodoMutation();
  const { mutate: deleteTodo, isPending: isDeleteTodoPending } =
    useDeleteTodoMutation();

  const handleDeleteClick = () => {
    deleteTodo(id);
  };
  const handleCheckboxClick = () => {
    updateTodo({
      id,
      isDone: !isDone,
    });
  };

  return (
    <div className="flex items-center justify-between border p-2">
      <div className="flex gap-5">
        <input
          disabled={isDeleteTodoPending}
          type="checkbox"
          checked={isDone}
          onClick={handleCheckboxClick}
        />
        <Link to={`/todolist/${id}`}>{content}</Link>
      </div>
      <Button
        disabled={isDeleteTodoPending}
        variant={"destructive"}
        onClick={handleDeleteClick}
      >
        삭제
      </Button>
    </div>
  );
};

export default TodoItem;
