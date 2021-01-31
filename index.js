let express = require('express');
let app = express();

app.get('/',(res,req)=>{
    res.send('hello');
})
