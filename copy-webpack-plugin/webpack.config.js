const path=require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports={
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'output.js'
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "static/index.js"),
          to: path.resolve(__dirname, "test")
        }
      ]
    })
  ]  
}
