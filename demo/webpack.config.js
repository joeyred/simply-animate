const config = {
  devtool: 'source-map',
  entry: `${__dirname}/demo.ts`,
  output: {
    path: __dirname,
    filename: 'bundle.js'
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
        use:     'ts-loader',
        exclude: /node_modules/
      },
      // Styles
      {
        test: /\.s[ac]ss$/i,
        use:  [
          'style-loader',
          'css-loader',
          {
            loader:  'sass-loader',
            options: {
              additionalData: '$env: ' + process.env.NODE_ENV + ';',
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase:      __dirname,
    publicPath:       '/dist/',
    watchContentBase: true,
    port:             8000
  }
};

console.log(config);

module.exports = config;