import React from "react";
import { Meta, Story } from "@storybook/react";
import { CheckboxButton, Props } from "../src/components/CheckboxButton";

const meta: Meta = {
  title: "Checkbox button",
  component: CheckboxButton,
  argTypes: { children: { defaultValue: "Default" } },
};

export default meta;

const Template: Story<Props> = (args) => <CheckboxButton {...args} />;

export const Default = Template.bind({});
