import packageJson from './package.json' with { type: 'json' };

export default {
  plugins: [
    ['babel-plugin-react-compiler', { target: '18' }],
    [
      '@babel/plugin-transform-runtime',
      {
        version: packageJson.dependencies['@babel/runtime'],
      },
    ],
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        targets: { browsers: ['chrome 80', 'safari 13.1', 'firefox 74', 'opera 67'] },
      },
    ],
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
};
