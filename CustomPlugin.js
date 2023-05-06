const fs = require('node:fs');
const path = require('node:path');

class CustomPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('CustomPlugin', (compilation) => {
      if (compilation.minimizer) {
        compilation.minimizer.forEach((minimizer) => {
          if (minimizer.constructor.name === 'TerserPlugin') {
            const dirPath = path.resolve(__dirname, 'src/components/Editor/reducer');
            fs.readdirSync(dirPath).forEach((file) => {
              const filePath = `${dirPath}/${file}`;
              const content = fs.readFileSync(filePath, 'utf-8');
              minimizer.options.exclude.push(content);
            });
          }
        });
      }
    });
  }
}

module.exports = CustomPlugin;
