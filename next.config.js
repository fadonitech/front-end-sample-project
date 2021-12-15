module.exports = {
  distDir: 'out',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  env: {
    NEXT_PUBLIC_GOOGLE_ANALYTICSA: 'UA-125816177-2',
    NEXT_PUBLIC_GOOGLE_ADS: 'AW-10797204558',
    NEXT_PUBLIC_GOOGLE_ADS_SEND_TO: 'AW-10797204558/EzlrCNnZ2f8CEM6IwZwo',
  },
  withTM: require('next-transpile-modules')(['three'])
};
