import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  cache: false,
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      name: "react-lib",
    },
    {
      file: packageJson.module,
      format: "esm",
    },
  ],
  plugins: [commonjs(), typescript({ tsconfig: "./tsconfig.json" }), postcss()],
};
