import { cn } from "@/utils/helpers";
import { ClassValue } from "clsx";

type PropTypes = {
  text?: string;
  icon?: React.ReactNode;
  className?: ClassValue;
  [key: string]: any;
};

const Button = (props: PropTypes) => {
  const { text, icon, className, children, ...rest } = props;

  return (
    <button
      {...rest}
      className={cn("active:scale-[98%]", className && className)}
    >
      {text} {icon}
      {children}
    </button>
  );
};

export default Button;
