import { TransactionFormView } from "@/components/organism/TransactionFormView/TransactionFormView";

export default {
  title: "Organisms/TransactionFormView",
  component: TransactionFormView,
};

export const Default = () => (
  <TransactionFormView
    symbol=""
    amount=""
    onSymbolChange={() => {}}
    onAmountChange={() => {}}
    onSubmit={() => alert("Submit")}
  />
);