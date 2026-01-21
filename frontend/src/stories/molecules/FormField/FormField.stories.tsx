import { FormField } from "@/components/molecules/FormField";

export default {
  title: "Molecules/FormField",
  component: FormField,
};

export const Default = () => (
  <FormField label="Asset Symbol" placeholder="BTC" />
);

export const NumberField = () => (
  <FormField label="Amount" type="number" placeholder="0.0" />
);
