let express = require('express');
let app = express();
let port = process.env.PORT || 8080;
app.use(express.static('build'))
app.get('/',(req,res)=>{
    res.sendFile('build/index.html');
})
app.listen(port,()=>{
    console.log('listening to port 3000');
})
