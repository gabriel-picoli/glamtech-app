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
            '@utils': './src/utils',
            '@hooks': './src/hooks',
            '@styles': './src/styles',
            '@services': './src/services',
            '@interfaces': './src/interfaces'
          }
        }
      ],
      ['babel-plugin-styled-components', { displayName: true }]
    ]
  }
}
