import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import "@testing-library/jest-dom";

import { ThemeProvider, theme } from "@psm/theme";
import { Paragraph } from ".";

function renderWithWrapper(
  component?: React.ReactElement,
  options?: RenderOptions
) {
  const Wrapper = <ThemeProvider theme={theme}>{component}</ThemeProvider>;

  return render(Wrapper, options);
}

describe("Paragraph", () => {
  const content =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry";

  it("render component", () => {
    const { container, getByText } = renderWithWrapper(
      <Paragraph content={content} />
    );

    expect(getByText(content)).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  it("render component with children", () => {
    const { container, getByText } = renderWithWrapper(
      <Paragraph>{content}</Paragraph>
    );

    expect(getByText(content)).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
});
