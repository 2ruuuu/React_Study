import Image from "next/image";
import checkBoxEmpty from "@/assets/icons/ic-checkBoxEmpty.svg";
import checkBoxFilled from "@/assets/icons/ic-checkBoxFilled.svg";

type CheckListDetailProps = {
  checked?: boolean;
  children: React.ReactNode;
  onChange?: () => void;
  className?: string;
};

const CheckListDetail = ({
  checked = false,
  children,
  onChange,
  className = "",
}: CheckListDetailProps) => {
  return (
    <button
      type="button"
      onClick={onChange}
      className={[
        "flex w-full items-center justify-center gap-3 rounded-full border-2 border-slate-900 px-3 py-2 text-body font-bold",
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
      <span>{children}</span>
    </button>
  );
};

export default CheckListDetail;
