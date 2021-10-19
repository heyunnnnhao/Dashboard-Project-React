module.exports = {
  plugins: [
    {
      plugin: require('craco-alias'),
      debug: true,
      options: {
        source: 'options',
        baseUrl: './',
        aliases: {
          '@pages': './src/pages',
          '@api': './src/api',
          '@assets': './src/assets',
          '@common': './src/common',
          '@components': './src/components',
        },
      },
    },
    {
      plugin: require('craco-sass-resources-loader'),
      options: {
        resources: './src/common/style/variable.scss',
      },
    },
  ],
};
