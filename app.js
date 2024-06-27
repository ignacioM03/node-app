const express = require('express');
const app = express();
const port = 8080;

app.get('/',(req, res)=>{
    res.send('hello wolrd');
})

app.listen(port,()=>{
    console.log('on')
})