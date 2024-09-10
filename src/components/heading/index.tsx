interface HeadingProps {
  variant: "xs" | "lg";
}

export const Heading = ({ variant }: HeadingProps) => {
  return (
    <h1
      className={`text-black font-bold text-[${variant === "xs" ? "64px" : "48px"}]`}
    ></h1>
  );
};
