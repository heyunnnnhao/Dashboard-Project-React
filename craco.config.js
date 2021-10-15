module.exports = {
  plugins: [
    {
      plugin: require('craco-alias'),
      debug: true,
      options: {
        source: 'options',
        baseUrl: './',
        aliases: {
          '@src': './src',
          '@pages': './src/pages',
          '@api': './src/api',
          '@assets': './src/assets',
        },
      },
    },
  ],
};
