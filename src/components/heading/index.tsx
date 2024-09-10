interface HeadingProps {
  variant: "xs" | "lg";
  title: string;
}

export const Heading = ({ variant, title }: HeadingProps) => {
  return (
    <h1
      className={`text-black font-bold text-[${
        variant === "xs" ? "64px" : "48px"
      }]`}
    >
      {title}
    </h1>
  );
};
