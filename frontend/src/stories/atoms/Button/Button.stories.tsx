import { Button } from "@/components/atoms/Button";

export default {
  title: "Atoms/Button",
  component: Button,
};

export const Primary = () => <Button variant="primary">Primary Button</Button>;

export const Secondary = () => (
  <Button variant="secondary">Secondary Button</Button>
);

export const Disabled = () => <Button disabled>Disabled Button</Button>;

export const WithClickHandler = () => (
  <Button onClick={() => alert("Clicked!")}>Click Me!</Button>
);
