import React from "react";
import { Meta, Story } from "@storybook/react";
import { Input, Props } from "../src/components/Input";

import { IconCross, IconSearch } from "../src/icons";

const meta: Meta = {
  title: "Input",
  component: Input,
  argTypes: {
    placeholder: { defaultValue: "Search" },
    prefix: { defaultValue: <IconSearch /> },
    shadow: { defaultValue: true },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Input {...args} />;

export const Default = Template.bind({});

export const noShadow = Template.bind({});
noShadow.args = {
  shadow: false,
};

export const withCross = Template.bind({});
withCross.args = {
  defaultValue: "Example value",
  shadow: true,
  withCross: true,
};

export const disabled = Template.bind({});
disabled.args = {
  disabled: true,
};

export const rose = Template.bind({});
rose.args = {
  color: "rose",
};

export const blue = Template.bind({});
blue.args = {
  color: "blue",
};

export const green = Template.bind({});
green.args = {
  color: "green",
};

export const amber = Template.bind({});
amber.args = {
  color: "amber",
};
