let express = require('express');
let app = express();
let port = 3000;
app.get('/',(res,req)=>{
    res.send('hello');
})
app.listen(port,()=>{
    console.log('listening to port 3000');
})
