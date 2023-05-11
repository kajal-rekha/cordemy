import Link from "next/link";
import { cva } from "class-variance-authority";
import clsx from "clsx";

const buttonVariants = cva(
  "rounded-lg transition-colors duration-300 flex justify-center",
  {
    variants: {
      color: {
        primary: "bg-black text-white hover:bg-gray-700",
        secondary: "bg-white text-black hover:bg-gray-300",
      },
      size: {
        default: "py-3 px-6",
        full: "py-3 w-full",
      },
    },

    defaultVariants: {
      color: "primary",
      size: "default",
    },
  }
);
const Button = ({ href, placeholder, color, size }) => {
  return (
    <Link className={clsx(buttonVariants({ color, size }))} href={href}>
      {placeholder}
    </Link>
  );
};

export default Button;
