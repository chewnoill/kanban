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
        // We only want to run the server in development
        cmd: '',
        watch: 'cd ../server && yarn start',
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
