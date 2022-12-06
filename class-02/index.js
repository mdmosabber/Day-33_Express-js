const express = require('express');
const multer = require('multer');
require('dotenv').config();

const multerIns = multer();
const app = express();

//Middleware
app.use(express.json()) // body raw data received purpose
app.use(express.static('public'));
app.use(multerIns.array()) //body form data received purpose


app.post('/',(req, res)=> {
    let jsonData = req.body;
    // res.send(jsonData.name+ ' ' + jsonData.phone);
    res.send(JSON.stringify(jsonData));
})

const port = process.env.PORT;

app.listen(port, ()=> {
    console.log(`Server Run Successfully at http://localhost:${port}`);
})