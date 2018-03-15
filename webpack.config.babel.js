import { join } from 'path';
const include = join(__dirname, 'src');

export default {
  entry: './src/index',
  output: {
    path: join(__dirname, 'dist'),
    libraryExport: 'default',
    libraryTarget: 'umd',
  },
  devtool: 'source-map',
  target: 'web',
  module: {
    loaders: [{ test: /\.js$/, loader: 'babel-loader', include }],
  },
};
