/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        customKey: 'my-value',
      },
    };
  }

  return {
    reactStrictMode: true,
    env: {
      customKey: 'my-value',
    },
  };
};
