/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  let NextConfig = {
    reactStrictMode: true,
    env: {
      phase: phase,
    },
  };
  if (phase === PHASE_DEVELOPMENT_SERVER) {
  }
  if (phase === PHASE_PRODUCTION_SERVER) {
  }
  if (phase === PHASE_PRODUCTION_BUILD) {
  }

  return NextConfig;
};
