const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

const middleware = (req, res, next)=> {
    
    console.log('This is route middleware');
    next();
  
}

app.get('/',middleware,(req, res)=> {
    if(req.method == 'GET'){
        res.send('Allah');
    }
})

app.listen(port, ()=> {
    console.log(`Server Run Successfully at http://localhost${port}`);
})