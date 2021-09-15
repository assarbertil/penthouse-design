import React from "react";
import { Meta, Story } from "@storybook/react";
import { Text, Props } from "../src/components/Text";

const meta: Meta = {
  title: "Text",
  component: Text,
  argTypes: {
    onClick: { action: "clicked" },
    children: { defaultValue: "Default Text" },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Text {...args} />;

export const Default = Template.bind({});
