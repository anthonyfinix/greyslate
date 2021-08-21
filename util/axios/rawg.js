const axios = require("axios").default;
const config = require('../../config');

const rawg_api = axios.create({
  baseURL: "https://api.rawg.io",
  params: {
    key: process.env.RAWG_API_KEY || config.rawg.key,
    page_size: 100
  },
});

rawg_api.interceptors.request.use((request)=>{
  console.log(request.params);
  return request;
})

module.exports = rawg_api;