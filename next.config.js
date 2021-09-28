module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  env: {
    REACT_APP_API_URL:'https://a3euwetft5.execute-api.us-east-1.amazonaws.com/test1/',
  },
  withTM: require('next-transpile-modules')(['three'])
};
