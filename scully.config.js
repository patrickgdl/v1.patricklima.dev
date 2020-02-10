exports.config = {
  projectRoot: "./src/app",
  outDir: './build',
  routes: {
    '/post/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./posts"
      }
    },
  }
};
