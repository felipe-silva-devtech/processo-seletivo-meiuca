const StyleDictionary = require("style-dictionary").extend("config.json");

StyleDictionary.registerTransform({
  type: "value",
  name: "keepCSSValues",
  matcher: () => true,
  transformer: (token) => token.value,
});

StyleDictionary.buildAllPlatforms();
