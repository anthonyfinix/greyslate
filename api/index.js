const route = require('express').Router();
const config = require('../config');
const axios = require('axios').default;
route.get('/', async (req, res) => {
    let params = {};
    const { page,search } = req.query;
    params.key = config.rawg.key;
    if(page) params.page = page;
    if(search && search !== '') params.search = search;

    axios.get(
        `${config.rawg.api_domain}/api/games`, {params})
        .then(response => res.send(response.data));
})

module.exports = route;