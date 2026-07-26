"use client";

import Image from "next/image";
import Link from "next/link";
import checkBoxFilled from "@/assets/icons/ic-checkBoxFilled.svg";
import checkBoxEmpty from "@/assets/icons/ic-checkBoxEmpty.svg";

type CheckListProps = {
  id: number;
  checked?: boolean;
  children: React.ReactNode;
  onToggle?: () => void;
  className?: string;
};

const CheckList = ({
  id,
  checked = false,
  children,
  onToggle,
  className = "",
}: CheckListProps) => {
  return (
    <div
      className={[
        "flex w-full items-center gap-3 rounded-full border-2 border-slate-900 px-3 py-2 text-body font-bold",
        checked ? "bg-violet-100" : "bg-white",
        className,
      ].join(" ")}
    >
      <button type="button" onClick={onToggle} className="shrink-0">
        <Image
          src={checked ? checkBoxFilled : checkBoxEmpty}
          alt=""
          width={32}
          height={32}
        />
      </button>

      <Link
        href={`/items/${id}`}
        className={`min-w-0 flex-1 ${checked ? "line-through" : ""}`}
      >
        {children}
      </Link>
    </div>
  );
};

export default CheckList;
