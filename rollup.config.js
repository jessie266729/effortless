const { defineConfig } = require("rollup");
const { babel } = require("@rollup/plugin-babel");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const typescript = require("@rollup/plugin-typescript");
const terser = require("@rollup/plugin-terser");

module.exports = defineConfig({
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      exports: "auto",
    },
  ],
  external: ["postcss", "fs", "path"], // 排除监听的文件模式
  plugins: [
    nodeResolve(),
    typescript({
      tsconfig: "./tsconfig.json",
    }),

    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      presets: [["@babel/preset-env", { targets: { node: "14" } }]],
    }),
    process.env.NODE_ENV === "production" &&
      terser({
        format: {
          comments: false,
        },
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      }),
  ].filter(Boolean),
});
