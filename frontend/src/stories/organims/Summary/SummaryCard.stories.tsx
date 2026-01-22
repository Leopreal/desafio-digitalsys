import type { Meta, StoryObj } from "@storybook/react";
import { SummaryCard } from "@/components/organism/SummaryCard";

const meta = {
  title: "Organisms/SummaryCard",
  component: SummaryCard,
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SummaryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LargePortfolio: Story = {
  args: {
    totalInvested: 150000,
    totalCurrentValue: 225000,
    totalAssets: 15,
  },
};

export const SmallPortfolio: Story = {
  args: {
    totalInvested: 1000,
    totalCurrentValue: 1250,
    totalAssets: 1,
  },
};
