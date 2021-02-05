const route = require('express').Router();
const config = require('../config');
const axios = require('axios').default;
route.get('/', async (req, res) => {
    let params = {};
    const { page } = req.query;
    if(page) params.page = page
    axios.get(
        `${config.rawg.api_domain}/api/games?key=${config.rawg.key}`, {params})
        .then(response => res.send(response.data));
})

module.exports = route;