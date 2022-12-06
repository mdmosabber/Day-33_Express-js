const express = require('express');
require('dotenv').config();
const app = express();

app.use(express.json());


app.post('/',(req, res)=> {

    let jsonData = req.body;
    // res.send(jsonData.name + ' ' + jsonData.email);
    res.send(JSON.stringify(jsonData));

})




const port = process.env.PORT;
app.listen(port, ()=> {
    console.log(`Server Run Successfully at http://localhost:${port}`)
})