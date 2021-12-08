const path = require("path")
const autoprefixer = require("autoprefixer")

module.exports = [{
  entry: [
    "./src/styles/material.scss",
    "./src/scripts/material.js"
  ],
  output: {
    path: path.resolve(__dirname, ""),
    filename: "./output/scripts/material.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "./output/styles/material.css"
            }
          },
          { loader: "extract-loader" },
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer()
                ]
              }
            }
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              webpackImporter: false,
              sassOptions: {
                includePaths: ["./node_modules"]
              }
            }
          }
        ]
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      }
    ]
  }
}]
