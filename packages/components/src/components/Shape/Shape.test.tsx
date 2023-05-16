import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import "@testing-library/jest-dom";

import { ThemeProvider, theme } from "@psm/theme";
import { Shape } from ".";
import { Heading } from "../Heading";

function renderWithWrapper(
  component?: React.ReactElement,
  options?: RenderOptions
) {
  const Wrapper = <ThemeProvider theme={theme}>{component}</ThemeProvider>;

  return render(Wrapper, options);
}

describe("Shape", () => {
  const content = "Heading Label";

  it("render component", () => {
    const { container, getByText } = renderWithWrapper(
      <Shape>
        <Heading>{content}</Heading>
      </Shape>
    );

    expect(getByText(content)).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  it("render component with custom width and height", () => {
    const { container, getByText } = renderWithWrapper(
      <Shape width={200} height={200}>
        <Heading>{content}</Heading>
      </Shape>
    );

    expect(getByText(content)).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
});
