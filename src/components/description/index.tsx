import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type DescriptionVariantTypeProps = "primary" | "secondary";

interface DescriptionProps extends HTMLAttributes<HTMLSpanElement> {
  text: string;
  variant: DescriptionVariantTypeProps;
}

const ButtonVariantsRecord: Record<DescriptionVariantTypeProps, string> = {
  primary: "text-[#7F7F7F]",
  secondary: "text-[#FFFFFF]",
};

export const Description = ({
  text,
  variant,
  className,
  ...props
}: DescriptionProps) => {
  return (
    <p
      className={twMerge(
        `font-medium text-lg ${ButtonVariantsRecord[variant]}`,
        className
      )}
      {...props}
    >
      {text}
    </p>
  );
};
