const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#2b137d",
      "@text-color-secondary": "#2A2C44",
      "@heading-color": "#2b137d",
      "@text-color": "#2b137d",
    },
  })
);
