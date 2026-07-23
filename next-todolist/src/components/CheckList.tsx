import Image from "next/image";
import checkBoxFilled from "@/assets/icons/ic-checkBoxFilled.svg";
import checkBoxEmpty from "@/assets/icons/ic-checkBoxEmpty.svg";

type CheckListProps = {
  checked?: boolean;
  children: React.ReactNode;
  onChange?: () => void;
  className?: string;
};

const CheckList = ({
  checked = false,
  children,
  onChange,
  className = "",
}: CheckListProps) => {
  return (
    <button
      type="button"
      onClick={onChange}
      className={[
        "flex w-full items-center justify-start gap-3 rounded-full border-2 border-slate-900 px-3 py-2 text-body font-bold",
        checked ? "bg-violet-100" : "bg-white",
        "cursor-pointer transition-opacity hover:opacity-80",
        className,
      ].join(" ")}
    >
      <Image
        src={checked ? checkBoxFilled : checkBoxEmpty}
        alt=""
        width={32}
        height={32}
      />
      <span className={checked ? "line-through" : ""}>{children}</span>
    </button>
  );
};

export default CheckList;
