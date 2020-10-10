const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: 'source-map',
  entry:   `${__dirname}/src/simply-animate.ts`,
  output:  {
    path:     path.resolve(__dirname, 'dist'),
    filename: 'simply-animate.js',
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    rules: [
      // TypeScript
      {
        test:    /\.ts?$/,
        use:     {
          loader: 'ts-loader',
          options: {
            configFile: isProd ? 'tsconfig.build.json' : 'tsconfig.json'
          },
        },
        
        exclude: /node_modules/
      },
    ]
  },
}
