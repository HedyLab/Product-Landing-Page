const path = require('path')

const nextConfig = {

  sassOptions: {
    includePaths: [path.join(__dirname, '/src/styles')],
  },

  env: {
    GMAIL_CLIENT_ID: process.env.GMAIL_CLIENT_ID,
    GMAIL_REFRESH_TOKEN: process.env.GMAIL_REFRESH_TOKEN,
    GMAIL_CLIENT_SECRET: process.env.GMAIL_CLIENT_SECRET,
    GMAIL_USER: process.env.GMAIL_USER
  },
  assetPrefix: ".",
  images: {
    loader: "imgix",
    path: ".",
  },

  // webpack : {
  //   fs: 'empty',
  //   child_process: 'empty',
  //   net: 'empty',
  //   dns: 'empty',
  //   tls: 'empty',
  // },

  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        fs: 'empty',
        child_process: 'empty',
        net: 'empty',
        dns: 'empty',
        tls: 'empty',
      }
    }
    return config
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/master-box',
        permanent: true,
        basePath: false
      },
    ]
  },

}


module.exports = nextConfig