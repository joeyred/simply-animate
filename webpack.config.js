const path = require('path');

// const prod = process.env.NODE_ENV === 'production' ? true :  false;

// function getConfig() {
//   return {
//     devtool: 'inline-source-map',
//     entry:   `${__dirname}/src/index.ts`,
//     output:  {
//       path:     path.resolve(__dirname, 'dist'),
//       filename: 'simply-animate.js',
//     },
//     module: {
//       rules: [
//         // TypeScript
//         {
//           test:    /\.ts?$/,
//           use:     'ts-loader',
//           exclude: /node_modules/
//         },
//       ]
//     },
//   }
// }

// module.exports = getConfig();
module.exports = {
  devtool: 'source-map',
  entry:   `${__dirname}/src/simply-animate.ts`,
  output:  {
    path:     path.resolve(__dirname, 'dist'),
    filename: 'simply-animate.js',
  },

  module: {
    rules: [
      // TypeScript
      {
        test:    /\.ts?$/,
        use:     'ts-loader',
        exclude: /node_modules/
      },
    ]
  },
}
