const express = require('express');
require('dotenv').config();

const port = process.env.PORT;
const app = express();

app.use((req, res, next)=>{
    console.log('This is Application Middleware');
    next()
})

app.get('/',(req, res)=> {
    res.send('This is home page');
})
app.get('/about',(req, res)=> {
    res.send('This is about page');
})

app.get('/test',(req, res)=> {
    let method = req.method;
    let ip = req.ip;
    let oriUrl = req.originalUrl;
    let url = req.url;
    let baseurl = req.baseurl;
    let cookie = req.cookies;
    let fresh = req.fresh;
    let hostname = req.hostname;
    let accepts = req.accepts('image/png,image/jpg');
    
    res.send(`Method: ${method}, IP: ${ip}, Original url:  ${oriUrl}, URL: 
    ${url}, Accept: ${accepts}, BaseURL: ${baseurl}, Cookie: ${cookie}, ${fresh}
    Hostname: ${hostname} `);
})



app.listen(port,()=> {
    console.log(`Server Run Successfully at http://localhost:${port}`)
})