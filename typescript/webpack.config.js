// You may need to update your module rules to load `ts` and `tsx` files with Babel loader.
// (For this to work, your Babel configuration also needs `@babel/preset-typescript`.)

module.exports = {
  /* ... */

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' }
        ]
      },

      /* ... */
    ]
  }

  /* ... */
}
