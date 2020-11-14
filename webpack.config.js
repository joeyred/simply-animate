const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

const buildConfig = (minify = false) => {
  return {
    mode: minify ? 'production' : 'none',
    devtool: 'source-map',
    entry:   `${__dirname}/src/simply-animate.ts`,
    output:  {
      path:     path.resolve(__dirname, 'dist'),
      filename: minify ? 'simply-animate.min.js' : 'simply-animate.js',
      library: 'SimplyAnimate',
      libraryTarget: 'umd'
    },
    target: 'web',
    resolve: {
      // If multiple files share the same name but have different extensions,
      // webpack will resolve the one with the extension listed first in the 
      // array and skip the rest.
      extensions: [".ts", ".js"]
    },
    optimization: {
      minimize: minify
    },
    module: {
      rules: [
        // TypeScript
        {
          test:    /\.ts?$/,
          use:     {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.build.json'
            },
          },
          exclude: /node_modules/
        },
      ]
    },
  }
};

const demoConfig = () => {
  console.log('=======================');
  console.log(__dirname);
  console.log('=======================');
  return {
    devtool: 'source-map',
    entry: `${__dirname}/demo/demo.ts`,
    output: {
      path: path.resolve(__dirname, 'demo'),
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
          use:     {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.demo.json'
            },
          },
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
      contentBase:      `${__dirname}/demo`,
      publicPath:       '/dist/',
      watchContentBase: true,
      port:             8000
    }
  };
}

const config = (isProduction) => {
  if (isProduction) {
    return [
      buildConfig(),
      buildConfig(true)
    ];
  }

  return demoConfig();
};

module.exports = config(isProd);
