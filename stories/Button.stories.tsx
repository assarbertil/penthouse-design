import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, Props } from "../src/Button";

import { IconCross, IconSearch } from "../src/Icons";

const meta: Meta = {
  title: "Button",
  component: Button,
  argTypes: { children: { defaultValue: "Default Text" } },
};

export default meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const withPrefix = Template.bind({});
withPrefix.args = { children: "With prefix", prefix: <IconSearch /> };

export const withPrefixAndSuffix = Template.bind({});
withPrefixAndSuffix.args = {
  children: "Prefix + suffix",
  prefix: <IconSearch />,
  suffix: <IconCross />,
};

export const iconButton = Template.bind({});
iconButton.args = {
  children: "",
  icon: <IconCross className="w-full h-full" />,
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
