import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import "@testing-library/jest-dom";

import { ThemeProvider, theme } from "@psm/theme";
import { Subtitle } from ".";

function renderWithWrapper(
  component?: React.ReactElement,
  options?: RenderOptions
) {
  const Wrapper = <ThemeProvider theme={theme}>{component}</ThemeProvider>;

  return render(Wrapper, options);
}

describe("Subtitle", () => {
  const content = "Subtitle SM";

  it("render component", () => {
    const { container, getByText } = renderWithWrapper(
      <Subtitle content={content} />
    );

    expect(getByText(content)).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  it("render component with children", () => {
    const { container, getByText } = renderWithWrapper(
      <Subtitle>{content}</Subtitle>
    );

    expect(getByText(content)).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
});
