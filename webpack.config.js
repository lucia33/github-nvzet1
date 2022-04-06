const path = require('path');
const GeneratePackageJsonPlugin = require('generate-package-json-webpack-plugin');
const basePackage = {
  name: 'demo-fast-foundation-extended',
  version: '1.0.0',
  main: './main.js',
  engines: {
    node: '>= 14',
  },
  dependencies: {
    '@microsoft/fast-element': '^1.8.0',
    '@microsoft/fast-foundation': '^2.40.0',
  },
};

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', 'js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    library: {
      type: 'umd',
    },
  },
  devtool: 'inline-source-map',
  plugins: [new GeneratePackageJsonPlugin(basePackage)],
};
