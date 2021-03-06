import React from "react";
import { storyOf, storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "../components/Button";

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
  ));
