// const path = require('path');
// const { DefinePlugin } = require('webpack');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, './static/frontend'),
//     filename: '[name].js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//         },
//       },
//     ],
//   },
//   optimization: {
//     minimize: true,
//   },
//   plugins: [
//     new DefinePlugin({
//       'process.env': {
//         // This has effect on the react lib size
//         NODE_ENV: JSON.stringify('production'),
//       },
//     }),
//   ],
// };
const path = require('path');
const { DefinePlugin } = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './static/frontend'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
};
