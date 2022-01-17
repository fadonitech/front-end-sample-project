module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  env: {
    SECRET_API_KEY_API_URL: 'https://graphql-fadonitech.xyz/graphql',
    SECRET_API_KEY_GOOGLE_ANALYTICS: '',
    SECRET_API_KEY_GOOGLE_ADS: '',
    SECRET_API_KEY_GOOGLE_ADS_SEND_TO: '',
  },
  withTM: require('next-transpile-modules')(['three'])
};

/* 
  Change the Enviroment Variables Here To Reflect The Local Back-End Application
  You have Downloaded. Google APIs were removed for security sake.
*/