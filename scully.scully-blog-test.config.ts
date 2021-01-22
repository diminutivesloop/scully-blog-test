import { ScullyConfig } from '@scullyio/scully';
import { mdReplaceRoute } from "./scully/plugins/plugin";

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "scully-blog-test",
  outDir: './dist/static',
  routes: {
    "/blog": {
      type: mdReplaceRoute,
      file: "./blog/home.md",
    },
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  }
};
