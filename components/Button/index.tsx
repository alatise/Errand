import Image from "next/image";

interface BtnProp {
  child: any;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: any;
  icon?: any;
  icon2?: any;
  active?: boolean;
  disabled?: boolean
}

export default function Button({
  child,
  type = "button",
  onClick,
  className,
  icon,
  icon2,
  disabled,
  active,
}: BtnProp) {
  return (
    <button disabled={disabled} className={className} onClick={onClick}>
      <div className="flex justify-center items-center">
        {icon && (
          <Image
            src={icon}
            width={26}
            height={26}
            alt="notify"
            className="pr-3"
          />
        )}{" "}
        {child}
        {icon2 && (
          <Image
            src={icon2}
            width={30}
            height={30}
            alt="notify"
            className="pl-3"
          />
        )}
      </div>
    </button>
  );
}
