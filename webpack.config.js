const webpack = require("@nativescript/webpack");

module.exports = (env) => {
  webpack.init(env);

  // Learn how to customize:
  // https://docs.nativescript.org/webpack

  // Example: copy all markdown files to the build directory
  webpack.Utils.addCopyRule("**/*.md");

  // Example: copy all files from a dependency
  webpack.Utils.addCopyRule({
    from: "@nativescript/webpack/dist/stubs",
    to: "custom/location",
    // the context of the "from" rule, in this case node_modules
    // we used the getProjectFilePath util here, but this could have been
    // a path.resolve(__dirname, 'node_modules') too.
    context: webpack.Utils.project.getProjectFilePath("node_modules"),
  });

  // webpack.useConfig("vue");

  return webpack.resolveConfig();
};
