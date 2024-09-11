import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type ButtonVariantTypeProps = "primary" | "secondary";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant: ButtonVariantTypeProps;
}

const ButtonVariantsRecord: Record<ButtonVariantTypeProps, string> = {
  primary: "bg-black text-white hover:bg-black/90",
  secondary: "bg-white text-black hover:bg-white/90 border border-white/90",
};

export const Button = ({
  children,
  variant,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        `py-4 px-11 rounded-lg flex justify-center items-center font-medium text-lg ${ButtonVariantsRecord[variant]}`,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
