// src/components/AddTodo.tsx
"use client";

import {useState} from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";
import Button from "@/components/Button";
import Search from "@/components/Search";
import {postItems} from "@/api/todoList";
import grayPlus from "@/assets/icons/ic-grayPlus.svg";

export default function AddTodo() {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleAdd = async () => {
    if (!name.trim()) return;
    await postItems(name.trim());
    setName("");
    router.refresh();
  };

  return (
    <div className="mt-6 mb-10 flex items-center gap-4">
      <Search
        className="min-w-0 flex-1"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleAdd();
        }}
      />
      <Button
        icon={<Image src={grayPlus} alt="" width={16} height={16} />}
        onClick={handleAdd}
      >
        추가하기
      </Button>
    </div>
  );
}
