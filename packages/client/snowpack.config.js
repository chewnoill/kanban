const environment = process.env.NODE_ENV || 'development'
const development = environment === 'development'

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    [
      '@snowpack/plugin-run-script',
      {
        name: 'Server Console',
        cmd: development ? 'cd ../server && yarn start' : 'true',
      },
    ],
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    '@prefresh/snowpack',
  ],
  installOptions: {
    installTypes: true,
  },
  proxy: {
    '/graphql': {
      target: 'http://localhost:3000',
      changeOrigin: true,
    },
  },
}
