import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type HeadingVariantTypeProps = "xs" | "lg";

interface HeadingProps extends HTMLAttributes<HTMLSpanElement> {
  variant: "xs" | "lg";
  title: string;
}

const HeadingVariantsRecord: Record<HeadingVariantTypeProps, string> = {
  xs: "text-[64px]",
  lg: "text-[48px]",
};

export const Heading = ({
  variant,
  className,
  title,
  ...props
}: HeadingProps) => {
  return (
    <h1
      className={twMerge(
        `text-black font-bold ${HeadingVariantsRecord[variant]}`,
        className
      )}
      {...props}
    >
      {title}
    </h1>
  );
};
