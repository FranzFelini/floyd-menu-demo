interface Props {
  weirdWidth?: boolean;
}

export const Divider = ({ weirdWidth }: Props) => {
  if (weirdWidth) {
    return (
      <div className="w-full items-center flex justify-center my-8">
        <div className="w-5/6 h-0.5 rounded-full bg-black my-8 mb-0" />
      </div>
    );
  }
  return <div className="w-full h-0.5 rounded-full bg-black my-8" />;
};
