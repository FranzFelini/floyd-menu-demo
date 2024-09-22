import { Divider } from "./Divider";

interface Props {
  text: string;
  children: React.ReactNode;
}

export const Section = ({ children, text }: Props) => (
  <div className="pb-9">
    <Divider />

    <div className="font-[Copperplate] font-light text-center leading-10 text-2xl pt-1">
      <h1>{text}</h1>
    </div>
    <Divider weirdWidth />

    {children}
  </div>
);
