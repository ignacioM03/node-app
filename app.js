const express = requier('express');
const app = express();
const port = 8080;

app.get('/',(req, res)=>{
    res.send('hello wolrd');
})

app.use(port,()=>{
    console.log('on')
})