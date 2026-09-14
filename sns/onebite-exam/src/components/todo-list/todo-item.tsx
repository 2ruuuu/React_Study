import { Button } from "../ui/button";

interface TodoItemProps {
  id: number;
  content: string;
}

const TodoItem = ({ id, content }: TodoItemProps) => {
  return (
    <div className="flex items-center justify-between border p-2">
      {content}
      <Button variant={"destructive"}>삭제</Button>
    </div>
  );
};

export default TodoItem;
