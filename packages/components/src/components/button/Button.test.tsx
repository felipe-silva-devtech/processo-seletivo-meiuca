import React from "react";
import { render, fireEvent, RenderOptions } from "@testing-library/react";
import "@testing-library/jest-dom";

import { ThemeProvider, theme } from "@psm/theme";
import { Button } from ".";

function renderWithWrapper(
  component?: React.ReactElement,
  options?: RenderOptions
) {
  const Wrapper = <ThemeProvider theme={theme}>{component}</ThemeProvider>;

  return render(Wrapper, options);
}

describe("Button", () => {
  it("render component", () => {
    const { container } = renderWithWrapper(<Button label="Button Label" />);

    expect(container).toMatchSnapshot();
  });

  it("render component with children", () => {
    const { container } = renderWithWrapper(<Button>Button Label</Button>);

    expect(container).toMatchSnapshot();
  });

  it("should click on button and change variable content", () => {
    let content = "foo";
    const { getByText } = renderWithWrapper(
      <Button onClick={() => (content = "bar")}>Button Label</Button>
    );

    fireEvent.click(getByText("Button Label"));

    expect(content).toBe("bar");
  });
});
