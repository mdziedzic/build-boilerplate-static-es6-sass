const fs = require('fs');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  const realContentFolderPath = `${fs.realpathSync(`${__dirname}/source/`)}/`;
  const pages = glob.sync(`${__dirname}/source/**/*.html`);

  return pages.map(page => {
    const filename = page.replace(realContentFolderPath, '');
    return new HtmlWebpackPlugin({
      template: page,
      filename,
      hash: true,
    });
  });
};
