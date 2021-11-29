module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  env: {
    REACT_APP_API_URL: 'https://a3euwetft5.execute-api.us-east-1.amazonaws.com/test1/',
    REACT_APP_FADONITECH_API: 'http://graphql.fadonitech.com:4000/graphql',
    NEXT_PUBLIC_GOOGLE_ANALYTICSA: 'UA-125816177-2',
    NEXT_PUBLIC_GOOGLE_ADS: 'AW-10797204558',
    NEXT_PUBLIC_GOOGLE_ADS_SEND_TO: 'AW-10797204558/EzlrCNnZ2f8CEM6IwZwo',
  },
  withTM: require('next-transpile-modules')(['three'])
};
