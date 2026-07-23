import type {InputHTMLAttributes} from "react";

type SearchProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  className?: string;
};

const Search = ({
  className = "",
  placeholder = "할 일을 입력해주세요",
  ...props
}: SearchProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={[
        "h-[52px] w-full rounded-full border-2 border-slate-900 bg-slate-100 px-6",
        "text-body font-bold text-slate-900",
        "shadow-[2px_4px_0_0_#0f172a]",
        "outline-none placeholder:text-slate-400 placeholder:font-normal",
        "overflow-hidden text-ellipsis whitespace-nowrap",
        className,
      ].join(" ")}
      {...props}
    />
  );
};

export default Search;
