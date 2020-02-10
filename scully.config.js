exports.config = {
  projectRoot: "./src/app",
  outDir: './dist/static',
  routes: {
    '/post/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./posts"
      }
    },
  }
};
