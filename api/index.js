const route = require("express").Router();
const rawg_api = require("../util/axios/rawg");

route.get("/games", async (req, res) => {
  let params = {};
  const { page, search } = req.query;
  if (page) params.page = page;
  if (search && search !== "") params.search = search;

  rawg_api
    .get(`/api/games`, { params })
    .then((response) => res.send(response.data))
    .catch((error) => res.send(error));
});

route.get("/game/:gameId", async (req, res) => {
  let { gameId } = req.params;
  rawg_api
    .get(`/api/games/${gameId}`)
    .then((response) => res.send(response.data))
    .catch((error) => res.send(error));
});

module.exports = route;
