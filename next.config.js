require('dotenv').config();
const withImages = require('next-images')

module.exports = withImages({
  env: {
    GQL_URI: process.env.GQL_URI,
    GQL_PASSWORD: process.env.GQL_PASSWORD,
    ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
    ALGOLIA_SEARCH_KEY: process.env.ALGOLIA_SEARCH_KEY,
    ALGOLIA_ADMIN_KEY: process.env.ALGOLIA_ADMIN_KEY,
    GOOGLE_API: process.env.GOOGLE_API
  },
});