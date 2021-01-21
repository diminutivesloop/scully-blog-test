import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "scully-blog-test",
  outDir: './dist/static',
  routes: {
    "/blog": {
      type: "mdReplaceRoute",
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
