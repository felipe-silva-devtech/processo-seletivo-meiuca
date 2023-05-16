import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider, theme } from "@psm/theme";

import { Button } from "./Button";

it("changes the class when hovered", () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Button>Button Label</Button>
    </ThemeProvider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
