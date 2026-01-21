import { Input } from "@/components/atoms/Input/Input";

export default {
  title: "Atoms/Input",
  component: Input,
};

export const Default = () => <Input placeholder="Type here..." />;

export const Number = () => <Input type="number" placeholder="Amount" />;

export const Disabled = () => <Input placeholder="Disabled" disabled />;
