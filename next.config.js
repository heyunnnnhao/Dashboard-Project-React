/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');
const path = require('path');

module.exports = (phase, { defaultConfig }) => {
  let NextConfig = {
    reactStrictMode: true,
  };
  if (phase === PHASE_DEVELOPMENT_SERVER) {
  }
  if (phase === PHASE_PRODUCTION_SERVER) {
  }
  if (phase === PHASE_PRODUCTION_BUILD) {
  }

  return NextConfig;
};

module.exports = {
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  distDir: 'dist',
};
