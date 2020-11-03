import { setPluginConfig } from '@scullyio/scully';

setPluginConfig('md', { enableSyntaxHighlighting: true });

exports.config = {
  projectRoot: './src/app',
  outDir: './dist/static',
  routes: {
    '/post/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './src/posts'
      }
    }
  }
};
