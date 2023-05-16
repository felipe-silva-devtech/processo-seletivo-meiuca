import React from "react";

import { ThemeProvider, theme } from "@psm/theme";

const preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
