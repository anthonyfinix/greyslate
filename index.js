var os = require("os");
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 80;
const api = require('./api');
app.use(cors());
app.use(express.static('build'))
app.get('/', (req, res) => {
    res.sendFile('build/index.html');
})
var hostname = os.hostname();
app.use('/api', api);
app.listen(port, () => {
    console.log(`listening to port ${port}`);
})
