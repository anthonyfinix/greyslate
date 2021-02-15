const axios = require("axios").default;
const config = require('../../config');

module.exports = axios.create({
  baseURL: "https://api.rawg.io",
  params: { key: process.env.RAWG_API_KEY || config.rawg.key },
});
