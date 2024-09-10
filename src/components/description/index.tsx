interface DescriptionProps {
  text: string;
  variant: "primary" | "secondary";
}

export const Description = ({ text, variant }: DescriptionProps) => {
  return (
    <p
      className={`font-medium text-lg text-[${
        variant === "primary" ? "#7F7F7F" : "#FFFFFF"
      }]`}
    >
      {text}
    </p>
  );
};
