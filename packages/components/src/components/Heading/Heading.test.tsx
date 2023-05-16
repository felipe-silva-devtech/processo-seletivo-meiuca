import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import "@testing-library/jest-dom";

import { ThemeProvider, theme } from "@psm/theme";
import { Heading } from ".";

function renderWithWrapper(
  component?: React.ReactElement,
  options?: RenderOptions
) {
  const Wrapper = <ThemeProvider theme={theme}>{component}</ThemeProvider>;

  return render(Wrapper, options);
}

describe("Heading", () => {
  const content = "Heading Label";

  it("render component", () => {
    const { container, getByText } = renderWithWrapper(
      <Heading content={content} />
    );

    expect(getByText(content)).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  it("render component with children", () => {
    const { container, getByText } = renderWithWrapper(
      <Heading>{content}</Heading>
    );

    expect(getByText(content)).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
});
