// adapted from https://github.com/scullyio/scully/blob/4ba90c8378f1d7fa3904d0cd0b241270709b5c63/libs/plugins/scully-plugin-md-replace-route/src/lib/plugins-scully-plugin-md-replace-route.ts

import { registerPlugin, scullyConfig } from "@scullyio/scully";
import { join } from "path";

export const mdReplaceRoute = "mdReplaceRoute";

registerPlugin(
  "router",
  mdReplaceRoute,
  async (route, config: any) => {
    console.log(join(scullyConfig.homeFolder, config.file));
    return [
      {
        route,
        templateFile: join(scullyConfig.homeFolder, config.file),
        postRenderers: ["contentFolder"],
      },
    ];
  }
);
