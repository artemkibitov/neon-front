// const path = require('node:path');
//
// module.exports = {
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     if (!dev) {
//       // Находим текущий TerserPlugin и изменяем его настройки
//       const terserPluginIndex = config.optimization.minimizer.findIndex(
//         (minimizer) => minimizer.constructor.name === 'TerserPlugin'
//       );
//
//       if (terserPluginIndex !== -1) {
//         const TerserPlugin = require('terser-webpack-plugin');
//         config.optimization.minimizer[terserPluginIndex] = new TerserPlugin({
//           terserOptions: {
//             compress: {
//               drop_console: false, // Отключает удаление console.log
//             },
//           },
//           exclude: path.resolve(__dirname, 'src/Editor/reducer'), // Исключаем директорию 'reducer' из минификации
//         });
//       }
//
//       // Добавьте NormalModuleReplacementPlugin для исключения директории 'reducer' из обработки
//       config.plugins.push(
//         new webpack.NormalModuleReplacementPlugin(
//           /^\.\/src\/Editor\/reducer/,
//           (resource) => {
//             resource.request = resource.request.replace(
//               /^\.\/src\/Editor\/reducer/,
//               path.resolve(__dirname, 'src/Editor/reducer')
//             );
//           }
//         )
//       );
//     }
//
//     return config;
//   },
// };
