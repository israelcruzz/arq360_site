import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type HeaderItemVariantTypeProps = "true" | "false";

interface HeaderItemProps extends HTMLAttributes<HTMLSpanElement> {
  title: string;
  isActive?: boolean;
}

const HeaderItemVariantsRecord: Record<HeaderItemVariantTypeProps, string> = {
  true: "text-black",
  false: "text-black/50",
};

export const HeaderItem = ({
  title,
  isActive = false,
  className,
  ...props
}: HeaderItemProps) => {
  return (
    <span
      className={twMerge(
        `text-xl font-medium ${
          HeaderItemVariantsRecord[
            String(isActive) as HeaderItemVariantTypeProps
          ]
        }`,
        className
      )}
      {...props}
    >
      {title}
    </span>
  );
};
