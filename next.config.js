const path = require('node:path');

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (!dev) {
      const terserPluginIndex = config.optimization.minimizer.findIndex(
        (minimizer) => minimizer.constructor.name === 'TerserPlugin'
      );

      if (terserPluginIndex !== -1) {
        const TerserPlugin = require('terser-webpack-plugin');
        config.optimization.minimizer[terserPluginIndex] = new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
            },
            keep_fnames: true, // Добавьте это свойство, чтобы сохранить имена функций и классов
          },
          exclude: /src\/components\/Editor\/reducer/,
        });
      }
    }

    return config;
  },
};
