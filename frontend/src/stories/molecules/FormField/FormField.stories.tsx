import { FormField } from "@/components/molecules/FormField";

export default {
  title: "Molecules/FormField",
  component: FormField,
};

export const Default = () => (
  <FormField id="symbol" label="Asset Symbol" placeholder="BTC" />
);

export const NumberField = () => (
  <FormField id="amount" label="Amount" type="number" placeholder="0.0" />
);
