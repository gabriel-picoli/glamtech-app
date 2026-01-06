module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@': './src',
            '@modules': './src/modules',
            '@components': './src/components',
            '@utils': './src/utils'
          }
        }
      ],
      ['babel-plugin-styled-components', { displayName: true }]
    ]
  }
}
