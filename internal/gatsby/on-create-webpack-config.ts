import path from "path";

import { CreateWebpackConfigArgs } from "gatsby";
import { CompilerOptions } from "typescript";

import { compilerOptions } from "../../tsconfig.json";

const onCreateWebpackConfig = (
  (options: Pick<CompilerOptions, "paths">) =>
  ({ actions, getConfig }: CreateWebpackConfigArgs) => {
    actions.setWebpackConfig({
      resolve: {
        alias: Object.entries(options.paths || []).reduce(
          (aliases, [name, [target]]) => ({
            ...aliases,
            [name]: path.resolve(target),
          }),
          {},
        ),
      },
    });

    const config = getConfig();
    config.plugins = config.plugins.filter(
      (plugin: { constructor: { name: string } }) =>
        plugin.constructor.name !== "ESLintWebpackPlugin",
    );
    actions.replaceWebpackConfig(config);
  }
)(compilerOptions);

export { onCreateWebpackConfig };
