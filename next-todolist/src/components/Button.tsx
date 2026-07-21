import type {ButtonHTMLAttributes, ReactNode} from "react";

type Variant =
  | "addWhite"
  | "addViolet"
  | "delete"
  | "modifyWhite"
  | "modifyLime"
  | "noneShadowWhite"
  | "noneShadowBlack";

type Size = "md" | "icon";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
};

const whiteBtn = "bg-slate-200 text-slate-900";
const violetBtn = "bg-violet-600 text-white";
const roseBtn = "bg-rose-500 text-white";
const limeBtn = "bg-lime-300 text-slate-900";
const darkBtn = "bg-slate-800 text-white";

const variantClass: Record<Variant, string> = {
  addWhite: whiteBtn,
  modifyWhite: whiteBtn,
  noneShadowWhite: whiteBtn,
  addViolet: violetBtn,
  delete: roseBtn,
  modifyLime: limeBtn,
  noneShadowBlack: darkBtn,
};

const SHADOW = "shadow-[2px_4px_0_0_#0f172a]";

const sizeClassWithShadow: Record<Size, string> = {
  md: "h-[52px] px-4 gap-2 rounded-full text-body font-bold",
  icon: "size-[52px] rounded-full justify-center",
};

const sizeClassNoShadow: Record<Size, string> = {
  md: "h-14 px-4 gap-2 rounded-full text-body font-bold",
  icon: "size-14 rounded-full justify-center",
};

const Button = ({
  variant = "addWhite",
  size = "md",
  icon,
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const hasShadow =
    variant !== "noneShadowWhite" && variant !== "noneShadowBlack";

  const sizeClass = hasShadow
    ? sizeClassWithShadow[size]
    : sizeClassNoShadow[size];

  return (
    <button
      type="button"
      className={[
        "inline-flex items-center justify-center cursor-pointer transition-all disabled:pointer-events-none disabled:opacity-50",
        hasShadow && SHADOW,
        hasShadow &&
          "hover:translate-x-px hover:translate-y-px hover:shadow-[1px_2px_0_0_#0f172a] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none",
        !hasShadow && "hover:opacity-80 active:opacity-70",
        variantClass[variant],
        sizeClass,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {icon}
      {size === "md" && children}
    </button>
  );
};

export default Button;
