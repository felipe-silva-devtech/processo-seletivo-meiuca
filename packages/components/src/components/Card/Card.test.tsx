import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import "@testing-library/jest-dom";

import { ThemeProvider, theme } from "@psm/theme";
import { Card } from ".";
import { Heading } from "../Heading";
import { Subtitle } from "../Subtitle";
import { Paragraph } from "../Paragraph";
import { Button } from "../Button";

function renderWithWrapper(
  component?: React.ReactElement,
  options?: RenderOptions
) {
  const Wrapper = <ThemeProvider theme={theme}>{component}</ThemeProvider>;

  return render(Wrapper, options);
}

describe("Card", () => {
  const headingContent = "Heading SM";
  const subtitleContent = "Subtitle SM";
  const paragraphContent =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
  const buttonLabel = "Button Label";

  it("render component", () => {
    const { container } = renderWithWrapper(
      <Card
        heading={headingContent}
        subtitle={subtitleContent}
        paragraph={paragraphContent}
        buttonLabel={buttonLabel}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it("render component with children", () => {
    const { container } = renderWithWrapper(
      <Card>
        <Heading>{headingContent}</Heading>
        <Subtitle>{subtitleContent}</Subtitle>
        <Paragraph>{paragraphContent}</Paragraph>
        <Button>{buttonLabel}</Button>
      </Card>
    );

    expect(container).toMatchSnapshot();
  });

  it("render component without subtitle", () => {
    const { container } = renderWithWrapper(
      <Card>
        <Heading>{headingContent}</Heading>
        <Paragraph>{paragraphContent}</Paragraph>
        <Button>{buttonLabel}</Button>
      </Card>
    );

    expect(container).toMatchSnapshot();
  });
});
