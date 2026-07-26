"use client";

import {patchItemsDetail} from "@/api/todoList";
import {useRouter} from "next/navigation";
import CheckList from "./CheckList";

type TodoCheckItemProps = {
  id: number;
  name: string;
  isCompleted: boolean;
};

const TodoCheckItem = ({id, name, isCompleted}: TodoCheckItemProps) => {
  const router = useRouter();

  const handleToggle = async () => {
    await patchItemsDetail(id, {isCompleted: !isCompleted});
    router.refresh();
  };
  return (
    <CheckList id={id} checked={isCompleted} onToggle={handleToggle}>
      {name}
    </CheckList>
  );
};

export default TodoCheckItem;
