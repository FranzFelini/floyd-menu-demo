import { Divider } from "./Divider";

interface Props {
  text: string;
  children: React.ReactNode;
}

export const Section = ({ children, text }: Props) => (
  <div id="menu" className="pb-4">
    <Divider />

    <div className="font-[Copperplate] font-bold text-5xl text-center leading-10 mb-0 pt-1">
      <h1>{text}</h1>
    </div>
    <Divider weirdWidth />

    {children}
  </div>
);
