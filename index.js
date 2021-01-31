let express = require('express');
let app = express();
let port = process.env.PORT || 8080;

app.get('/',(req,res)=>{
    res.send('hello');
})
app.listen(port,()=>{
    console.log('listening to port 3000');
})
