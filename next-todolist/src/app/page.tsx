import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1200px] px-4">
      <AddTodo />
      <TodoList />
    </div>
  );
}
